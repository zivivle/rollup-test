"use client";

import styles from "./page.module.css";
import { Button } from "zivivle-rollup";

export default function Home() {
  return (
    <div className={styles.page}>
      <h2>rollup test!</h2>
      <Button
        label="rollup component!!!"
        onClick={() => {}}
        type="button"
        className=""
      />
    </div>
  );
}
