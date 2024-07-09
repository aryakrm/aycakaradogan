"use client";

import React from "react";
import "./designsStyle.scss";
import ImageGallery from "react-image-gallery";
import Nav from "../app/components/Nav/Nav";
import Footer from "../app/components/Footer/Footer";
import "../app/globals.css";

const necat = [
  {
    original:
      "https://ik.imagekit.io/aryakrm/Necat%20British/02.jpg?updatedAt=1716485397692",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Necat%20British/02.jpg?updatedAt=1716485397692",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "necat",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Necat%20British/01.jpg?updatedAt=1716485397240",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Necat%20British/01.jpg?updatedAt=1716485397240",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "necat",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Necat%20British/03.jpg?updatedAt=1716485397478",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Necat%20British/03.jpg?updatedAt=1716485397478",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "necat",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Necat%20British/04.jpg?updatedAt=1716485397295",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Necat%20British/04.jpg?updatedAt=1716485397295",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "necat",
  },
];
const zeytin = [
  {
    original:
      "https://ik.imagekit.io/aryakrm/Zeytinlik/1-min.jpg?updatedAt=1716484362815",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Zeytinlik/1-min.jpg?updatedAt=1716484362815",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "zeytèn",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Zeytinlik/2-min.jpg?updatedAt=1716484363106",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Zeytinlik/2-min.jpg?updatedAt=1716484363106",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "zeytèn",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Zeytinlik/3-min.jpg?updatedAt=1716484362907",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Zeytinlik/3-min.jpg?updatedAt=1716484362907",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "zeytèn",
  },
];
const alsancak = [
  {
    original:
      "https://ik.imagekit.io/aryakrm/Alsancak%20Site/1%20(1).jpg?updatedAt=1716483535893",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Alsancak%20Site/1%20(1).jpg?updatedAt=1716483535893",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "alsancak",
  },
];
const ciglos = [
  {
    original:
      "https://ik.imagekit.io/aryakrm/Ciglos/1.jpg?updatedAt=1716483444309",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Ciglos/1.jpg?updatedAt=1716483444309",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "ciglos",
  },
];
const goya = [
  {
    original:
      "https://ik.imagekit.io/aryakrm/Goya%20%20Pasha%20Hotel%20Restaurant/1-min.jpg?updatedAt=1716483309110",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Goya%20%20Pasha%20Hotel%20Restaurant/1-min.jpg?updatedAt=1716483309110",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "goya",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Goya%20%20Pasha%20Hotel%20Restaurant/2-min.jpg?updatedAt=1716483308382",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Goya%20%20Pasha%20Hotel%20Restaurant/2-min.jpg?updatedAt=1716483308382",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "goya",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Goya%20%20Pasha%20Hotel%20Restaurant/3-min.jpg?updatedAt=1716483308928",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Goya%20%20Pasha%20Hotel%20Restaurant/3-min.jpg?updatedAt=1716483308928",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "goya",
  },
];
const lefkosaRes = [
  {
    original:
      "https://ik.imagekit.io/aryakrm/Lefko%C5%9Fa%20Restaurant%20Project%202020/1.jpg?updatedAt=1716483693757",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Lefko%C5%9Fa%20Restaurant%20Project%202020/1.jpg?updatedAt=1716483693757",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Nicosia Restaurant",
  },
];
const EsenTepeVilla = [
  {
    original:
      "https://ik.imagekit.io/aryakrm/esentepe%20villa/1.jpg?updatedAt=1716483099249",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/esentepe%20villa/1.jpg?updatedAt=1716483099249",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Villa Esentepe",
  },
];
const karpazStoneHouse = [
  {
    original:
      "https://ik.imagekit.io/aryakrm/karpaz%20stone%20house/1%20(1)-min.jpg?updatedAt=1716482802217",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/karpaz%20stone%20house/1%20(1)-min.jpg?updatedAt=1716482802217",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Karpaz Stone House",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/karpaz%20stone%20house/2%20(1)-min.jpg?updatedAt=1716482805439",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/karpaz%20stone%20house/2%20(1)-min.jpg?updatedAt=1716482805439",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Karpaz Stone House",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/karpaz%20stone%20house/3-min.jpg?updatedAt=1716482805791",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/karpaz%20stone%20house/3-min.jpg?updatedAt=1716482805791",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Karpaz Stone House",
  },
];
const beautySalon = [
  {
    original:
      "https://ik.imagekit.io/aryakrm/beauty%20salon/1-min.jpg?updatedAt=1716476678396",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/beauty%20salon/1-min.jpg?updatedAt=1716476678396",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Beauty Salon",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/beauty%20salon/2-min.jpg?updatedAt=1716476680751",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/beauty%20salon/2-min.jpg?updatedAt=1716476680751",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Beauty Salon",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/beauty%20salon/3-min.jpg?updatedAt=1716476682949",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/beauty%20salon/3-min.jpg?updatedAt=1716476682949",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Beauty Salon",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/beauty%20salon/4-min.jpg?updatedAt=1716476677921",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/beauty%20salon/4-min.jpg?updatedAt=1716476677921",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Beauty Salon",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/beauty%20salon/5-min.jpg?updatedAt=1716476679290",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/beauty%20salon/5-min.jpg?updatedAt=1716476679290",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Beauty Salon",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/beauty%20salon/6-min.jpg?updatedAt=1716476683854",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/beauty%20salon/6-min.jpg?updatedAt=1716476683854",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Beauty Salon",
  },
];
const catalkoyVilla = [
  {
    original:
      "https://ik.imagekit.io/aryakrm/catalkoy%20villa/1-min.png?updatedAt=1716479754937",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/catalkoy%20villa/1-min.png?updatedAt=1716479754937",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Villa Çatalköy",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/catalkoy%20villa/2-min.png?updatedAt=1716479754089",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/catalkoy%20villa/2-min.png?updatedAt=1716479754089",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Villa Çatalköy",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/catalkoy%20villa/3-min.png?updatedAt=1716479751155",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/catalkoy%20villa/3-min.png?updatedAt=1716479751155",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Villa Çatalköy",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/catalkoy%20villa/4-min.png?updatedAt=1716479751728",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/catalkoy%20villa/4-min.png?updatedAt=1716479751728",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Villa Çatalköy",
  },
];
const bellapaisVilla = [
  {
    original:
      "https://ik.imagekit.io/aryakrm/bellapais%20villa/1.jpg?updatedAt=1716478603791",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/bellapais%20villa/1.jpg?updatedAt=1716478603791",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Villa Bellapais",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/bellapais%20villa/2-min.jpg?updatedAt=1716478677671",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/bellapais%20villa/2-min.jpg?updatedAt=1716478677671",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Villa Bellapais",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/bellapais%20villa/3.jpg?updatedAt=1716478607566",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/bellapais%20villa/3.jpg?updatedAt=1716478607566",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Villa Bellapais",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/bellapais%20villa/4%20(1).jpg?updatedAt=1716478678785",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/bellapais%20villa/4%20(1).jpg?updatedAt=1716478678785",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Villa Bellapais",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/bellapais%20villa/5%20(1).jpg?updatedAt=1716478679140",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/bellapais%20villa/5%20(1).jpg?updatedAt=1716478679140",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Villa Bellapais",
  },
];
const lefkosaRes2 = [
  {
    original: "https://i.postimg.cc/c6GZvjBW/1-min-1.jpg",
    thumbnail: "https://i.postimg.cc/c6GZvjBW/1-min-1.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Nicosia Restaurant 2022",
  },
  {
    original: "https://i.postimg.cc/D0XnyFs5/2-min-1.jpg",
    thumbnail: "https://i.postimg.cc/D0XnyFs5/2-min-1.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Nicosia Restaurant 2022",
  },
  {
    original: "https://i.postimg.cc/TPtRttfj/3-min-1.jpg",
    thumbnail: "https://i.postimg.cc/TPtRttfj/3-min-1.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Nicosia Restaurant 2022",
  },
];
const raufUni = [
  {
    original: "https://i.postimg.cc/Zq2zCnm3/2-1.png",
    thumbnail: "https://i.postimg.cc/Zq2zCnm3/2-1.png",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Rauf Denktas University",
  },
  {
    original: "https://i.postimg.cc/7ZPkRjXC/2-logo.png",
    thumbnail: "https://i.postimg.cc/7ZPkRjXC/2-logo.png",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Rauf Denktas University",
  },
  {
    original: "https://i.postimg.cc/xCMh8PtD/6.jpg",
    thumbnail: "https://i.postimg.cc/xCMh8PtD/6.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Rauf Denktas University",
  },
  {
    original: "https://i.postimg.cc/7ZhR04mN/11.jpg",
    thumbnail: "https://i.postimg.cc/7ZhR04mN/11.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Rauf Denktas University",
  },
  {
    original: "https://i.postimg.cc/zGQckQQY/14.jpg",
    thumbnail: "https://i.postimg.cc/zGQckQQY/14.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Rauf Denktas University",
  },
  {
    original: "https://i.postimg.cc/43KrkGc3/16.jpg",
    thumbnail: "https://i.postimg.cc/43KrkGc3/16.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Rauf Denktas University",
  },
];
const UniLib = [
  {
    original: "https://i.postimg.cc/8zGRgmrf/3-min-1.jpg",
    thumbnail: "https://i.postimg.cc/8zGRgmrf/3-min-1.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Rauf Denktas University Library",
  },
  {
    original: "https://i.postimg.cc/sfB9YXrx/4-min.jpg",
    thumbnail: "https://i.postimg.cc/sfB9YXrx/4-min.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Rauf Denktas University Library",
  },
  {
    original: "https://i.postimg.cc/RZTcSJcs/5-min-1.jpg",
    thumbnail: "https://i.postimg.cc/RZTcSJcs/5-min-1.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Rauf Denktas University Library",
  },
];
const esenTepeLuxury = [
  {
    original:
      "https://ik.imagekit.io/aryakrm/esentepe%20luxury/3-min.jpg?updatedAt=1716482388054",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/esentepe%20luxury/3-min.jpg?updatedAt=1716482388054",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Luxury Villa Project, Esentepe",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/esentepe%20luxury/1-min.jpg?updatedAt=1716482386225",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/esentepe%20luxury/1-min.jpg?updatedAt=1716482386225",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Luxury Villa Project, Esentepe",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/esentepe%20luxury/2-min.jpg?updatedAt=1716482388734",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/esentepe%20luxury/2-min.jpg?updatedAt=1716482388734",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Luxury Villa Project, Esentepe",
  },

  {
    original:
      "https://ik.imagekit.io/aryakrm/esentepe%20luxury/4-min.jpg?updatedAt=1716482388711",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/esentepe%20luxury/4-min.jpg?updatedAt=1716482388711",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Luxury Villa Project, Esentepe",
  },
];
const laptaVilla = [
  {
    original:
      "https://ik.imagekit.io/aryakrm/lapta%20villa/1.jpg?updatedAt=1716469243553",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/lapta%20villa/1.jpg?updatedAt=1716469243553",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Villa Project in Lapta",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/lapta%20villa/2.jpg?updatedAt=1716469237415",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/lapta%20villa/2.jpg?updatedAt=1716469237415",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Villa Project in Lapta",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/lapta%20villa/3.jpg?updatedAt=1716469231491",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/lapta%20villa/3.jpg?updatedAt=1716469231491",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Villa Project in Lapta",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/lapta%20villa/4.jpg?updatedAt=1716469240137",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/lapta%20villa/4.jpg?updatedAt=1716469240137",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Villa Project in Lapta",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/lapta%20villa/5.jpg?updatedAt=1716469234800",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/lapta%20villa/5.jpg?updatedAt=1716469234800",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Villa Project in Lapta",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/lapta%20villa/6.jpg?updatedAt=1716469245248",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/lapta%20villa/6.jpg?updatedAt=1716469245248",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Villa Project in Lapta",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/lapta%20villa/7.jpg?updatedAt=1716469246208",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/lapta%20villa/7.jpg?updatedAt=1716469246208",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Villa Project in Lapta",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/lapta%20villa/8.jpg?updatedAt=1716469249617",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/lapta%20villa/8.jpg?updatedAt=1716469249617",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Villa Project in Lapta",
  },
];
const alacope = [
  {
    original:
      "https://ik.imagekit.io/aryakrm/izmir%20alacope/01.jpg?updatedAt=1717581837720",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/izmir%20alacope/01.jpg?updatedAt=1717581837720",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Alacope Hotel, Izmir",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/izmir%20alacope/02.jpg?updatedAt=1717581840305",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/izmir%20alacope/02.jpg?updatedAt=1717581840305",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Alacope Hotel, Izmir",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/izmir%20alacope/03.jpg?updatedAt=1717581838550",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/izmir%20alacope/03.jpg?updatedAt=1717581838550",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Alacope Hotel, Izmir",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/izmir%20alacope/04.jpg?updatedAt=1717581839069",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/izmir%20alacope/04.jpg?updatedAt=1717581839069",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Alacope Hotel, Izmir",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/izmir%20alacope/05.jpg?updatedAt=1717581840268",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/izmir%20alacope/05.jpg?updatedAt=1717581840268",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Alacope Hotel, Izmir",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/izmir%20alacope/06.jpg?updatedAt=1717581836905",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/izmir%20alacope/06.jpg?updatedAt=1717581836905",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Alacope Hotel, Izmir",
  },
];

