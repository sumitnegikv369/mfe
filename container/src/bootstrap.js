import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const containers = document.getElementById("root");
const root = createRoot(containers);
root.render(<App/>);
