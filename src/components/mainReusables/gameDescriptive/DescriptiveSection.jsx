import DescriptiveTextRender from "./DescriptiveTextRender.jsx";
import Poe from '../../../assets/poeAtlas.jpg';
import City from '../../../assets/punkCity.jpg';


function DescriptiveSection() {

    const gameData = [
      {
        title: "Path of Exiles",
        gameDescription: "Path of Exile es un ARPG y MMO ambientado en un mundo de fantasía oscura. Lo desarrolla la compañía independiente neozelandesa Grinding Gear Games y se puede descargar y jugar gratis. El proyecto se mantiene económicamente gracias a micropagos éticos. El 23 de enero de 2013 se publicó una versión Beta abierta. En marzo de 2013 el juego había alcanzado los dos millones de suscriptores. El juego abandonó la fase Beta y se publicó finalmente tanto en Steam como en su propia web el 23 de octubre de 2013.",
        picture: <img src={Poe.src} alt="Path Of Exiles" className="main__descriptive-picture-image"/>,
        url: "https://www.pathofexile.com"
      },
      {
        title: "Testing no link game",
        gameDescription: "lorem for sure ipsum dolor sit consectecturcorrupti saepe ullam, atque provident animi aspcorrupti saepe ullam, atque provident animi aspcorrupti saepe ullam, atque provident animi asp lorem lorem for sure ipsum dolor sit consectecturcorrupti lorem for sure ipsum dolor sit consectecturcorrupti",
        picture: <img src={City.src} alt="Path Of Exiles" className="main__descriptive-picture-image"/>,
        url: ""
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
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default DescriptiveSection;





