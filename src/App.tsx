import './App.scss';

import robinImg from './assets/robin.jpeg';
import robinEmo from './assets/robin_emo.jpg';
import magdalenaImg from './assets/magdalena.jpeg';
import magdalenaEmo from './assets/magda_emo.jpg';
import jonathanImg from './assets/jonathan.jpeg';
import jonathanEmo from './assets/jonathan_emo.jpg';
import kennyImg from './assets/kenny.jpeg';
import kennyEmo from './assets/kenny_emo.jpg';

import { useState } from 'react';

interface IRookies {
  name: string;
  img: string;
  emo: string;
}

function App() {
  const [emojiStatus, setEmojiStatus] = useState<{ [key: string]: boolean }>(
    {}
  );

  const rookies: IRookies[] = [
    {
      name: 'Robin',
      img: robinImg,
      emo: robinEmo,
    },
    {
      name: 'Magdalena',
      img: magdalenaImg,
      emo: magdalenaEmo,
    },

    {
      name: 'Jonathan',
      img: jonathanImg,
      emo: jonathanEmo,
    },
    {
      name: 'Kenny',
      img: kennyImg,
      emo: kennyEmo,
    },
  ];
  const toggleEmoji = (name: string) => {
    setEmojiStatus((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  return (
    <>
      <h1>Rookies</h1>
      <h3>The Code Warriors of Salt</h3>
      <div className='rookies'>
        {rookies.map((rookie, index) => (
          <div className='rookie' key={index}>
            <div onClick={() => toggleEmoji(rookie.name)}>
              <img
                src={emojiStatus[rookie.name] ? rookie.img : rookie.emo}
                alt={rookie.name}
              />
              <h3>{rookie.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
