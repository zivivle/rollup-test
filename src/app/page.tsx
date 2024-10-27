"use client";

import { Button } from "zivivle-rollup";

export default function Home() {
  return (
    <div>
      <h2>rollup test!</h2>
      <Button variant="solid" type="secondary" onClick={() => alert("Hello")}>
        클릭!!!
      </Button>
    </div>
  );
}
