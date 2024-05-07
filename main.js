import "./style.css";
import { makeWholeList } from "./script/accordian.js";
import { callToAction } from "./script/callToAction.js";

let data = [
  {
    category: "Boardgames",
    items: [
      {
        name: "Catan (Base Game)",
        price: 54.95,
        image:
          "https://store.401games.ca/cdn/shop/files/Catan-Base-Game_2560x.jpg?v=1698349444",
        url: "https://store.401games.ca/products/catan-base-game",
      },
      {
        name: "Ticket to Ride",
        price: 53.95,
        image:
          "https://store.401games.ca/cdn/shop/files/Ticket-to-Ride_2560x.jpg?v=1698354230",
        url: "https://store.401games.ca/products/ticket-to-ride",
      },
      {
        name: "Pandemic",
        price: 34.99,
        image:
          "https://store.401games.ca/cdn/shop/files/Pandemic_2560x.jpg?v=1698352428",
        url: "https://store.401games.ca/products/pandemic",
      },
    ],
  },
  {
    category: "Books",
    items: [
      {
        name: "This Summer Will Be Different",
        price: 17.46,
        image:
          "https://dynamic.indigoimages.ca/v1/books/books/0735249679/1.jpg?width=810&maxHeight=810&quality=85",
        url: "https://www.indigo.ca/en-ca/this-summer-will-be-different---indigo-exclusive-edition/9780735249677.html",
      },
      {
        name: "Chainsaw Man, Vol. 13",
        price: 15.99,
        image:
          "https://dynamic.indigoimages.ca/v1/books/books/1974741028/1.jpg?width=810&maxHeight=810&quality=85",
        url: "https://www.indigo.ca/en-ca/chainsaw-man-vol.-13/9781974741021.html",
      },
      {
        name: "Funny Story",
        price: 27.3,
        image:
          "https://dynamic.indigoimages.ca/v1/books/books/0593441281/1.jpg?width=810&maxHeight=810&quality=85",
        url: "https://www.indigo.ca/en-ca/funny-story/9780593441282.html",
      },
    ],
  },
  {
    category: "Electronics",
    items: [
      {
        name: "DJI Mini 3",
        price: 599.0,
        image:
          "https://m.media-amazon.com/images/I/61Yoga5FJlL._AC_SL1500_.jpg",
        url: "https://www.amazon.ca/DJI-Mini-RC-Lightweight-Intelligent/dp/B0BL3NZT5D?th=1",
      },
      {
        name: "Nikon Z Fc 16-50mm F/3.5-6.3vr (silver) Lens Kit",
        price: 1349.0,
        image:
          "https://m.media-amazon.com/images/I/91yIW+9WVBS._AC_SL1500_.jpg",
        url: "https://www.amazon.ca/Nikon-16-50mm-3-5-6-3VR-Silver-Lens/dp/B0987WWV89",
      },
      {
        name: "Ring Floodlight Cam",
        price: 174.99,
        image: "https://m.media-amazon.com/images/I/51TdAAWxGnS._SL1500_.jpg",
        url: "https://www.amazon.ca/Ring-Floodlight-Cam-Wired-Plus/dp/B08F69M456",
      },
    ],
  },
];

document.querySelector("#app").appendChild(makeWholeList(data));

let callToActionData = [
  {
    title: "Board Games",
    description:
      "like Settlers of Catan, invite players to think outside the box, strategize, and build bonds through shared challenges.",
    image:
      "https://billychan.ca//static/490d8f726b40ddee34d1db82f6ae261d/416c3/boardgame.webp",
    url: "https://billychan.ca/boardgames/",
  },
  {
    title: "Music",
    description:
      "like a multifaceted elixir, weaves threads of calmness, invigoration, and creative sparks.",
    image:
      "https://billychan.ca/static/3cb24d0e1554a327a1ea662f011eeb4d/416c3/music.webp",
    url: "https://billychan.ca/music/",
  },
  {
    title: "Travel",
    description:
      "like an open book, invites you to explore distant lands, immerse yourself in diverse cultures, and learn the universal language of respect.",
    image:
      "https://billychan.ca/static/fb021378bc17c28d8e54f1c58cf30d3f/416c3/travel.webp",
    url: "https://billychan.ca/travel/",
  },
];

document.querySelector("#app").appendChild(callToAction(callToActionData));
