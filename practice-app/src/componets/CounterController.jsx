import {useState} from 'react';

function CounterController() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    return(
        <div className="container">
            <h2 className="header">Counter App</h2>
            <h3>{count}</h3>
            <div className="btns">
                <button onClick={() => 
                    {setCount(count-step);
                    }}>-</button>

                <button onClick={() => 
                    {setCount(count+step);
                    }}>+</button>
            </div>

            <div className="stepper">
                    <label>변화량</label>
                    <input type='number' 
                    value={step}
                    onChange={(e) => {
                        const nextStep = Number(e.target.value);
                        if(nextStep >= 1) {
                            setStep(nextStep);
                        }
                    }}/>
            </div>

        </div>
    )
}
export default CounterController;