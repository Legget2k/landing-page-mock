import React, { useState, useEffect } from 'react';
import DescriptiveTextRender from "./DescriptiveTextRender.jsx";
import Poe from '../../../assets/poeAtlas.jpg';
import City from '../../../assets/punkCity.jpg';

function DescriptiveSection() {
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    const newGameData = [
      {
        title: "Path of Exiles",
        gameDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vero minus nesciunt corrupti saepe ullam, atque provident animi asperiores magni quae fugiat incidunt corporis numquam repudiandae voluptatibus magnam? Sed, velit?",
        picture: <img src={Poe.src} alt="Path Of Exiles" />,
        url: "https://www.pathofexile.com"
      },
      {
        title: "Testing no link game",
        gameDescription: "lorem for sure ipsum dolor sit consectecturcorrupti saepe ullam, atque provident animi aspcorrupti saepe ullam, atque provident animi aspcorrupti saepe ullam, atque provident animi asp",
        picture: <img src={City.src} alt="Path Of Exiles" />,
        url: ""
      }
    ];

    setGameData(newGameData);
  }, []);

  return (
    <>
      <section className='main__descriptive'>
        {gameData.map((obj, index) => (
          <div key={index} className="main__descriptive-entry">

            <DescriptiveTextRender data={obj} index={index}/>
            
            <div className="main__descriptive-picture">
              {obj.picture}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default DescriptiveSection;





