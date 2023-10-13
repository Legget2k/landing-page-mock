import React from 'react';
import UsCards from './UsCards';
import PortraitExample from '../../../assets/examplePortrait.jpg';


function UsSection() {
  const employees = [
    {
      name: 'Rose Amalia',
      role: 'Devop Senior',
      image: PortraitExample,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ullam doloribus, porro quasi repudiandae debitis et quos atque eligendi obcaecati quaerat maxime. At, illo voluptate odio sint amet doloribus iure.'
    },
    {
      name: 'Rose Amalia',
      role: 'Devop Senior',
      image: PortraitExample,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ullam doloribus, porro quasi repudiandae debitis et quos atque eligendi obcaecati quaerat maxime. At, illo voluptate odio sint amet doloribus iure.'
    },
  ];

  return (
    <section id='about' className='main__us'>
      <div className='us__text'>
        <h2>The team</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fugiat dolorum laboriosam molestiae explicabo maiores fuga officiis corporis, commodi a qui obcaecati cum, ad nobis placeat, et laudantium optio voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eaque quidem ipsa natus incidunt nesciunt, animi magnam cumque rerum fugiat distinctio sint quibusdam similique molestias perferendis necessitatibus? Minus, aspernatur voluptatibus.
          Ipsum aliquam, dolores rem ex quisquam nam? Non, nulla deserunt accusantium fugit officia incidunt dolorem? Eligendi alias repudiandae, libero temporibus voluptatum neque est distinctio quis laudantium obcaecati, laboriosam et necessitatibus?
        </p>
      </div>
      <UsCards employees={employees} />
    </section>
  );
}

export default UsSection;