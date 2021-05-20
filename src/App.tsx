import "./styles.postcss";
import { UsePanExample } from "./examples";
import React from "react";

export default function App() {
  switch (window.location.hash) {
    case "#use-pan":
      return <UsePanExample />;
    default:
      return <h1>usePan</h1>;
  }
}
