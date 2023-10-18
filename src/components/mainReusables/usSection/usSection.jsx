import React from 'react';
import UsCards from './UsCards';
import PortraitExample from '../../../assets/examplePortrait.jpg';


function UsSection() {
  const employees = [
    {
      name: 'Enyert Viñas',
      role: 'tech founder',
      image: PortraitExample,
      description: 'With many years of experience and a keen appreciation for the world of development, I aim to make this company a cornerstone of the gaming industry while also creating opportunities for emerging developers.'
    },
    {
      name: 'Luis Herrera',
      role: 'development intern',
      image: PortraitExample,
      description: "Since I was young, I've lived in front of a computer, passionate about the world of computer science, both hardware and software, with a strong desire to learn more and enhance my development skills"
    },
  ];

  return (
    <section id='about' className='main__us'>
      <div className='us__text'>
        <h2>The team</h2>
        <p>
          We are a growing team in the process of forming a company dedicated to game development. Our initial goals involve offering a range of creative ideas and mechanics meticulously crafted in the game engine known as GODOT, with various broad and small-scale projects on the design board to deliver enjoyable and imaginative gameplay experiences. Our intention is to provide entertainment that encompasses all the elements of a great game, including music, storytelling, dynamic mechanics, and illustrated graphics to ensure it's engaging.
        </p>
      </div>
      <UsCards employees={employees} />
    </section>
  );
}

export default UsSection;