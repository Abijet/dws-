import React, { useEffect, useState } from "react";

const Bubblegame = () => {
  const [num, setNum] = useState(Math.floor(Math.random() * 10));
  const [cuddle, setCuddle] = useState([]);
  const [score, setScore] = useState(0);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [count, setCount] = useState(5)


  useEffect(() => {
    const generateBubbles = () => {
      const newCuddle = [];
      for (let i = 1; i < 97; i++) {
        const random = Math.floor(Math.random() * 10);
        newCuddle.push(
          <div
            className="bubble-button"
            key={i}
            onClick={() => {
              if (random === num) {
                setCuddle((prevCuddle) =>
                  prevCuddle.map((value,i) => (
                    <div className="bubble-button" key={i}>
                      <div>{Math.floor(Math.random() * 10)}</div>
                    </div>
                  ))
                );
                setNum(Math.floor(Math.random() * 10));
                setScore((prevScore) => prevScore + 1);
              }
            }}
          >
            <div>{random}</div>
          </div>
        );
      }
      setCuddle(newCuddle);
    };

    generateBubbles();
  }, [num, score]);

  useEffect(() => {
    if (score >= 2) {
      setShow(true);
    }
  }, [score]);

 useEffect(() => {
    const interval = setInterval(() => {
      if (count <= 0) {
        clearInterval(interval);
       setShow2(true)
      } else if(score >= 4 && count <= 0){
        setShow(true)

      }
      else {
        setCount(count- 1); // Use functional form of setState
      }
    }, 1000)
    // console.log('useeffect')
  
    return () => {
      clearInterval(interval)
      // console.log('cleanup function')
    }
  }, [count])
  
  
  
  return (
    <div>
      
      <div className="first-input">
        {show?null: <div className="num-class">Hit: <span>{num}</span></div>}
      
      <div className="score-class">score: <span>{score}</span></div>
      <div className="score-class">Timer: {count}</div>

      {/* <div> {count}</div> */}
      </div>
      {/* {show2?<div className="win-class">You lose</div>:null} */}
      {show2 ? <div className="win-class">You lose</div> : null}

      {show?<div className="win-class">You Win</div>:<div className="random-btn">{cuddle}</div>}
      
    </div>
  );
};

export default Bubblegame;
