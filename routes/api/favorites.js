require("dotenv").config();
const express = require("express");
const router = express.Router();

const Favorites = require("../../models/Favorites");
const Card = require("../../models/Card");

//GET all favorited
router.get("/", async (req, res) => {
  try {
    // const favCards = await Card.findOne({favorited: true});
    const favCards = await Favorites.find();
    res.json(favCards);
    // res.send("working");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//POST request to add fav card
// router.post("/:id", async ({ params: { id } }, res) => {
//   try {
//     let fav = await Favorites.findOne({ cardID: id });
//     if (fav) {
//       await Card.findByIdAndUpdate(id, { favorited: false });
//       const favCard = await Favorites.findOneAndDelete({ cardID: id });
//       res.json(await Favorites.find());
//     } else {
//       await Card.findByIdAndUpdate(id, { favorited: true });
//       const newFav = new Favorites({
//         cardID: id,
//       });
//       await newFav.save();
//       res.json(await Favorites.find());
//     }
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server Error");
//   }
// });

router.post("/:name", async ({ params: { name } }, res) => {
  try {
    let card = await Card.findOne({name: name});
    let id = card.id;
    let fav = await Favorites.findOne({ cardID: id });
    if (fav) {
      await Card.findByIdAndUpdate(id, { favorited: false });
      const favCard = await Favorites.findOneAndDelete({ cardID: id });
      res.json(await Favorites.find());
    } else {
      await Card.findByIdAndUpdate(id, { favorited: true });
      const {name, content, logoURL,connected, favorited, type} = card;
      const newFav = new Favorites({
        cardID: id,
        name:name,
        content:content,
        logoURL: logoURL,
        connected: connected,
         favorited: true,
         type: type
      });
      
      await newFav.save();
      res.json(await Favorites.find());
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
