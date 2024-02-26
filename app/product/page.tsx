"use client";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [productInfo, setProductInfo] = useState<any>(null);

  const scrapeProduct = async () => {
    try {
      const url =
        "https://www.walmart.com/ip/Billie-Eilish-Eilish-1-oz-EDP-Spray/1960046871?athbdg=L1102";
      const response = await axios.get(
        "/api/scrape?url=" + encodeURIComponent(url)
      );
      setProductInfo(response.data);
    } catch (error) {
      console.error("Gabim gjatë marrjes së të dhënave:", error);
    }
  };

  return (
    <div>
      <button onClick={scrapeProduct}>Skrapo produktin</button>
      {productInfo && (
        <div>
          <h2>{productInfo.name}</h2>
          <p>{productInfo.price}</p>
          <p>{productInfo.description}</p>
          <img src={productInfo.image} alt={productInfo.name} />
        </div>
      )}
    </div>
  );
}