const pashaLargeKing = [
  {
    original: "https://i.postimg.cc/rwkBSc0T/01-min.jpg",
    thumbnail: "https://i.postimg.cc/rwkBSc0T/01-min.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Pasha Hotel Large King Room, Nicosia",
  },
  {
    original: "https://i.postimg.cc/05KFFr7x/02-min.jpg",
    thumbnail: "https://i.postimg.cc/05KFFr7x/02-min.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Pasha Hotel Large King Room, Nicosia",
  },
  {
    original: "https://i.postimg.cc/ydt5Wz4w/03-min.jpg",
    thumbnail: "https://i.postimg.cc/ydt5Wz4w/03-min.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Pasha Hotel Large King Room, Nicosia",
  },
  {
    original: "https://i.postimg.cc/tJ6cxm97/04-min.jpg",
    thumbnail: "https://i.postimg.cc/tJ6cxm97/04-min.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Pasha Hotel Large King Room, Nicosia",
  },
  {
    original: "https://i.postimg.cc/4NCqgZ1c/05-min.jpg",
    thumbnail: "https://i.postimg.cc/4NCqgZ1c/05-min.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Pasha Hotel Large King Room, Nicosia",
  },
  {
    original: "https://i.postimg.cc/GhkN3NM5/06-min.jpg",
    thumbnail: "https://i.postimg.cc/GhkN3NM5/06-min.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Pasha Hotel Large King Room, Nicosia",
  },
];
const pashaSmallKing = [
  {
    original: "https://i.postimg.cc/8P0GWxdP/01-min.jpg",
    thumbnail: "https://i.postimg.cc/8P0GWxdP/01-min.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Pasha Hotel Small King Room, Nicosia",
  },
  {
    original: "https://i.postimg.cc/fLDQDss5/02-min.jpg",
    thumbnail: "https://i.postimg.cc/fLDQDss5/02-min.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Pasha Hotel Small King Room, Nicosia",
  },
  {
    original: "https://i.postimg.cc/JzHLQKK3/03-min.jpg",
    thumbnail: "https://i.postimg.cc/JzHLQKK3/03-min.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Pasha Hotel Small King Room, Nicosia",
  },
  {
    original: "https://i.postimg.cc/YS1B595h/04-min.jpg",
    thumbnail: "https://i.postimg.cc/YS1B595h/04-min.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Pasha Hotel Small King Room, Nicosia",
  },
  {
    original: "https://i.postimg.cc/5tcMKvkh/05-min.jpg",
    thumbnail: "https://i.postimg.cc/5tcMKvkh/05-min.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Pasha Hotel Small King Room, Nicosia",
  },
  {
    original: "https://i.postimg.cc/Kc9hSCHr/06-min.jpg",
    thumbnail: "https://i.postimg.cc/Kc9hSCHr/06-min.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Pasha Hotel Small King Room, Nicosia",
  },
  {
    original: "https://i.postimg.cc/cCkpR8n5/07-min.jpg",
    thumbnail: "https://i.postimg.cc/cCkpR8n5/07-min.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Pasha Hotel Small King Room, Nicosia",
  },
];

