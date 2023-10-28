import React from "react";
import { useState } from "react";
import memesData from "../memesData";

function Meme() {
  const [memeImage, setMemeImage] = useState("");


  function getMemeImage() {
    const memesArray = memesData.data.memes 
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setMemeImage(memesArray[randomNumber].url)
  }
  return <main>
    <form className="form">
      
        <input type="text" className="form-inputs" placeholder="Top Text"/>
        <input type="text" className="form-inputs" placeholder="Bottom Text"/>
        <botton className="form-button" onClick={getMemeImage} >Get a new meme image 🖼</botton>
    </form>
    <img src={memeImage}/>
  </main>;
}

export default Meme;
