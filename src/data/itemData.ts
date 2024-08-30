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

type CategoryType = {
  num: number;
  name: string;
  color: string;
};

const category: { [key: number]: CategoryType } = {
  2: { num: 2, name: "小笠原海", color: "#3301FF" },
  3: { num: 3, name: "船津稜雅", color: "#CA32FF" },
  4: { num: 4, name: "草川拓弥", color: "#00CC34" },
  5: { num: 5, name: "村田祐基", color: "#FE0202" },
  7: { num: 7, name: "松尾太陽", color: "#CCCCCC" },
  11: { num: 11, name: "志村秀哉", color: "#7C7C7C" },
  12: { num: 12, name: "森次政裕", color: "#935A04" },
  13: { num: 13, name: "髙松アロハ", color: "#11E0D9" },
  14: { num: 14, name: "柏木悠", color: "#FC8A07" },
};

type itemDataType = {
  img: string;
  title: string;
  category: CategoryType;
  tag: string;
  tourOpeningDate: Date;
  releaseDate: Date;
  num: number;
  rows?: number;
  cols?: number;
};

export const itemData: itemDataType[] = [
  {
    img: `${aloha_square_1}`,
    title: "生写真セットA 右から1番目",
    category: category[13],
    tag: "#Rail_is_Beautiful",
    tourOpeningDate: new Date(2024, 10, 1),
    releaseDate: new Date(2024, 10, 1),
    num: 1,
    rows: 2,
    cols: 2,
  },
  {
    img: `${aloha_horizontal_1}`,
    title: "生写真セットC 右から2番目",
    category: category[13],
    tag: "#Rail_is_Beautiful",
    tourOpeningDate: new Date(2024, 10, 1),
    releaseDate: new Date(2024, 10, 1),
    num: 1,
  },
  {
    img: `${aloha_horizontal_2}`,
    title: "生写真セットA 右から3番目",
    category: category[13],
    tag: "#Rail_is_Beautiful",
    tourOpeningDate: new Date(2024, 10, 1),
    releaseDate: new Date(2024, 10, 1),
    num: 1,
  },
  {
    img: `${aloha_horizontal_3}`,
    title: "生写真セットB 右から2番目",
    category: category[13],
    tag: "#T.I.M.E",
    tourOpeningDate: new Date(2024, 10, 1),
    releaseDate: new Date(2024, 10, 1),
    num: 1,
    cols: 2,
  },
  {
    img: `${aloha_horizontal_4}`,
    title: "生写真セットA 右から5番目",
    category: category[13],
    tag: "#Rail_is_Beautiful",
    tourOpeningDate: new Date(2024, 10, 1),
    releaseDate: new Date(2024, 10, 1),
    num: 1,
    cols: 2,
  },
  {
    img: `${aloha_square_2}`,
    title: "生写真セットB 右から1番目",
    category: category[13],
    tag: "#Rail_is_Beautiful",
    tourOpeningDate: new Date(2024, 10, 1),
    releaseDate: new Date(2024, 10, 1),
    num: 2,
    rows: 2,
    cols: 2,
  },
  {
    img: `${aloha_square_3}`,
    title: "生写真セットA 右から2番目",
    category: category[13],
    tag: "#T.I.M.E",
    tourOpeningDate: new Date(2024, 10, 1),
    releaseDate: new Date(2024, 10, 1),
    num: 1,
  },
  {
    img: `${aloha_square_4}`,
    title: "生写真セットB 右から3番目",
    category: category[13],
    tag: "#Rail_is_Beautiful",
    tourOpeningDate: new Date(2024, 10, 1),
    releaseDate: new Date(2024, 10, 1),
    num: 1,
  },
  {
    img: `${aloha_vertical_1}`,
    title: "生写真セットA 右から4番目",
    category: category[13],
    tag: "#Rail_is_Beautiful",
    tourOpeningDate: new Date(2024, 10, 1),
    releaseDate: new Date(2024, 10, 1),
    num: 3,
    rows: 2,
    cols: 2,
  },
  {
    img: `${aloha_vertical_2}`,
    title: "生写真セットB 右から5番目",
    category: category[13],
    tag: "#T.I.M.E",
    tourOpeningDate: new Date(2024, 10, 1),
    releaseDate: new Date(2024, 10, 1),
    num: 1,
  },
  {
    img: `${aloha_vertical_3}`,
    title: "生写真セットC 右から1番目",
    category: category[13],
    tag: "#Rail_is_Beautiful",
    tourOpeningDate: new Date(2024, 10, 1),
    releaseDate: new Date(2024, 10, 1),
    num: 2,
  },
  {
    img: `${aloha_square_5}`,
    title: "生写真セットB 右から4番目",
    category: category[13],
    tag: "#T.I.M.E",
    tourOpeningDate: new Date(2024, 10, 1),
    releaseDate: new Date(2024, 10, 1),
    num: 1,
    cols: 2,
  },
];
