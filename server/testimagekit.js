import ImageKit from "imagekit";
import dotenv from "dotenv";

dotenv.config();

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

imagekit.listFiles({ limit: 1 }, (err, res) => {
  if (err) console.log("❌ Error:", err.message);
  else console.log("✅ Connected:", res);
});

