import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { ItemType } from "../data/data";
import { useEffect, useState } from "react";
import axios from "axios";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Home() {
  const [items, setItems] = useState<ItemType[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3003/items").then((response) => {
      const { items } = response.data;
      setItems(items);
    });
  }, []);

  return (
    <ImageList variant="quilted" cols={4} sx={{ marginTop: "70px" }}>
      {Object.keys(items).map((key) => (
        <ImageListItem
          key={key}
          cols={items[Number(key)].num_cols || 1}
          rows={items[Number(key)].num_rows || 1}
        >
          <img
            {...srcset(
              items[Number(key)].img_path,
              121,
              items[Number(key)].num_rows,
              items[Number(key)].num_cols
            )}
            alt={items[Number(key)].item_title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
