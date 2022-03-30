import { render as RenderApp } from "preact";
import "preact/debug";
// UI
import App from "./app";
import Error from "./Error";
import "./CSS/Index.css";

/* ERROR DETECTION */
let Errored = false;
window.onerror = async () => {
  if (import.meta.env.DEV) return;
  Errored || RenderApp(<Error />, document.getElementById("reveal")!);
  Errored = true;
};

/* APP */
// [https://revealjs.com/]
RenderApp(<App />, document.getElementById("reveal")!);
