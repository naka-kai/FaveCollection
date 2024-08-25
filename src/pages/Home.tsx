import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import aloha_horizontal_1 from "/public/img/aloha_horizontal_1.jpg";
import aloha_horizontal_2 from "/public/img/aloha_horizontal_2.jpg";
import aloha_horizontal_3 from "/public/img/aloha_horizontal_3.jpg";
import aloha_horizontal_4 from "/public/img/aloha_horizontal_4.jpg";
import aloha_square_1 from "/public/img/aloha_square_1.jpg";
import aloha_square_2 from "/public/img/aloha_square_2.jpg";
import aloha_square_3 from "/public/img/aloha_square_3.jpg";
import aloha_square_4 from "/public/img/aloha_square_4.jpg";
import aloha_square_5 from "/public/img/aloha_square_5.jpg";
import aloha_vertical_1 from "/public/img/aloha_vertical_1.jpg";
import aloha_vertical_2 from "/public/img/aloha_vertical_2.jpg";
import aloha_vertical_3 from "/public/img/aloha_vertical_3.jpg";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Home() {
  return (
    <ImageList variant="quilted" cols={4} sx={{ marginTop: "70px" }}>
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: `${aloha_square_1}`,
    title: "aloha_square_1",
    rows: 2,
    cols: 2,
  },
  {
    img: `${aloha_horizontal_1}`,
    title: "aloha_horizontal_1",
  },
  {
    img: `${aloha_horizontal_2}`,
    title: "aloha_horizontal_2",
  },
  {
    img: `${aloha_horizontal_3}`,
    title: "aloha_horizontal_3",
    cols: 2,
  },
  {
    img: `${aloha_horizontal_4}`,
    title: "aloha_horizontal_4",
    cols: 2,
  },
  {
    img: `${aloha_square_2}`,
    title: "aloha_square_2",
    rows: 2,
    cols: 2,
  },
  {
    img: `${aloha_square_3}`,
    title: "aloha_square_3",
  },
  {
    img: `${aloha_square_4}`,
    title: "aloha_square_4",
  },
  {
    img: `${aloha_vertical_1}`,
    title: "aloha_vertical_1",
    rows: 2,
    cols: 2,
  },
  {
    img: `${aloha_vertical_2}`,
    title: "aloha_vertical_2",
  },
  {
    img: `${aloha_vertical_3}`,
    title: "aloha_vertical_3",
  },
  {
    img: `${aloha_square_5}`,
    title: "aloha_square_5",
    cols: 2,
  },
];
