// import aloha_horizontal_1 from "/public/img/aloha_horizontal_1.jpg";
// import aloha_horizontal_2 from "/public/img/aloha_horizontal_2.jpg";
// import aloha_horizontal_3 from "/public/img/aloha_horizontal_3.jpg";
// import aloha_horizontal_4 from "/public/img/aloha_horizontal_4.jpg";
// import aloha_square_1 from "/public/img/aloha_square_1.jpg";
// import aloha_square_2 from "/public/img/aloha_square_2.jpg";
// import aloha_square_3 from "/public/img/aloha_square_3.jpg";
// import aloha_square_4 from "/public/img/aloha_square_4.jpg";
// import aloha_square_5 from "/public/img/aloha_square_5.jpg";
// import aloha_vertical_1 from "/public/img/aloha_vertical_1.jpg";
// import aloha_vertical_2 from "/public/img/aloha_vertical_2.jpg";
// import aloha_vertical_3 from "/public/img/aloha_vertical_3.jpg";

export type MemberType = {
  member_id: number;
  member_num: number;
  name: string;
  color: string;
};

export type TourType = {
  tour_id: number;
  tour_title: string;
  opening_date: Date;

  photos: PhotoType[];
};

export type TourOptionType = TourType & { firstLetter: string };

export type PhotoType = {
  photo_id: number;
  photo_title: string;
  release_date: Date;
};

export type ItemType = {
  item_id: number;
  img_path: string;
  item_title: string;
  member: MemberType;
  tour: TourType;
  item_num: number;
  num_rows?: number;
  num_cols?: number;
};

// export const membersInfo: MemberType[] = [
//   { num: 2, name: "小笠原海", color: "#3301FF" },
//   { num: 3, name: "船津稜雅", color: "#CA32FF" },
//   { num: 4, name: "草川拓弥", color: "#00CC34" },
//   { num: 5, name: "村田祐基", color: "#FE0202" },
//   { num: 7, name: "松尾太陽", color: "#CCCCCC" },
//   { num: 11, name: "志村秀哉", color: "#7C7C7C" },
//   { num: 12, name: "森次政裕", color: "#935A04" },
//   { num: 13, name: "髙松アロハ", color: "#11E0D9" },
//   { num: 14, name: "柏木悠", color: "#FC8A07" },
// ];

// const membersInfoMap = membersInfo.reduce((acc, member) => {
//   acc[member.num] = member;
//   return acc;
// }, {} as { [key: number]: MemberType });

// export const tours: TourType[] = [
//   {
//     tourTitle: "EBiDAN_THE_LIVE_CRUISE_2024",
//     openingDate: new Date(2024, 8, 17),
//     photos: [
//       {
//         photoTitle: "生写真セット～超特急ver.",
//         releaseDate: new Date(2024, 7, 1),
//       },
//     ],
//   },
//   {
//     tour_title: "2024_MEMORIAる_8号車の日",
//     openingDate: new Date(2024, 10, 1),
//     photos: [
//       {
//         photo_title: "生写真セットA",
//         releaseDate: new Date(2024, 6, 20),
//       },
//       {
//         photo_title: "生写真セットB",
//         releaseDate: new Date(2024, 6, 20),
//       },
//     ],
//   },
//   {
//     title: "Rail_is_Beautiful",
//     openingDate: new Date(2024, 4, 20),
//     photos: [
//       {
//         title: "生写真セットA",
//         releaseDate: new Date(2024, 6, 10),
//       },
//       {
//         title: "生写真セットB",
//         releaseDate: new Date(2024, 6, 10),
//       },
//       {
//         title: "生写真セットC",
//         releaseDate: new Date(2024, 4, 22),
//       },
//       {
//         title: "生写真セットD",
//         releaseDate: new Date(2024, 4, 22),
//       },
//       {
//         title: "生写真セットE",
//         releaseDate: new Date(2024, 6, 10),
//       },
//       {
//         title: "生写真セットF",
//         releaseDate: new Date(2024, 6, 10),
//       },
//     ],
//   },
//   {
//     title: "稜海しました！",
//     openingDate: new Date(2023, 9, 17),
//     photos: [
//       {
//         title: "生写真セット",
//         releaseDate: new Date(2023, 10, 18),
//       },
//       {
//         title: "生写真セット_#0000002",
//         releaseDate: new Date(2024, 3, 1),
//       },
//       {
//         title: "生写真セット_#0000003",
//         releaseDate: new Date(2024, 3, 1),
//       },
//     ],
//   },
//   {
//     title: "せぶいれのうた",
//     openingDate: new Date(2024, 2, 1),
//     photos: [
//       {
//         title: "ふぉとせっと",
//         releaseDate: new Date(2024, 3, 1),
//       },
//     ],
//   },
//   {
//     title: "T.I.M.E",
//     openingDate: new Date(2024, 12, 9),
//     photos: [
//       {
//         title: "生写真セットA",
//         releaseDate: new Date(2023, 12, 27),
//       },
//       {
//         title: "生写真セットB",
//         releaseDate: new Date(2023, 12, 27),
//       },
//     ],
//   },
//   {
//     title: "お試し超特急",
//     openingDate: new Date(2023, 10, 8),
//     photos: [
//       {
//         title: "生写真セット",
//         releaseDate: new Date(2023, 10, 9),
//       },
//     ],
//   },
//   {
//     title: "EBiDAN_THE_LIVE_UNIVERSE_2023",
//     openingDate: new Date(2023, 8, 11),
//     photos: [
//       {
//         title: "生写真セット～超特急ver.",
//         releaseDate: new Date(2023, 8, 19),
//       },
//     ],
//   },
// ];

