import express, { Application, Request, Response, urlencoded } from "express";
import cors from "cors";
import mysql, { RowDataPacket } from "mysql2";
import { ItemType, TourType } from "./src/data/data";

const connection = mysql.createConnection({
  host: "localhost",
  user: "test",
  password: "Password_123",
  database: "FaveCollection",
});

const app: Application = express();
const port = 3003;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(urlencoded({ extended: true }));

// メンバー
app.get("/members", (req: Request, res: Response) => {
  const sql = "SELECT * FROM members;";
  connection.query(sql, (error, result) => {
    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(200).json({ members: result });
    }
  });
});

// ツアー
app.get("/tours", (req: Request, res: Response) => {
  const sql =
    "SELECT * FROM photos INNER JOIN tours ON photos.tour_id = tours.id;";
  connection.query<RowDataPacket[]>(sql, (error, rows) => {
    if (error) {
      return res.status(500).json({ message: error.message });
    } else if (Array.isArray(rows) && rows.length > 0) {
      // tour ごとに photos をまとめる
      const toursMap: { [key: number]: TourType } = {};

      rows.forEach((row) => {
        if (!toursMap[row.tour_id]) {
          // 初めて出現する tour_id の場合、tour 情報を初期化
          toursMap[row.tour_id] = {
            tour_id: row.id,
            tour_title: row.tour_title,
            opening_date: new Date(row.opening_date),
            photos: [],
          };
        }
        // photo を photos 配列に追加
        toursMap[row.tour_id].photos.push({
          photo_id: row.id,
          photo_title: row.photo_title,
          release_date: new Date(row.releaseDate),
        });
      });
      // toursMapを配列型式に変換
      const result = Object.values(toursMap);
      return res.status(200).json({ tours: result });
    } else {
      return res.status(404).json({ message: "データがありません" });
    }
  });
});

// アイテム全て
app.get("/items", (req: Request, res: Response) => {
  const sql = `
      SELECT
        items.id AS item_id,
        items.img_path,
        items.item_title,
        items.member_id AS items_member_id,
        items.tour_id AS items_tour_id,
        items.item_num,
        items.num_rows,
        items.num_cols,
        members.id AS member_id,
        members.name,
        members.color,
        members.member_num,
        tours.id AS tour_id,
        tours.tour_title,
        tours.opening_date,
        photos.id AS photo_id,
        photos.tour_id AS photos_tour_id,
        photos.photo_title,
        photos.release_date
      FROM items
      INNER JOIN members ON items.member_id = members.id
      INNER JOIN tours ON items.tour_id = tours.id
      INNER JOIN photos ON tours.id = photos.tour_id;
    `;
  connection.query<RowDataPacket[]>(sql, (error, rows) => {
    if (error) {
      return res.status(500).json({ message: error.message });
    } else {
      // console.log(rows);

      const itemsMap: { [key: number]: ItemType } = {};

      rows.forEach((row) => {
        if (!itemsMap[row.item_id]) {
          itemsMap[row.item_id] = {
            item_id: row.item_id,
            img_path: row.img_path,
            item_title: row.item_title,
            item_num: row.item_num,
            num_rows: row.num_rows,
            num_cols: row.num_cols,
            member: {
              member_id: row.member_id,
              member_num: row.member_num,
              name: row.name,
              color: row.color,
            },
            tour: {
              tour_id: row.tour_id,
              tour_title: row.tour_title,
              opening_date: row.opening_date,
              photos: [],
            },
          };
        }

        // 各 row の写真データを photos 配列に追加
        itemsMap[row.item_id].tour.photos.push({
          photo_id: row.photo_id,
          photo_title: row.photo_title,
          release_date: row.release_date,
        });
      });
      // console.log(itemsMap);
      res.status(200).json({ items: itemsMap });
    }
  });
});

// 指定のアイテム
app.get("/item", (req: Request, res: Response) => {
  const itemId = req.query.id;
  const sql = `
      SELECT
        items.id AS item_id,
        items.img_path,
        items.item_title,
        items.member_id AS items_member_id,
        items.tour_id AS items_tour_id,
        items.item_num,
        members.id AS member_id,
        members.name,
        members.color,
        tours.id AS tour_id,
        tours.tour_title
      FROM items
      INNER JOIN members ON items.member_id = members.id
      INNER JOIN tours ON items.tour_id = tours.id
      WHERE items.id = ?;
    `;
  connection.query<RowDataPacket[]>(sql, [itemId], (error, result) => {
    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      const itemMap: { [key: number]: ItemType } = {};

      result.forEach((row) => {
        if (!itemMap[row.item_id]) {
          itemMap[row.item_id] = {
            item_id: row.item_id,
            img_path: row.img_path,
            item_title: row.item_title,
            item_num: row.item_num,
            member: {
              member_id: row.member_id,
              member_num: row.member_num,
              name: row.name,
              color: row.color,
            },
            tour: {
              tour_id: row.tour_id,
              tour_title: row.tour_title,
              opening_date: row.opening_date,
              photos: [],
            },
          };
        }
      });
      res.status(200).json({ item: itemMap });
    }
  });
});

try {
  app.listen(port, () => console.log(`server running at://localhost:${port}`));
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message);
  }
}
