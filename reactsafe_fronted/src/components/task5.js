import React from "react";
import './stylesheet/task5.css'

const Task5 = () => {
    return (
        <div className="body">


            <div class="contain">
                <h1 className="he">Obstacle Test</h1>

                <div class="instructions">

                    <ul>
                        <li className="instruct">Instructions :</li>
                        <li>Click the "start" button to play the game.</li>
                        <li>Use the left and right arrow keys to switch lanes.</li>
                        <li>Watch for oncoming cars in your lane and quickly switch to an adjacent lane to avoid collisions.</li>
                        <li>There are three rounds to the test, each with a higher degree of difficulty.</li>
                        <li>Earn points for each car passed without any collisions.</li>
                        <li>Pay attention to the distance and speed of approaching cars to anticipate lane changes."Have Fun and Drive Safely".</li>


                    </ul>
                </div>
                <div class="button-container">
                    <a href="http://127.0.0.1:5504/Obstacle%20Test/index.html"><button class="next-button">Play</button>
                    </a>
                </div>
            </div>
        </div>
    )
}





export default Task5;