"use client";
import './globals.css'

import { useState, MouseEvent } from "react";

export default function Home() {
  const [isPushed, setIsPushed] = useState<boolean>(false);

  const colorChange = (e: MouseEvent<HTMLButtonElement>): void => {
    setIsPushed(prevState => !prevState);
  };

  return (
    <main>
      <h1 className={isPushed ? "red" : "blue"} onClick={colorChange}>
        Hello World
      </h1>
    </main>
  );
}

