import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
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
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link, useLocation } from "react-router-dom";

export default function Index() {
  const theme = useTheme();
  const location = useLocation();

  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  // 何列表示させるかレスポンシブ対応
  const cols = isSmDown ? 2 : isMdDown ? 3 : 4;

  return (
    <ImageList
      sx={{
        width: "calc(100% - 60px)",
        height: "auto",
        margin: "70px auto 30px",
        boxSizing: "border-box",
      }}
      cols={cols}
      gap={20}
    >
      {itemData.map((item, index) => (
        <ImageListItem
          key={item.img}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Link to={location.pathname + "/" + Number(index + 1)}>
            <img
              srcSet={`${item.img}?fit=contain&auto=format&dpr=2 2x`}
              src={`${item.img}?fit=contain&auto=format`}
              alt={item.title}
              style={{ objectFit: "contain" }}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.tag}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </Link>
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: `${aloha_square_1}`,
    title: "aloha_square_1",
    tag: "#bkristastucchio",
    rows: 3,
    cols: 3,
  },
  {
    img: `${aloha_horizontal_1}`,
    title: "aloha_horizontal_1",
    tag: "#rollelflex_graphy726",
    rows: 3,
    cols: 3,
  },
  {
    img: `${aloha_horizontal_2}`,
    title: "aloha_horizontal_2",
    tag: "#helloimnik",
    rows: 3,
    cols: 3,
  },
  {
    img: `${aloha_horizontal_3}`,
    title: "aloha_horizontal_3",
    tag: "#nolanissac",
    rows: 3,
    cols: 3,
  },
  {
    img: `${aloha_horizontal_4}`,
    title: "aloha_horizontal_4",
    tag: "#hjrc33",
    rows: 3,
    cols: 3,
  },
  {
    img: `${aloha_square_2}`,
    title: "aloha_square_2",
    tag: "#arwinneil",
    rows: 3,
    cols: 3,
  },
  {
    img: `${aloha_square_3}`,
    title: "aloha_square_3",
    tag: "#tjdragotta",
    rows: 3,
    cols: 3,
  },
  {
    img: `${aloha_square_4}`,
    title: "aloha_square_4",
    tag: "#katie_wasserman",
    rows: 3,
    cols: 3,
  },
  {
    img: `${aloha_vertical_1}`,
    title: "aloha_vertical_1",
    tag: "#silverdalex",
    rows: 3,
    cols: 3,
  },
  {
    img: `${aloha_vertical_2}`,
    title: "aloha_vertical_2",
    tag: "#shelleypauls",
    rows: 3,
    cols: 3,
  },
  {
    img: `${aloha_vertical_3}`,
    title: "aloha_vertical_3",
    tag: "#peterlaster",
    rows: 3,
    cols: 3,
  },
  {
    img: `${aloha_square_5}`,
    title: "aloha_square_5",
    tag: "#southside_customs",
    rows: 3,
    cols: 3,
  },
];