// export const itemData: itemDataType[] = [
//   {
//     img: `${aloha_square_1}`,
//     title: "生写真セットA 右から1番目",
//     member: membersInfoMap[13],
//     tour: `#${tours[0].title}`,
//     num: 1,
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: `${aloha_horizontal_1}`,
//     title: "生写真セットC 右から2番目",
//     member: membersInfoMap[13],
//     tour: `#${tours[0].title}`,
//     num: 1,
//   },
//   {
//     img: `${aloha_horizontal_2}`,
//     title: "生写真セットA 右から3番目",
//     member: membersInfoMap[13],
//     tour: `#${tours[0].title}`,
//     num: 1,
//   },
//   {
//     img: `${aloha_horizontal_3}`,
//     title: "生写真セットB 右から2番目",
//     member: membersInfoMap[13],
//     tour: `#${tours[1].title}`,
//     num: 1,
//     cols: 2,
//   },
//   {
//     img: `${aloha_horizontal_4}`,
//     title: "生写真セットA 右から5番目",
//     member: membersInfoMap[13],
//     tour: `#${tours[0].title}`,
//     num: 1,
//     cols: 2,
//   },
//   {
//     img: `${aloha_square_2}`,
//     title: "生写真セットB 右から1番目",
//     member: membersInfoMap[13],
//     tour: `#${tours[0].title}`,
//     num: 2,
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: `${aloha_square_3}`,
//     title: "生写真セットA 右から2番目",
//     member: membersInfoMap[13],
//     tour: `#${tours[1].title}`,
//     num: 1,
//   },
//   {
//     img: `${aloha_square_4}`,
//     title: "生写真セットB 右から3番目",
//     member: membersInfoMap[13],
//     tour: `#${tours[0].title}`,
//     num: 1,
//   },
//   {
//     img: `${aloha_vertical_1}`,
//     title: "生写真セットA 右から4番目",
//     member: membersInfoMap[13],
//     tour: `#${tours[0].title}`,
//     num: 3,
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: `${aloha_vertical_2}`,
//     title: "生写真セットB 右から5番目",
//     member: membersInfoMap[13],
//     tour: `#${tours[1].title}`,
//     num: 1,
//   },
//   {
//     img: `${aloha_vertical_3}`,
//     title: "生写真セットC 右から1番目",
//     member: membersInfoMap[13],
//     tour: `#${tours[0].title}`,
//     num: 2,
//   },
//   {
//     img: `${aloha_square_5}`,
//     title: "生写真セットB 右から4番目",
//     member: membersInfoMap[13],
//     tour: `#${tours[1].title}`,
//     num: 1,
//     cols: 2,
//   },
// ];