const pashaRestoration = [
  {
    original: "https://i.postimg.cc/L6WtV2V5/1.png",
    thumbnail: "https://i.postimg.cc/L6WtV2V5/1.png",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Pasha Hotel Restoration Project, Nicosia",
  },
  {
    original: "https://i.postimg.cc/Qxb8LJtW/2-1.png",
    thumbnail: "https://i.postimg.cc/Qxb8LJtW/2-1.png",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Pasha Hotel Restoration Project, Nicosia",
  },
];
const pashaTerrace = [
  {
    original: "https://i.postimg.cc/DZvf5LS2/01-min.jpg",
    thumbnail: "https://i.postimg.cc/DZvf5LS2/01-min.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Pasha Hotel Terrace Rooms, Nicosia",
  },
  {
    original: "https://i.postimg.cc/dtksWqVT/02-min.jpg",
    thumbnail: "https://i.postimg.cc/dtksWqVT/02-min.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Pasha Hotel Terrace Rooms, Nicosia",
  },
  {
    original: "https://i.postimg.cc/2yJzzt26/03-min.jpg",
    thumbnail: "https://i.postimg.cc/2yJzzt26/03-min.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Pasha Hotel Terrace Rooms, Nicosia",
  },
  {
    original: "https://i.postimg.cc/h434bJcB/04-min.jpg",
    thumbnail: "https://i.postimg.cc/h434bJcB/04-min.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Pasha Hotel Terrace Rooms, Nicosia",
  },
];
const airportVip = [
  {
    original: "https://i.postimg.cc/5yKhdr61/1-min-5.jpg",
    thumbnail: "https://i.postimg.cc/5yKhdr61/1-min-5.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Ercan Airport VIP Lounge, Nicosia",
  },
  {
    original: "https://i.postimg.cc/N0183r5j/2-min-1.jpg",
    thumbnail: "https://i.postimg.cc/N0183r5j/2-min-1.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Ercan Airport VIP Lounge, Nicosia",
  },
  {
    original: "https://i.postimg.cc/7Y6V56QK/3-min-1.jpg",
    thumbnail: "https://i.postimg.cc/7Y6V56QK/3-min-1.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Ercan Airport VIP Lounge, Nicosia",
  },
  {
    original: "https://i.postimg.cc/qM5GyTP4/4-min.jpg",
    thumbnail: "https://i.postimg.cc/qM5GyTP4/4-min.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Ercan Airport VIP Lounge, Nicosia",
  },
  {
    original: "https://i.postimg.cc/MZt5ZRtc/5-min-1.jpg",
    thumbnail: "https://i.postimg.cc/MZt5ZRtc/5-min-1.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Ercan Airport VIP Lounge, Nicosia",
  },
  {
    original: "https://i.postimg.cc/tJrNrQ7d/6-min.jpg",
    thumbnail: "https://i.postimg.cc/tJrNrQ7d/6-min.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Ercan Airport VIP Lounge, Nicosia",
  },
  {
    original: "https://i.postimg.cc/K8CJS2fJ/7-min.jpg",
    thumbnail: "https://i.postimg.cc/K8CJS2fJ/7-min.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Ercan Airport VIP Lounge, Nicosia",
  },
];
const bendo = [
  {
    original:
      "https://ik.imagekit.io/aryakrm/Bendo/1-min.jpg?updatedAt=1716481878794",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Bendo/1-min.jpg?updatedAt=1716481878794",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Bendo Restaurant, Kyrenia",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Bendo/2-min.jpg?updatedAt=1716481872631",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Bendo/2-min.jpg?updatedAt=1716481872631",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Bendo Restaurant, Kyrenia",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Bendo/3-min.jpg?updatedAt=1716481872582",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Bendo/3-min.jpg?updatedAt=1716481872582",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Bendo Restaurant, Kyrenia",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Bendo/4-min.jpg?updatedAt=1716481877175",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Bendo/4-min.jpg?updatedAt=1716481877175",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Bendo Restaurant, Kyrenia",
  },
];
const pashaStandard = [
  {
    original:
      "https://ik.imagekit.io/aryakrm/pasha%20standard/1-min(3).jpg?updatedAt=1716465148007",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/pasha%20standard/1-min(3).jpg?updatedAt=1716465148007",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Pasha Hotel Standard Rooms, Nicosia",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/pasha%20standard/2-min(2).jpg?updatedAt=1716465148673",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/pasha%20standard/2-min(2).jpg?updatedAt=1716465148673",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Pasha Hotel Standard Rooms, Nicosia",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/pasha%20standard/3-min(1).jpg?updatedAt=1716465147208",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/pasha%20standard/3-min(1).jpg?updatedAt=1716465147208",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Pasha Hotel Standard Rooms, Nicosia",
  },
];
const pasha5 = [
  {
    original: "https://i.postimg.cc/TPwkCfy4/3-min.jpg",
    thumbnail: "https://i.postimg.cc/TPwkCfy4/3-min.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Pasha Hotel 5.Floor Rooms, Nicosia",
  },
  {
    original: "https://i.postimg.cc/k4HvjSrV/1-min-4.jpg",
    thumbnail: "https://i.postimg.cc/k4HvjSrV/1-min-4.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Pasha Hotel 5.Floor Rooms, Nicosia",
  },
  {
    original: "https://i.postimg.cc/pTrBYZSb/2-min-1.jpg",
    thumbnail: "https://i.postimg.cc/pTrBYZSb/2-min-1.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Pasha Hotel 5.Floor Rooms, Nicosia",
  },
];
const sweetHome = [
  {
    original:
      "https://ik.imagekit.io/aryakrm/Karmi/1-min.jpg?updatedAt=1716482169094",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Karmi/1-min.jpg?updatedAt=1716482169094",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Sweet Home",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Karmi/2-min.jpg?updatedAt=1716482167568",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Karmi/2-min.jpg?updatedAt=1716482167568",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Sweet Home",
  },
  {
    original: "https://i.postimg.cc/fTtX9gY9/3-min-1.jpg",
    thumbnail: "https://i.postimg.cc/fTtX9gY9/3-min-1.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Sweet Home",
  },
];
const tuzlaVillas = [
  {
    original: "https://i.postimg.cc/mZvTpzfn/4-1.jpg",
    thumbnail: "https://i.postimg.cc/mZvTpzfn/4-1.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Villas Project, Tuzla, Magusa",
  },
  {
    original: "https://i.postimg.cc/N0qGyKbT/1-min-1.jpg",
    thumbnail: "https://i.postimg.cc/N0qGyKbT/1-min-1.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Villas Project, Tuzla, Magusa",
  },
  {
    original: "https://i.postimg.cc/nhQcc4Kp/2-min-2.jpg",
    thumbnail: "https://i.postimg.cc/nhQcc4Kp/2-min-2.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Villas Project, Tuzla, Magusa",
  },
  {
    original: "https://i.postimg.cc/gjSkr4Bk/3-min-2.jpg",
    thumbnail: "https://i.postimg.cc/gjSkr4Bk/3-min-2.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Villas Project, Tuzla, Magusa",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Tuzla/5-min.jpg?updatedAt=1716466433293",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Tuzla/5-min.jpg?updatedAt=1716466433293",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Villas Project, Tuzla, Magusa",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Tuzla/6-min.jpg?updatedAt=1716466431848",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Tuzla/6-min.jpg?updatedAt=1716466431848",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Villas Project, Tuzla, Magusa",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Tuzla/7-min.jpg?updatedAt=1716466432685",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Tuzla/7-min.jpg?updatedAt=1716466432685",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Villas Project, Tuzla, Magusa",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Tuzla/8-min.jpg?updatedAt=1716466435030",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Tuzla/8-min.jpg?updatedAt=1716466435030",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Villas Project, Tuzla, Magusa",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Tuzla/9-min.jpg?updatedAt=1716466432803",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Tuzla/9-min.jpg?updatedAt=1716466432803",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Villas Project, Tuzla, Magusa",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Tuzla/10-min.jpg?updatedAt=1716466433898",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Tuzla/10-min.jpg?updatedAt=1716466433898",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Villas Project, Tuzla, Magusa",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Tuzla/11-min.jpg?updatedAt=1716466449426",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Tuzla/11-min.jpg?updatedAt=1716466449426",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Villas Project, Tuzla, Magusa",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Tuzla/12-min.jpg?updatedAt=1716466442466",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Tuzla/12-min.jpg?updatedAt=1716466442466",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Villas Project, Tuzla, Magusa",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Tuzla/13-min.jpg?updatedAt=1716466442948",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Tuzla/13-min.jpg?updatedAt=1716466442948",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Villas Project, Tuzla, Magusa",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Tuzla/14-min.jpg?updatedAt=1716466442183",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Tuzla/14-min.jpg?updatedAt=1716466442183",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Villas Project, Tuzla, Magusa",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Tuzla/15-min.jpg?updatedAt=1716466442287",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Tuzla/15-min.jpg?updatedAt=1716466442287",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Villas Project, Tuzla, Magusa",
  },
];
const fjakaBar = [
  {
    original:
      "https://ik.imagekit.io/aryakrm/Fjaka%20Bar/1-min.jpg?updatedAt=1716485197087",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Fjaka%20Bar/1-min.jpg?updatedAt=1716485197087",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "FJAKA BAR, Kyrenia",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Fjaka%20Bar/2-min.jpg?updatedAt=1716485195903",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Fjaka%20Bar/2-min.jpg?updatedAt=1716485195903",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "FJAKA BAR, Kyrenia",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Fjaka%20Bar/3-min.jpg?updatedAt=1716485188945",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Fjaka%20Bar/3-min.jpg?updatedAt=1716485188945",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "FJAKA BAR, Kyrenia",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Fjaka%20Bar/4-min.jpg?updatedAt=1716485191424",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Fjaka%20Bar/4-min.jpg?updatedAt=1716485191424",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "FJAKA BAR, Kyrenia",
  },
];
const terasOcakbasi = [
  {
    original:
      "https://ik.imagekit.io/aryakrm/Teras%20Ocakba%C5%9F%C4%B1/1-min.jpg?updatedAt=1716484846506",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Teras%20Ocakba%C5%9F%C4%B1/1-min.jpg?updatedAt=1716484846506",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Teras Ocakbaşı Pasha Hotel, Kyrenia",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Teras%20Ocakba%C5%9F%C4%B1/2-min.jpg?updatedAt=1716484844291",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Teras%20Ocakba%C5%9F%C4%B1/2-min.jpg?updatedAt=1716484844291",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Teras Ocakbaşı Pasha Hotel, Kyrenia",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Teras%20Ocakba%C5%9F%C4%B1/3-min.jpg?updatedAt=1716484844501",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Teras%20Ocakba%C5%9F%C4%B1/3-min.jpg?updatedAt=1716484844501",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Teras Ocakbaşı Pasha Hotel, Kyrenia",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Teras%20Ocakba%C5%9F%C4%B1/4-min.jpg?updatedAt=1716484861764",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Teras%20Ocakba%C5%9F%C4%B1/4-min.jpg?updatedAt=1716484861764",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Teras Ocakbaşı Pasha Hotel, Kyrenia",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Teras%20Ocakba%C5%9F%C4%B1/5-min.jpg?updatedAt=1716484845583",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Teras%20Ocakba%C5%9F%C4%B1/5-min.jpg?updatedAt=1716484845583",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Teras Ocakbaşı Pasha Hotel, Kyrenia",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Teras%20Ocakba%C5%9F%C4%B1/6-min.jpg?updatedAt=1716484831406",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Teras%20Ocakba%C5%9F%C4%B1/6-min.jpg?updatedAt=1716484831406",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Teras Ocakbaşı Pasha Hotel, Kyrenia",
  },
];
const palmDubai = [
  {
    original: "https://i.postimg.cc/PrJJKD6z/1-min-2.jpg",
    thumbnail: "https://i.postimg.cc/PrJJKD6z/1-min-2.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Palm Jumeirah Villa, Dubai, United Arab Emirates",
  },
  {
    original: "https://i.ibb.co/5xX3LXR/2.jpg",
    thumbnail: "https://i.ibb.co/5xX3LXR/2.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Palm Jumeirah Villa, Dubai, United Arab Emirates",
  },
];
const metropol = [
  {
    original:
      "https://ik.imagekit.io/aryakrm/Metropol%20SuperMarket/1.jpg?updatedAt=1716482995179",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Metropol%20SuperMarket/1.jpg?updatedAt=1716482995179",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Metropol Super Market, Kyrenia",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Metropol%20SuperMarket/2.jpg?updatedAt=1716482994887",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Metropol%20SuperMarket/2.jpg?updatedAt=1716482994887",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Metropol Super Market, Kyrenia",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Metropol%20SuperMarket/3.jpg?updatedAt=1716482994775",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Metropol%20SuperMarket/3.jpg?updatedAt=1716482994775",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Metropol Super Market, Kyrenia",
  },
];
const enkayaCafe = [
  {
    original: "https://i.postimg.cc/tg6TDL2K/1-min-1.jpg",
    thumbnail: "https://i.postimg.cc/tg6TDL2K/1-min-1.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Enkaya Hotel Cafe",
  },
  {
    original: "https://i.postimg.cc/1tZzdJdf/2-min-1.jpg",
    thumbnail: "https://i.postimg.cc/1tZzdJdf/2-min-1.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Enkaya Hotel Cafe",
  },
  {
    original: "https://i.postimg.cc/vZcDx19H/3-min-1.jpg",
    thumbnail: "https://i.postimg.cc/vZcDx19H/3-min-1.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Enkaya Hotel Cafe",
  },
  {
    original: "https://i.postimg.cc/8PyjCd70/4-min.jpg",
    thumbnail: "https://i.postimg.cc/8PyjCd70/4-min.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Enkaya Hotel Cafe",
  },
  {
    original: "https://i.postimg.cc/mgJkYbN3/5-min-1.jpg",
    thumbnail: "https://i.postimg.cc/mgJkYbN3/5-min-1.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Enkaya Hotel Cafe",
  },
  {
    original: "https://i.postimg.cc/PrfChV5D/6-min.jpg",
    thumbnail: "https://i.postimg.cc/PrfChV5D/6-min.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Enkaya Hotel Cafe",
  },
  {
    original: "https://i.postimg.cc/HnzjXXBj/7-min.jpg",
    thumbnail: "https://i.postimg.cc/HnzjXXBj/7-min.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Enkaya Hotel Cafe",
  },
];
const enkayaRoof = [
  {
    original: "https://i.postimg.cc/1R2d12HC/1-min-1.jpg",
    thumbnail: "https://i.postimg.cc/1R2d12HC/1-min-1.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Enkaya Hotel Roof Bar And Restaurant Project",
  },
  {
    original: "https://i.postimg.cc/3rdq6Yg0/2-min-1.jpg",
    thumbnail: "https://i.postimg.cc/3rdq6Yg0/2-min-1.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Enkaya Roof Bar And Restaurant Project",
  },
  {
    original: "https://i.postimg.cc/65ZmWcb9/3-min-1.jpg",
    thumbnail: "https://i.postimg.cc/65ZmWcb9/3-min-1.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Enkaya Roof Bar And Restaurant Project",
  },
  {
    original: "https://i.postimg.cc/hhRzK2Jz/4-min.jpg",
    thumbnail: "https://i.postimg.cc/hhRzK2Jz/4-min.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Enkaya Roof Bar And Restaurant Project",
  },
  {
    original: "https://i.postimg.cc/4xbtxRQJ/5-min-1.jpg",
    thumbnail: "https://i.postimg.cc/4xbtxRQJ/5-min-1.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Enkaya Roof Bar And Restaurant Project",
  },
];
const laptaStoneHouse = [
  {
    original:
      "https://ik.imagekit.io/aryakrm/lapta%20stonehouse/1-min.jpg?updatedAt=1716470220139",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/lapta%20stonehouse/1-min.jpg?updatedAt=1716470220139",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Stone House, Lapta, Kyrenia",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/lapta%20stonehouse/2-min.jpg?updatedAt=1716470220471",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/lapta%20stonehouse/2-min.jpg?updatedAt=1716470220471",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Stone House, Lapta, Kyrenia",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/lapta%20stonehouse/3-min.jpg?updatedAt=1716470220595",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/lapta%20stonehouse/3-min.jpg?updatedAt=1716470220595",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Stone House, Lapta, Kyrenia",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/lapta%20stonehouse/4-min.jpg?updatedAt=1716470216195",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/lapta%20stonehouse/4-min.jpg?updatedAt=1716470216195",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Stone House, Lapta, Kyrenia",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/lapta%20stonehouse/6-min.jpg?updatedAt=1716470214930",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/lapta%20stonehouse/6-min.jpg?updatedAt=1716470214930",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Stone House, Lapta, Kyrenia",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/lapta%20stonehouse/6-min.jpg?updatedAt=1716470214930",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/lapta%20stonehouse/6-min.jpg?updatedAt=1716470214930",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Stone House, Lapta, Kyrenia",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/lapta%20stonehouse/7-min.jpg?updatedAt=1716470208317",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/lapta%20stonehouse/7-min.jpg?updatedAt=1716470208317",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Stone House, Lapta, Kyrenia",
  },
];
const manolyaHotel = [
  {
    original:
      "https://ik.imagekit.io/aryakrm/Manolya/0-min.jpg?updatedAt=1716468395736",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Manolya/0-min.jpg?updatedAt=1716468395736",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Manolya Hotel, Lapta, Kyrenia",
  },
  {
    original: "https://i.postimg.cc/T1qNc4Xf/3-min-1.jpg",
    thumbnail: "https://i.postimg.cc/T1qNc4Xf/3-min-1.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Manolya Hotel, Lapta, Kyrenia",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Manolya/4-min.png?updatedAt=1716468403511",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Manolya/4-min.png?updatedAt=1716468403511",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Manolya Hotel, Lapta, Kyrenia",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Manolya/5%20(2).jpg?updatedAt=1716468400259",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Manolya/5%20(2).jpg?updatedAt=1716468400259",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Manolya Hotel, Lapta, Kyrenia",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Manolya/6%20(2).jpg?updatedAt=1716468405030",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Manolya/6%20(2).jpg?updatedAt=1716468405030",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Manolya Hotel, Lapta, Kyrenia",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Manolya/7%20(2).jpg?updatedAt=1716468397561",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Manolya/7%20(2).jpg?updatedAt=1716468397561",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Manolya Hotel, Lapta, Kyrenia",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Manolya/8%20(2).jpg?updatedAt=1716468391394",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Manolya/8%20(2).jpg?updatedAt=1716468391394",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Manolya Hotel, Lapta, Kyrenia",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Manolya/9-min.jpg?updatedAt=1716468401095",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Manolya/9-min.jpg?updatedAt=1716468401095",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Manolya Hotel, Lapta, Kyrenia",
  },
  {
    original: "https://i.postimg.cc/qRK5N7bt/10-min.jpg",
    thumbnail: "https://i.postimg.cc/qRK5N7bt/10-min.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Manolya Hotel, Lapta, Kyrenia",
  },
  {
    original: "https://i.postimg.cc/Pfm7hPv9/11-min.jpg",
    thumbnail: "https://i.postimg.cc/Pfm7hPv9/11-min.jpg",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Manolya Hotel, Lapta, Kyrenia",
  },
];

