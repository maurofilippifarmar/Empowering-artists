import express from "express";
import { uploadArtistImage } from "../controllers/artistImageController";

const router = express.Router();

router.post("/upload", uploadArtistImage);

export default router;
