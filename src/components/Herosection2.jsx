import React, { useEffect, useState } from 'react';
import Card from './Card';

function Herosection2() {
  const [cardData, setCardData] = useState([]);

  // Fetch data from the API (simulated data with updated images)
  useEffect(() => {
    const data = [
      {
        img: 'https://via.placeholder.com/400x400?text=Floods',
        title: 'Floods',
        desc: 'Learn how to stay safe before, during, and after a flood.',
        link: 'https://www.ready.gov/floods'
      },
      {
        img: 'https://via.placeholder.com/400x400?text=Hurricanes',
        title: 'Hurricanes',
        desc: 'Stay safe with this hurricane preparedness guide.',
        link: 'https://www.ready.gov/hurricanes'
      },
      {
        img: 'https://via.placeholder.com/400x400?text=Earthquakes',
        title: 'Earthquakes',
        desc: 'Prepare for and recover from an earthquake.',
        link: 'https://www.ready.gov/earthquakes'
      },
      {
        img: 'https://via.placeholder.com/400x400?text=Wildfires',
        title: 'Wildfires',
        desc: 'Know how to stay safe before, during, and after a wildfire.',
        link: 'https://www.ready.gov/wildfires'
      },
      {
        img: 'https://via.placeholder.com/400x400?text=Tornadoes',
        title: 'Tornadoes',
        desc: 'Learn how to prepare for tornadoes and stay safe.',
        link: 'https://www.ready.gov/tornadoes'
      },
      {
        img: 'https://via.placeholder.com/400x400?text=Winter+Storms',
        title: 'Winter Storms',
        desc: 'Tips to stay safe during winter storms and extreme cold.',
        link: 'https://www.ready.gov/winter-weather'
      },
      {
        img: 'https://via.placeholder.com/400x400?text=Pandemics',
        title: 'Pandemics',
        desc: 'Learn how to protect yourself and others during a pandemic.',
        link: 'https://www.ready.gov/pandemics'
      },
      {
        img: 'https://via.placeholder.com/400x400?text=Volcanoes',
        title: 'Volcanoes',
        desc: 'Understand how to prepare and react to a volcanic eruption.',
        link: 'https://www.ready.gov/volcanoes'
      },
      {
        img: 'https://via.placeholder.com/400x400?text=Extreme+Heat',
        title: 'Extreme Heat',
        desc: 'How to stay cool and safe during extreme heat events.',
        link: 'https://www.ready.gov/heat'
      },
      {
        img: 'https://via.placeholder.com/400x400?text=Home+Fires',
        title: 'Home Fires',
        desc: 'Safety tips to prevent and survive a home fire.',
        link: 'https://www.ready.gov/home-fires'
      },
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
