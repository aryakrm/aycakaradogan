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
    originalAlt: "Lefkoşa Restaurant",
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
    original:
      "https://ik.imagekit.io/aryakrm/sosisci/1-min.jpg?updatedAt=1716476066813",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/sosisci/1-min.jpg?updatedAt=1716476066813",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Lefkoşa Restaurant 2022",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/sosisci/2-min.jpg?updatedAt=1716476066032",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/sosisci/2-min.jpg?updatedAt=1716476066032",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Lefkoşa Restaurant 2022",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/sosisci/3-min.jpg?updatedAt=1716476069152",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/sosisci/3-min.jpg?updatedAt=1716476069152",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Lefkoşa Restaurant 2022",
  },
];
const raufUni = [
  {
    original:
      "https://ik.imagekit.io/aryakrm/rauf%20denkta%C5%9F%20uni/1%20(1).jpg?updatedAt=1716480838848",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/rauf%20denkta%C5%9F%20uni/1%20(1).jpg?updatedAt=1716480838848",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Rauf Denktas University",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/rauf%20denkta%C5%9F%20uni/2%20(1).jpg?updatedAt=1716480836889",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/rauf%20denkta%C5%9F%20uni/2%20(1).jpg?updatedAt=1716480836889",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Rauf Denktas University",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/rauf%20denkta%C5%9F%20uni/6-min.jpg?updatedAt=1716480819908",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/rauf%20denkta%C5%9F%20uni/6-min.jpg?updatedAt=1716480819908",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Rauf Denktas University",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/rauf%20denkta%C5%9F%20uni/7-min.jpg?updatedAt=1716480828351",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/rauf%20denkta%C5%9F%20uni/7-min.jpg?updatedAt=1716480828351",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Rauf Denktas University",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/rauf%20denkta%C5%9F%20uni/8-min.jpg?updatedAt=1716480831625",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/rauf%20denkta%C5%9F%20uni/8-min.jpg?updatedAt=1716480831625",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Rauf Denktas University",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/rauf%20denkta%C5%9F%20uni/9-min.jpg?updatedAt=1716480828740",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/rauf%20denkta%C5%9F%20uni/9-min.jpg?updatedAt=1716480828740",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Rauf Denktas University",
  },
];
const UniLib = [
  {
    original:
      "https://ik.imagekit.io/aryakrm/Rauf%20Library/3-min.jpg?updatedAt=1716481222127",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Rauf%20Library/3-min.jpg?updatedAt=1716481222127",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Rauf Denktas University Library",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Rauf%20Library/4-min.jpg?updatedAt=1716481220904",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Rauf%20Library/4-min.jpg?updatedAt=1716481220904",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Rauf Denktas University Library",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Rauf%20Library/5-min.jpg?updatedAt=1716481222930",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Rauf%20Library/5-min.jpg?updatedAt=1716481222930",
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
const pashaRestoration = [
  {
    original:
      "https://ik.imagekit.io/aryakrm/Intro/1%20(1).jpg?updatedAt=1716460154512",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Intro/1%20(1).jpg?updatedAt=1716460154512",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Pasha Hotel Restoration Project, Lefkoşa",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/pasha%20restoration/2%20(1).jpg?updatedAt=1716462724590",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/pasha%20restoration/2%20(1).jpg?updatedAt=1716462724590",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Pasha Hotel Restoration Project, Lefkoşa",
  },
];
const airportVip = [
  {
    original:
      "https://ik.imagekit.io/aryakrm/vip%20havaliman%C4%B1/1-min.jpg?updatedAt=1716463301983",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/vip%20havaliman%C4%B1/1-min.jpg?updatedAt=1716463301983",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Ercan Airport VIP Lounge, Lefkoşa",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/vip%20havaliman%C4%B1/2-min.jpg?updatedAt=1716463298537",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/vip%20havaliman%C4%B1/2-min.jpg?updatedAt=1716463298537",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Ercan Airport VIP Lounge, Lefkoşa",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/vip%20havaliman%C4%B1/3-min.jpg?updatedAt=1716463303741",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/vip%20havaliman%C4%B1/3-min.jpg?updatedAt=1716463303741",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Ercan Airport VIP Lounge, Lefkoşa",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/vip%20havaliman%C4%B1/4-min.jpg?updatedAt=1716463297357",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/vip%20havaliman%C4%B1/4-min.jpg?updatedAt=1716463297357",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Ercan Airport VIP Lounge, Lefkoşa",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/vip%20havaliman%C4%B1/5-min.jpg?updatedAt=1716463300217",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/vip%20havaliman%C4%B1/5-min.jpg?updatedAt=1716463300217",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Ercan Airport VIP Lounge, Lefkoşa",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/vip%20havaliman%C4%B1/6-min.jpg?updatedAt=1716463545167",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/vip%20havaliman%C4%B1/6-min.jpg?updatedAt=1716463545167",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Ercan Airport VIP Lounge, Lefkoşa",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/vip%20havaliman%C4%B1/7-min.jpg?updatedAt=1716463295883",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/vip%20havaliman%C4%B1/7-min.jpg?updatedAt=1716463295883",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Ercan Airport VIP Lounge, Lefkoşa",
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
    originalAlt: "Pasha Hotel Standard Rooms, Lefkoşa",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/pasha%20standard/2-min(2).jpg?updatedAt=1716465148673",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/pasha%20standard/2-min(2).jpg?updatedAt=1716465148673",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Pasha Hotel Standard Rooms, Lefkoşa",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/pasha%20standard/3-min(1).jpg?updatedAt=1716465147208",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/pasha%20standard/3-min(1).jpg?updatedAt=1716465147208",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Pasha Hotel Standard Rooms, Lefkoşa",
  },
];
const pasha5 = [
  {
    original:
      "https://ik.imagekit.io/aryakrm/pasha5/1-min(2).jpg?updatedAt=1716464520844",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/pasha5/1-min(2).jpg?updatedAt=1716464520844",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Pasha Hotel 5.Floor Rooms, Lefkoşa",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/pasha5/2-min(1).jpg?updatedAt=1716464518853",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/pasha5/2-min(1).jpg?updatedAt=1716464518853",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Pasha Hotel 5.Floor Rooms, Lefkoşa",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/pasha5/3-min.jpg?updatedAt=1716464520361",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/pasha5/3-min.jpg?updatedAt=1716464520361",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Pasha Hotel 5.Floor Rooms, Lefkoşa",
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
    original:
      "https://ik.imagekit.io/aryakrm/Karmi/3-min.jpg?updatedAt=1716482170285",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Karmi/3-min.jpg?updatedAt=1716482170285",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Sweet Home",
  },
];
const tuzlaVillas = [
  {
    original:
      "https://ik.imagekit.io/aryakrm/Tuzla/4%20(1).jpg?updatedAt=1716466487704",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Tuzla/4%20(1).jpg?updatedAt=1716466487704",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Villas Project, Tuzla, Magusa",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Tuzla/1-min.jpg?updatedAt=1716466470510",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Tuzla/1-min.jpg?updatedAt=1716466470510",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Villas Project, Tuzla, Magusa",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Tuzla/2-min.jpg?updatedAt=1716466469994",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Tuzla/2-min.jpg?updatedAt=1716466469994",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Villas Project, Tuzla, Magusa",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Tuzla/3-min.jpg?updatedAt=1716466468214",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Tuzla/3-min.jpg?updatedAt=1716466468214",
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
    original: "https://i.ibb.co/Fw67Qqd/1.jpg",
    thumbnail: "https://i.ibb.co/Fw67Qqd/1.jpg",
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
    original:
      "https://ik.imagekit.io/aryakrm/enkaya%20cafe/1-min.jpg?updatedAt=1716478082395",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/enkaya%20cafe/1-min.jpg?updatedAt=1716478082395",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Enkaya Hotel Cafe",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/enkaya%20cafe/2-min.jpg?updatedAt=1716478115588",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/enkaya%20cafe/2-min.jpg?updatedAt=1716478115588",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Enkaya Hotel Cafe",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/enkaya%20cafe/3-min.jpg?updatedAt=1716478088345",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/enkaya%20cafe/3-min.jpg?updatedAt=1716478088345",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Enkaya Hotel Cafe",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/enkaya%20cafe/4-min.jpg?updatedAt=1716478083708",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/enkaya%20cafe/4-min.jpg?updatedAt=1716478083708",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Enkaya Hotel Cafe",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/enkaya%20cafe/5-min.jpg?updatedAt=1716478091546",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/enkaya%20cafe/5-min.jpg?updatedAt=1716478091546",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Enkaya Hotel Cafe",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/enkaya%20cafe/6-min.jpg?updatedAt=1716478074960",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/enkaya%20cafe/6-min.jpg?updatedAt=1716478074960",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Enkaya Hotel Cafe",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/enkaya%20cafe/7-min.jpg?updatedAt=1716478090193",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/enkaya%20cafe/7-min.jpg?updatedAt=1716478090193",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Enkaya Hotel Cafe",
  },
];
const enkayaRoof = [
  {
    original:
      "https://ik.imagekit.io/aryakrm/enkaya%20roof/1-min.jpg?updatedAt=1716477341308",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/enkaya%20roof/1-min.jpg?updatedAt=1716477341308",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Enkaya Hotel Roof Bar And Restaurant Project",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/enkaya%20roof/2-min.jpg?updatedAt=1716477347384",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/enkaya%20roof/2-min.jpg?updatedAt=1716477347384",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Enkaya Roof Bar And Restaurant Project",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/enkaya%20roof/3-min.jpg?updatedAt=1716477341571",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/enkaya%20roof/3-min.jpg?updatedAt=1716477341571",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Enkaya Roof Bar And Restaurant Project",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/enkaya%20roof/4-min.jpg?updatedAt=1716477332320",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/enkaya%20roof/4-min.jpg?updatedAt=1716477332320",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Enkaya Roof Bar And Restaurant Project",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/enkaya%20roof/5-min.jpg?updatedAt=1716477342686",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/enkaya%20roof/5-min.jpg?updatedAt=1716477342686",
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
    original:
      "https://ik.imagekit.io/aryakrm/Manolya/1%20(4).jpg?updatedAt=1716468415690",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Manolya/1%20(4).jpg?updatedAt=1716468415690",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Manolya Hotel, Lapta, Kyrenia",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Manolya/3-min.jpg?updatedAt=1716468413716",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Manolya/3-min.jpg?updatedAt=1716468413716",
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
    original:
      "https://ik.imagekit.io/aryakrm/Manolya/10-min.jpg?updatedAt=1716468422899",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Manolya/10-min.jpg?updatedAt=1716468422899",
    originalHeight: "300",
    originalWidth: "400",
    originalAlt: "Manolya Hotel, Lapta, Kyrenia",
  },
  {
    original:
      "https://ik.imagekit.io/aryakrm/Manolya/11-min.jpg?updatedAt=1716468423916",
    thumbnail:
      "https://ik.imagekit.io/aryakrm/Manolya/11-min.jpg?updatedAt=1716468423916",
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
        <h1>Pasha Hotel Restoration Project, Lefkoşa - 2024</h1>
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
        <h1>Pasha Hotel Suit Rooms, Lefkoşa - 2024</h1>
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
        <h1>Pasha Hotel Standard Rooms, Lefkoşa - 2024</h1>
        <div className="renders">
          <ImageGallery
            thumbnailPosition="bottom"
            showThumbnails={true}
            showPlayButton={false}
            items={pashaStandard}
          />
        </div>
      </div>
      <div className="project">
        <h1>Ercan Airport VIP Lounge, Lefkoşa - 2023</h1>
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
        <h1>Restaurant Project, Lefkoşa - 2023</h1>
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
        <h1>Restaurant Project, Lefkoşa - 2020</h1>
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
