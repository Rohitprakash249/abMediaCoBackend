const express = require("express");
const bodyParser = require("express");

const cors = require("cors");
const app = express();
const corsOptions = {
  origin: "https://ab-media-co-front-end.vercel.app", // List of allowed domains
  credentials: true, // Allow cookies to be sent and received
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  // "Content-Type": "application/json"
};

app.use(cors(corsOptions));

app.get("/api/destinations", (req, res) => {
  const popularDestinationData = [
    {
      name: "Jammu & Kashmir",
      price: 4999,
      imagelink: "https://i.imgur.com/HH1s2kx.jpeg",
    },
    {
      name: "Himachal pradesh",
      price: 4999,
      imagelink: "https://i.imgur.com/FLyU0tl.jpeg",
    },
    {
      name: "Goa",
      price: 4999,
      imagelink: "https://i.imgur.com/8GJf0ii.jpeg",
    },
    {
      name: "Assam",
      price: 4999,
      imagelink: "https://i.imgur.com/Bap9xk6.jpeg",
    },
    {
      name: "Maharashtra",
      price: 4999,
      imagelink: "https://i.imgur.com/e0rBrIC.jpeg",
    },
    {
      name: "Kerela",
      price: 4999,
      imagelink: "https://i.imgur.com/5REbJsY.jpeg",
    },
  ];

  return res.json(popularDestinationData);
});

app.get("/api/packages/top-selling", (req, res) => {
  const topSellingPackages = [
    {
      name: "AMAZING KERELA TOUR",
      imagelink: "https://i.imgur.com/5REbJsY.jpeg",
    },
    {
      name: "Golden Temple Tour",
      imagelink: "https://i.imgur.com/bxNeGSA.jpeg",
    },
    {
      name: "KASHMIR HOLIDAY TOUR",
      imagelink: "https://i.imgur.com/FLyU0tl.jpeg",
    },
    {
      name: "RAJASTHAN TOUR",
      imagelink: "https://i.imgur.com/GTOBldD.jpeg",
    },
    {
      name: "TRIP TO GOA",
      imagelink: "https://i.imgur.com/uaG3CiO.jpeg",
    },
    {
      name: "NAINITAL ESCAPE",
      imagelink: "https://i.imgur.com/bEvh9bB.jpeg",
    },
  ];
  return res.json(topSellingPackages);
});
app.get("/", (req, res) => {
  res.send("server is running now.Now you can send Api requests.");
});

module.exports = app;
