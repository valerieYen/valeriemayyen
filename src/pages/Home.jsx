import { useState, useRef, useEffect } from 'react';
import Contacts from '../components/Contacts';
import '../stylesheets/Home.css';
import '../stylesheets/NewsBar.css'

const Home = () => {
  const [muted, setMuted] = useState(true);  // Start muted by default
  const [bubbleText, setBubbleText] = useState([]);
  const [talking, setTalking] = useState(false);
  const audioRef = useRef(null);
  const audioPath = new URL('../assets/news.mp3', import.meta.url).href;
  const textDelays = [0, 3, 2, 1.6, 1.5, 3.5, 1.6, 2.7, 2.2, 2.5];
  const textPairs = [
    {text: "THIS JUST IN!", classes: "HeadingSB typing1"},
    {text: "You are currently viewing", classes: "NormalSB typing2"},
    {text: "VALERIE YEN'S", classes: "HeadingSB typing3"},
    {text: "personal website!", classes: "NormalSB typing4"},
    {text: "You can find her resume, socials,", classes: "NormalSB typing5"},
    {text: "and contact below.", classes: "NormalSB typing6"},
    {text: "Turn the music on in the right", classes: "NormalSB typing7"},
    {text: "corner and the scroll at", classes: "NormalSB typing8"},
    {text: "the bottom is clickable!", classes: "NormalSB typing9"},
    {text: "More at 10pm. This is VMY news.", classes: "NormalSB typing10"}
  ];

  // audio
  useEffect(() => {
    if (audioRef.current) {
      if (muted) {
        audioRef.current.pause();
      } else {
        audioRef.current.volume = 0.025;
        audioRef.current.play().catch(error => {
          console.log("Audio play failed:", error);
        });
      }
    }
  }, [muted]);

  // text
  useEffect(() => {
    let currentIndex = 0;
    let timeoutId = null;

    const addNextText = () => {
      if (currentIndex < textPairs.length) {
        if (currentIndex) {
          setBubbleText(prev => [...prev, textPairs[currentIndex]]);
        } else {
          setTimeout(() => {
            setTalking(true);
            setBubbleText([textPairs[0]]);
          }, 1500);
        }
        
        if (currentIndex < textPairs.length - 1) {
          const nextDelay = textDelays[currentIndex + 1] * 1000;
          timeoutId = setTimeout(() => {
            currentIndex++;
            addNextText();
          }, nextDelay);
        }
      }
    };

    addNextText();
    setTimeout(() => {
      setTalking(false);
    }, 25000);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <div className="Home">
      <audio 
        ref={audioRef} loop autoPlay src={audioPath}
      />
      <div className="SpeechBubble">
        {
          bubbleText.map((elem) => (
            <p key={elem.text} className={elem.classes}>{elem.text}</p>
          ))
        }
      </div>
      <p className="IsMuted" title={muted ? "Muted" : "Unmuted"}onClick={() => setMuted(!muted)}>{muted ? '🔈' : '🔊'}</p>
      <img src="newsstationbg.png" className="HomeBG"/>
      <img 
        src={talking ? "talking.gif" : "blinking.gif"} 
        className="NewsCaster breathing"
      />
      <img src="papers.png" className="Papers stacking" />
      <img src="desk.png" className="Desk"/>
      <div className="HomeGrad">
        <Contacts />
        <p className="Disclaimer">@2025 Valerie Yen</p>
      </div>
    </div>
  );
};

export default Home;