import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AnimeContext from "./Context/AnimeContext";
import HeroContext from "./Context/HeroContext";

createRoot(document.getElementById("root")).render(
  <AnimeContext>
    <HeroContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HeroContext>
  </AnimeContext>
);
