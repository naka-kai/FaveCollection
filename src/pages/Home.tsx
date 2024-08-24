import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import aloha1 from "/public/img/aloha1.jpeg";
import aloha2 from "/public/img/aloha2.jpeg";
import aloha3 from "/public/img/aloha3.jpg";
import aloha4 from "/public/img/aloha4.jpeg";
import aloha5 from "/public/img/aloha5.jpeg";
import aloha6 from "/public/img/aloha6.jpeg";
import aloha7 from "/public/img/aloha7.jpeg";
import aloha8 from "/public/img/aloha8.jpeg";
import aloha9 from "/public/img/aloha9.jpeg";
import aloha10 from "/public/img/aloha10.jpeg";
import aloha11 from "/public/img/aloha11.jpeg";
import aloha12 from "/public/img/aloha12.jpeg";

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
    img: `${aloha1}`,
    title: "aloha1",
    rows: 2,
    cols: 2,
  },
  {
    img: `${aloha2}`,
    title: "aloha2",
  },
  {
    img: `${aloha11}`,
    title: "aloha11",
  },
  {
    img: `${aloha3}`,
    title: "aloha3",
    cols: 2,
  },
  {
    img: `${aloha9}`,
    title: "aloha9",
    cols: 2,
  },
  {
    img: `${aloha6}`,
    title: "aloha6",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: `${aloha7}`,
    title: "aloha7",
  },
  {
    img: `${aloha8}`,
    title: "aloha8",
  },
  {
    img: `${aloha10}`,
    title: "aloha10",
    rows: 2,
    cols: 2,
  },
  {
    img: `${aloha5}`,
    title: "aloha5",
  },
  {
    img: `${aloha4}`,
    title: "aloha4",
  },
  {
    img: `${aloha12}`,
    title: "aloha12",
    cols: 2,
  },
];
