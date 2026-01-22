import {useState, useRef, useEffect} from 'react';

const InitialTime = 0;

function Timer() {
    const [time, setTime] = useState(InitialTime);
    const intervalId = useRef();
    const [stop, setStop] = useState(false);

    useEffect(() => {
        if(time === 0){
            clearInterval(intervalId.current);
        }
    }, [time]);

    useEffect(() => {
        if(time === 0){
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setTime(InitialTime);
            setStop(false);
        }
    }, [time]);

    return(
        <div className="container">
            <h2 className="header">Timer</h2>
            <div className="timer">
                <h3>{time}</h3>
                <div className="timerset">
                    <button onClick={() => {
                    if(time > 0) 
                        {setTime(time - 1);}
                    }}>-</button>

                    <button onClick={() => {
                        setTime(time + 1);
                    }}>+</button>
                </div>
            </div>
            <div className="timerBtns">
                {stop ?  
                (<button style={{backgroundColor:"coral"}}
                onClick={() => {
                    clearInterval(intervalId.current);
                    setStop(false);
                }}
                >Stop</button>) :
                (<button style={{backgroundColor:"lightgreen"}}
                    onClick={() => {
                        intervalId.current = setInterval(() => {
                            setTime((prevTime) => prevTime - 1);
                        }, 1000);
                        setStop(true);
                    }}>Start</button>)
                }
            </div>
        </div>
    )
}
export default Timer;