import { render as RenderApp } from "preact";
import "preact/debug";
// UI
import { App } from "./app";
import "./Assets/CSS/Index.css";

// [https://revealjs.com/]

RenderApp(<App />, document.getElementById("reveal")!);
