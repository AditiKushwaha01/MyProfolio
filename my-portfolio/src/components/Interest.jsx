import React from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

// Import your local images
import travelImg from '../assets/images/i1.jpg';
import sportsImg from '../assets/images/i2.jpg';
import spiritualImg from '../assets/images/i3.jpg';
import writingImg from '../assets/images/i4.jpg';
import danceImg from '../assets/images/i5.jpg';

const interests = [
  { label: 'Traveling', image: travelImg },
  { label: 'Sports', image: sportsImg },
  { label: 'Spirituality', image: spiritualImg },
  { label: 'Writing', image: writingImg },
  { label: 'Dance', image: danceImg },
];

const Interest = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: 'performance',
    drag: false,
    slides: { perView: 1 },
    created(slider) {
      setInterval(() => {
        slider.next();
      }, 3000); // 3 seconds per slide
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider w-full max-w-xl mx-auto rounded-lg overflow-hidden mt-10">
      {interests.map((item, index) => (
        <div
          key={index}
          className="keen-slider__slide relative w-full h-64 bg-gray-200 flex items-center justify-center"
        >
          <img src={item.image} alt={item.label} className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white text-lg px-4 py-1 rounded-full shadow-md">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Interest;
