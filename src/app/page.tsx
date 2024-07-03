"use client";
import { useState } from "react";
import { Hit } from "./dataType";
import { testData } from "./testData";
import styles from "./page.module.css";

export default function Home() {
  const [searchResult, setSearchResult] = useState<Hit[]>(testData);
  return (
    <>
      <p>{testData[0].name}</p>
      <div>{testData[0].price}円</div>
    </>
  );
}
