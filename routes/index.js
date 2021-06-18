const router = require("express").Router();
const authRoutes = require("./auth");
const User = require("../models/User.model");
const upload = require("../middleware/cloudinary");
const Image = require("../models/Image.model");
const isLoggedIn = require("../middleware/isLoggedIn");

router.post(
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
);

//TODO
// get all images from a specific user!

router.get(
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
);

/* router.get("....", (req, res) => {

  
})
*/

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/auth", authRoutes);

module.exports = router;
