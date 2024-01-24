import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Card />
      <div class="attribution fixed bottom-4 left-2/4 -translate-x-2/4 text-lightCyan tracking-wider">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Ziyadanbari</a>.
      </div>
    </div>
  );
};

export default App;
