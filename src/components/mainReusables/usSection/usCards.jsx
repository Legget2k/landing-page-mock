import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function UsCards({ employees }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="us__cards">
      <Slider {...settings}>
        {employees.map((employee, index) => (
          <div key={index}>
            <div className="card">
              {employee.image ? (
                <div className="card__picture">
                  <div className='picture-container'>
                    <img src={employee.image.src} alt={employee.name}/>
                  </div>
                </div>
              ) : null}
              <div className="card__info">
                <h3>{employee.name}</h3>
                <p>{employee.description}</p>
                <h4>{employee.role}</h4>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default UsCards;