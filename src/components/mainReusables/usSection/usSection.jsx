import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import UsCards from './UsCards';

function UsSection() {

  const employees = [
    {
      name: 'Nombre del Empleado 1',
      role: 'Puesto del Empleado 1',
      image: '',
    },
    {
      name: 'Nombre del Empleado 2',
      role: 'Puesto del Empleado 2',
      image: '',
    },

  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
  };

  return (
    <section className='main__us'>
      <h3>The team</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fugiat dolorum laboriosam molestiae explicabo maiores fuga officiis corporis, commodi a qui obcaecati cum, ad nobis placeat, et laudantium optio voluptatum?
      </p>
      <Slider {...settings}>
        {employees.map((employee, index) => (
          <UsCards key={index} {...employee} />
        ))}
      </Slider>
    </section>
  );
}

export default UsSection;