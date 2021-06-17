const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the Image model to whatever makes sense in this case
const ImageSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  tags: [
    {
      type: String,
      default: "other",
    },
  ],

  url: String,
  description: { type: String, default: "There is no description." },
});

const Image = model("Image", ImageSchema);

module.exports = Image;
