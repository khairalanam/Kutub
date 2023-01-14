import React, { useEffect } from "react";
import lottie from "lottie-web";

import bookLover from "../../public/98849-book-lover.json";

const GifAnimation = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#book-lover"),
      animationData: bookLover,
      renderer: "svg",
      loop: true,
      autoplay: true,
    });
  }, []);
  return (
    <div className="gif-holder">
      <div id="book-lover" />
    </div>
  );
};

export default GifAnimation;
