import React from "react";
import memesData from "../memesData.js";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    url: "https://i.imgflip.com/1g8my4.jpg",
  });

  function handleChange(event) {
    const { name, value, type } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function getMemeImage() {
    const memeArray = memesData.data.memes;
    const randomNum = Math.floor(Math.random() * memeArray.length);
    console.log(randomNum);
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        url: memeArray[randomNum].url,
      };
    });
  }

  return (
    <div className="meme">
      <div className="container">
        <div className="textbox-container">
          <input
            type="text"
            placeholder="Top Text"
            onChange={handleChange}
            name="topText"
            value={meme.topText}
            className="textbox"
          />
          <input
            type="text"
            placeholder="Bottom Text"
            onChange={handleChange}
            name="bottomText"
            value={meme.bottomText}
            className="textbox"
          />
        </div>
        <button className="form-button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
        <div className="meme-image-container">
          <p className="meme-text top-text">{meme.topText}</p>
          <p className="meme-text bottom-text">{meme.bottomText}</p>
          <img src={meme.url} className="meme-image" />
        </div>
      </div>
    </div>
  );
}
