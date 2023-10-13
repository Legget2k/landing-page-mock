import DescriptiveTextRender from "./DescriptiveTextRender.jsx";
import Poe from '../../../assets/poeAtlas.jpg';
import City from '../../../assets/punkCity.jpg';


function DescriptiveSection() {

    const gameData = [
      {
        title: "Path of Exiles",
        gameDescription: "Path of Exile takes place in a dark fantasy world, where the government of the island nation of Oriath exiles people to the continent of Wraeclast, a ruined continent home to many ancient gods. Taking control of an exile, players can choose to play as one of seven character classes – Marauder, Duelist, Ranger, Shadow, Witch, Templar, and Scion. Players are then tasked with fighting their way back to Oriath, defeating ancient gods and great evils during their journey.",
        picture: <img src={Poe.src} alt="Path Of Exiles" className="main__descriptive-picture-image"/>,
        url: "https://www.pathofexile.com",
        tags: "arpg, dungeons, levels, terror"
      },
      {
        title: "Testing no link game",
        gameDescription: "lorem for sure ipsum dolor sit consectecturcorrupti saepe ullam, atque provident animi aspcorrupti saepe ullam, atque provident animi aspcorrupti saepe ullam, atque provident animi asp lorem lorem for sure ipsum dolor sit consectecturcorrupti lorem for sure ipsum dolor sit consectecturcorrupti aspcorrupti saepe ullam, atque provident animi aspcorrupti saepe ullam, atque provident animi asp lorem lorem for sure ipsum dolor sit consectecturcorrupti lorem for sure ipsum dolor sit consectecturcorrupti",
        picture: <img src={City.src} alt="Path Of Exiles" className="main__descriptive-picture-image"/>,
        url: "",
        tags: "action, survival, adventurer, sandbox"
      },
      
    ];

  return (
    <>
      <section className='main__descriptive'>
        {gameData.map((obj, index) => (
          <div key={index} className="main__descriptive-entry">

            <DescriptiveTextRender data={obj}/>
            
            <div className="main__descriptive-picture">
              {obj.picture}
              <div className="main__descriptive-picture--overlay">
                <h3>Tagged as</h3>
                <span>{obj.tags}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default DescriptiveSection;





