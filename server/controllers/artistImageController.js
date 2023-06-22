import ArtistImageCollection from "../models/artistImageModel.js";

export const uploadArtistImage = async (req, res) => {
  try {
    const { filename, data } = req.body;

    const newArtistImage = new ArtistImageCollection({
      filename,
      data,
      userId: req.user._id,
    });

    await newArtistImage.save();

    res
      .status(200)
      .json({ success: true, message: "Artist image uploaded successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
