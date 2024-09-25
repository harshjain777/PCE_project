import React, { useEffect, useState } from 'react';
import Card from './Card';
import flood from '../assets/flood.jpg'
import earthquake from '../assets/earthquake.jpg'
import hurricane from '../assets/hurricane.jpg'
import wildfire from '../assets/wildfire.jpg'
import volcano from '../assets/volcano.jpg'
import tornado from '../assets/tornado.jpg'
import pandamic from '../assets/pandemic.jpg'

function Herosection2() {
  const [cardData, setCardData] = useState([]);

  // Fetch data from the API (simulated data with updated images)
  useEffect(() => {
    const data = [
      {
        img: flood,
        title: 'Floods',
        desc: 'Learn how to stay safe before, during, and after a flood.',
        link: 'https://www.ready.gov/floods'
      },
      {
        img: hurricane,
        title: 'Hurricanes',
        desc: 'Stay safe with this hurricane preparedness guide.',
        link: 'https://www.ready.gov/hurricanes'
      },
      {
        img: earthquake,
        title: 'Earthquakes',
        desc: 'Prepare for and recover from an earthquake.',
        link: 'https://www.ready.gov/earthquakes'
      },
      {
        img: wildfire,
        title: 'Wildfires',
        desc: 'Know how to stay safe before, during, and after a wildfire.',
        link: 'https://www.ready.gov/wildfires'
      },
      {
        img: tornado,
        title: 'Tornadoes',
        desc: 'Learn how to prepare for tornadoes and stay safe.',
        link: 'https://www.ready.gov/tornadoes'
      },
      {
        img: pandamic,
        title: 'Pandemics',
        desc: 'Learn how to protect yourself and others during a pandemic.',
        link: 'https://www.ready.gov/pandemics'
      },
      {
        img: volcano,
        title: 'volcano',
        desc: 'Understand how to prepare and react to a volcanic eruption.',
        link: 'https://www.ready.gov/volcanoes'
      }
    ];

    setCardData(data);
  }, []);

  return (
    <div className="py-10 grid md:grid-cols-2 grid-cols-1 px-4 sm:px-8 md:px-16 lg:px-24 gap-4">
      {cardData.map((data, i) => (
        <Card key={i} img={data.img} title={data.title} desc={data.desc} link={data.link} />
      ))}
    </div>
  );
}

export default Herosection2;
