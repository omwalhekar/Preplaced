require('dotenv').config();
const express = require("express");
const router = express.Router();

const Card = require("../../models/Card");

//GET REQUEST SAMPLE
router.get('/', async (req,res)=>{
    try{
        
        const cards = await Card.find();
        if(!cards){
            return res
          .status(404)
          .json({ errors: [{ msg: 'No Cards Found!' }] });
        }
        res.json(cards);
    }catch(err){
        console.error(err.message);
      res.status(500).send('Server Error');
    }
})


//POST request to add card
router.post('/',async(req,res)=>{
    try{
        const {logoURL, name, content, favorited, connected, type} = req.body;
        let name1 = await Card.findOne({name});
        if(name1){
            return res
          .status(400)
          .json({ errors: [{ msg: 'Card already exists' }] });
        } 
        const newCard = new Card({
            logoURL: logoURL,
            name: name,
            content: content,
            favorited: favorited,
            connected: connected,
            type: type

        });

        const card = await newCard.save();

        res.json(card);
    }catch(err){
        console.error(err.message);
      res.status(500).send('Server Error');
    }
});

module.exports = router ;