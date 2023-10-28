import React from "react";
import { useState } from "react";
import memesData from "../memesData";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText:"",
    randomImage: "http://i.imgflip.com/1bij.jpg" ,
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);


  function getMemeImage() {
    const memesArray = memesData.data.memes 
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    })) 
  }
  return <main>
    <form className="form">
      
        <input type="text" className="form-inputs" placeholder="Top Text"/>
        <input type="text" className="form-inputs" placeholder="Bottom Text"/>
        <botton className="form-button" onClick={getMemeImage} >Get a new meme image 🖼</botton>
    </form>
    <img src={meme.randomImage}/>
  </main>;
}

export default Meme;
