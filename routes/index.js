const router = require("express").Router();
const authRoutes = require("./auth");
const User = require("../models/User.model");
const upload = require("../middleware/cloudinary");
const Image = require("../models/Image.model");
const isLoggedIn = require("../middleware/isLoggedIn");
const mongoose = require("mongoose");
const { findByIdAndUpdate } = require("../models/Image.model");

router.post(
  "/uploadPicture",
  isLoggedIn,
  upload.single("profilePic"),
  (req, res) => {
    const imageUrl = req.file.path;
    const id = req.user._id;
    //console.log("REQUEST BODY", req.body);
    Image.create({
      userId: id,
      url: imageUrl,
      tag: req.body.tag,
      description: req.body.description,
    })
      .then((picture) => {
        console.log("newly created picture: ", picture);
        res.json({ picture });
      })
      .catch((err) => {
        console.log(err);
      });
  }
);

//TODO
// get all images from a specific user!

/* router.get(
  "/uploadPicture",
  isLoggedIn,
  upload.single("profilePic"),
  (req, res) => {
    const imageUrl = req.file.path;
    const id = req.user._id;
    console.log();
    Image.create({
      userId: id,
      url: imageUrl,
    })
      .then((picture) => {
        console.log("newly created picture: ", picture);
        res.json({ picture });
      })
      .catch((err) => {
        console.log(err);
      });
  }
); */

router.get("/profile/:id", isLoggedIn, (req, res, next) => {
  let userId = req.user._id;
  console.log("USER ID: ", userId);

  req.user._id;
  console.log("esetse");
  Image.find({ userId: userId })
    .then((response) => {
      //console.log(response);
      //const data = response.filter((image) => image.userId == userId);
      /*const data = response.map((image) => {
        console.log(image.userId);
        console.log(image.userId === userId);
      });*/
      res.json({ response });
    })
    .catch((e) => console.log(e));

  //res.sendStatus(200);
});

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/auth", authRoutes);

module.exports = router;
