import {useState } from 'react';

function MouseTracker() {
    const [position, setPosition] = useState({x:0, y:0});

    return(
        <div className="container">
            <h2 className="header">Mouse Tracker</h2>
            <div className="trackerInfo">현재 위치 : 
                <br/>
                X : {position.x}, Y: {position.y}
            </div>
            <div className="trackerArea"
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const offsetX = e.clientX - rect.left;
                const offsetY = e.clientY - rect.top;

                setPosition({
                    x: offsetX,
                    y: offsetY,
                });
            }}>마우스 트래킹 하는 공간
            <div className='trackerBall'
            style={{top: position.y, left: position.x}}/>
            </div>
        </div>
    )
}
export default MouseTracker;
