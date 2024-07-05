"use client";
import { useState } from "react";
import { Hit } from "./dataType";
import { testData } from "./testData";
import styles from "./page.module.css";

export default function Home() {
  const [searchResult, setSearchResult] = useState<Hit[]>(testData);
  return (
    <>
      {searchResult.map((item: Hit) => (
        <div key={item.index}>
          <p>{item.name}</p>
          <div>{item.price}円</div>
          <img src={item.image.medium} />
          <img src={item.image.small} />
        </div>
      ))}
    </>
  );
}