function Designs() {
  return (
    <section className="Designs">
      <Nav />
      <h1 className="designs_title">Some of Our Extraordinary Designs</h1>
      <div className="project">
        <h1>Palm Jumeirah Villa, Dubai, United Arab Emirates - 2024</h1>
        <div className="renders">
          <ImageGallery
            thumbnailPosition="bottom"
            showThumbnails={true}
            showPlayButton={false}
            items={palmDubai}
          />
        </div>
      </div>
      <div className="project">
        <h1>Pasha Hotel Restoration Project, Nicosia - 2024</h1>
        <div className="renders">
          <ImageGallery
            thumbnailPosition="bottom"
            showThumbnails={true}
            showPlayButton={false}
            items={pashaRestoration}
          />
        </div>
      </div>
      <div className="project">
        <h1>Pasha Hotel King Deluxe Suit Rooms, Nicosia - 2024</h1>
        <div className="renders">
          <ImageGallery
            thumbnailPosition="bottom"
            showThumbnails={true}
            showPlayButton={false}
            items={pashaSmallKing}
          />
        </div>
      </div>
      <div className="project">
        <h1>Pasha Hotel King Suit Rooms, Nicosia - 2024</h1>
        <div className="renders">
          <ImageGallery
            thumbnailPosition="bottom"
            showThumbnails={true}
            showPlayButton={false}
            items={pashaLargeKing}
          />
        </div>
      </div>
      <div className="project">
        <h1>Pasha Hotel Suit Rooms, Nicosia - 2024</h1>
        <div className="renders">
          <ImageGallery
            thumbnailPosition="bottom"
            showThumbnails={true}
            showPlayButton={false}
            items={pasha5}
          />
        </div>
      </div>
      <div className="project">
        <h1>Pasha Hotel Terrace Suit Rooms, Nicosia - 2024</h1>
        <div className="renders">
          <ImageGallery
            thumbnailPosition="bottom"
            showThumbnails={true}
            showPlayButton={false}
            items={pashaTerrace}
          />
        </div>
      </div>
      <div className="project">
        <h1>Ercan Airport VIP Lounge, Nicosia - 2023</h1>
        <div className="renders">
          <ImageGallery
            thumbnailPosition="bottom"
            showThumbnails={true}
            showPlayButton={false}
            items={airportVip}
          />
        </div>
      </div>
      <div className="project">
        <h1>Villas Project, Tuzla, Famagusta - 2023</h1>
        <div className="renders">
          <ImageGallery
            thumbnailPosition="bottom"
            showThumbnails={true}
            showPlayButton={false}
            items={tuzlaVillas}
          />
        </div>
      </div>
      <div className="project">
        <h1>Manolya Hotel, Lapta, Kyrenia - 2023</h1>
        <div className="renders">
          <ImageGallery
            thumbnailPosition="bottom"
            showThumbnails={true}
            showPlayButton={false}
            items={manolyaHotel}
          />
        </div>
      </div>
      <div className="project">
        <h1>Alacope Hotel, Izmir - 2023</h1>
        <div className="renders">
          <ImageGallery
            thumbnailPosition="bottom"
            showThumbnails={true}
            showPlayButton={false}
            items={alacope}
          />
        </div>
      </div>
      <div className="project">
        <h1>Stone House, Lapta - 2023</h1>
        <div className="renders">
          <ImageGallery
            thumbnailPosition="bottom"
            showThumbnails={true}
            showPlayButton={false}
            items={laptaStoneHouse}
          />
        </div>
      </div>
      <div className="project">
        <h1>Villa Project, Lapta - 2023</h1>
        <div className="renders">
          <ImageGallery
            thumbnailPosition="bottom"
            showThumbnails={true}
            showPlayButton={false}
            items={laptaVilla}
          />
        </div>
      </div>
      <div className="project">
        <h1>Restaurant Project, Nicosia - 2023</h1>
        <div className="renders">
          <ImageGallery
            thumbnailPosition="bottom"
            showThumbnails={true}
            showPlayButton={false}
            items={lefkosaRes2}
          />
        </div>
      </div>
      <div className="project">
        <h1>Beauty Salon, Kyrenia - 2022</h1>
        <div className="renders">
          <ImageGallery
            thumbnailPosition="bottom"
            showThumbnails={true}
            showPlayButton={false}
            items={beautySalon}
          />
        </div>
      </div>
      <div className="project">
        <h1>En Kaya Hotel Roof Bar And Restaurant Project - 2022</h1>
        <div className="renders">
          <ImageGallery
            thumbnailPosition="bottom"
            showThumbnails={true}
            showPlayButton={false}
            items={enkayaRoof}
          />
        </div>
      </div>
      <div className="project">
        <h1>En Kaya Hotel Cafe Project - 2022</h1>
        <div className="renders">
          <ImageGallery
            thumbnailPosition="bottom"
            showThumbnails={true}
            showPlayButton={false}
            items={enkayaCafe}
          />
        </div>
      </div>

      <div className="project">
        <h1>Villa Project, Bellapais - 2022</h1>
        <div className="renders">
          <ImageGallery
            thumbnailPosition="bottom"
            showThumbnails={true}
            showPlayButton={false}
            items={bellapaisVilla}
          />
        </div>
      </div>
      <div className="project">
        <h1>Villa Project, Çatalköy - 2022</h1>
        <div className="renders">
          <ImageGallery
            thumbnailPosition="bottom"
            showThumbnails={true}
            showPlayButton={false}
            items={catalkoyVilla}
          />
        </div>
      </div>

      <div className="project">
        <h1>Rauf Denktas University - 2022</h1>
        <div className="renders">
          <ImageGallery
            thumbnailPosition="bottom"
            showThumbnails={true}
            showPlayButton={false}
            items={raufUni}
          />
        </div>
      </div>
      <div className="project">
        <h1>Rauf Denktas University Library - 2022</h1>
        <div className="renders">
          <ImageGallery
            thumbnailPosition="bottom"
            showThumbnails={true}
            showPlayButton={false}
            items={UniLib}
          />
        </div>
      </div>
      <div className="project">
        <h1>Bendo Restaurant, Kyrenia - 2022</h1>
        <div className="renders">
          <ImageGallery
            thumbnailPosition="bottom"
            showThumbnails={true}
            showPlayButton={false}
            items={bendo}
          />
        </div>
      </div>
      <div className="project">
        <h1>Villa Restoration Project, Karmi - 2022</h1>
        <div className="renders">
          <ImageGallery
            thumbnailPosition="bottom"
            showThumbnails={true}
            showPlayButton={false}
            items={sweetHome}
          />
        </div>
      </div>
      <div className="project">
        <h1>Luxury Villa Project, Esentepe - 2022</h1>
        <div className="renders">
          <ImageGallery
            thumbnailPosition="bottom"
            showThumbnails={true}
            showPlayButton={false}
            items={esenTepeLuxury}
          />
        </div>
      </div>
      <div className="project">
        <h1>Stone House, Karpaz - 2022</h1>
        <div className="renders">
          <ImageGallery
            thumbnailPosition="bottom"
            showThumbnails={true}
            showPlayButton={false}
            items={karpazStoneHouse}
          />
        </div>
      </div>
      <div className="project">
        <h1>Metropol Super Market, Kyrenia - 2021</h1>
        <div className="renders">
          <ImageGallery
            thumbnailPosition="bottom"
            showThumbnails={true}
            showPlayButton={false}
            items={metropol}
          />
        </div>
      </div>
      <div className="project">
        <h1>Villa Project, Esentepe - 2021</h1>
        <div className="renders">
          <ImageGallery
            thumbnailPosition="bottom"
            showThumbnails={true}
            showPlayButton={false}
            items={EsenTepeVilla}
          />
        </div>
      </div>
      <div className="project">
        <h1>Pasha Hotel Roof - Goya Restaurant - 2021</h1>
        <div className="renders">
          <ImageGallery
            thumbnailPosition="bottom"
            showThumbnails={true}
            showPlayButton={false}
            items={goya}
          />
        </div>
      </div>
      <div className="project">
        <h1>Luxury Ciglos Villa Project - 2021</h1>
        <div className="renders">
          <ImageGallery
            thumbnailPosition="bottom"
            showThumbnails={true}
            showPlayButton={false}
            items={ciglos}
          />
        </div>
      </div>
      <div className="project">
        <h1>Alsancak Site - 2021</h1>
        <div className="renders">
          <ImageGallery
            thumbnailPosition="bottom"
            showThumbnails={true}
            showPlayButton={false}
            items={alsancak}
          />
        </div>
      </div>
      <div className="project">
        <h1>Restaurant Project, Nicosia - 2020</h1>
        <div className="renders">
          <ImageGallery
            thumbnailPosition="bottom"
            showThumbnails={true}
            showPlayButton={false}
            items={lefkosaRes}
          />
        </div>
      </div>
      <div className="project">
        <h1>Zeytin Homes - Zeytinlik, Kyrenia - 2020</h1>
        <div className="renders">
          <ImageGallery
            thumbnailPosition="bottom"
            showThumbnails={true}
            showPlayButton={false}
            items={zeytin}
          />
        </div>
      </div>
      <div className="project">
        <h1>Pasha Hotel Roof - Teras Ocakbaşı, Kyrenia - 2021</h1>
        <div className="renders">
          <ImageGallery
            thumbnailPosition="bottom"
            showThumbnails={true}
            showPlayButton={false}
            items={terasOcakbasi}
          />
        </div>
      </div>
      <div className="project">
        <h1>Pasha Hotel Roof - FJAKA BAR, Kyrenia - 2020</h1>
        <div className="renders">
          <ImageGallery
            thumbnailPosition="bottom"
            showThumbnails={true}
            showPlayButton={false}
            items={fjakaBar}
          />
        </div>
      </div>
      <div className="project">
        <h1>Necat British College (Nicosia Campus) - 2019</h1>
        <div className="renders">
          <ImageGallery
            thumbnailPosition="bottom"
            showThumbnails={true}
            showPlayButton={false}
            items={necat}
          />
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Designs;
