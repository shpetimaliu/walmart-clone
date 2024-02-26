import axios from "axios";
import cheerio from "cheerio";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const url =
      "https://www.walmart.com/ip/Billie-Eilish-Eilish-1-oz-EDP-Spray/1960046871?athbdg=L1102";
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const productName = $("h1.prod-ProductTitle").text().trim();
    const productPrice = $("span.price-characteristic").text().trim();
    const productDescription = $("div.about-desc").text().trim();
    const productImage = $("div.prod-hero-image-container img").attr("src");

    const productInfo = {
      name: productName,
      price: productPrice,
      description: productDescription,
      image: productImage,
    };

    res.status(200).json(productInfo);
  } catch (error) {
    console.error("Gabim gjatë shkrapimit:", error);
    res.status(500).json({ message: "Gabim gjatë shkrapimit" });
  }
};
