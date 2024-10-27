"use client";

import { Button } from "zivivle-rollup";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h2>rollup test!</h2>
      <Button variant="solid" type="primary" onClick={() => alert("Hello")}>
        클릭!!!
      </Button>
    </div>
  );
}
