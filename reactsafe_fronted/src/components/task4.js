import React from "react";
import './stylesheet/task4.css'

const Task4 = () => {
    return (
        <div className="body">


            <div class="contain">
                <h1 className="he">Traffic light Simulation</h1>

                <div class="instructions">

                    <ul>
                        <li className="instruct">Instructions :</li>
                        <li>When you open the game, you'll see a button labeled "Start."
                            Click the "Start" button to begin the game.</li>
                        <li>The traffic lights will cycle randomly: red, yellow, green. Wait for the green light.</li>
                        <li>Press the spacebar quickly when you see the green light.</li>
                        <li>Each time you correctly press the spacebar while the green light is displayed, you earn one point.</li>
                        <li> After 30 seconds, the game ends automatically.
                            Your final score, indicating the number of correct responses will be visible to you on the screen.</li>


                    </ul>
                </div>
                <div class="button-container">
                    <a href="http://127.0.0.1:5501/index.html"><button class="next-button">Play</button>
                    </a>
                </div>
            </div>
        </div>
    )
}





export default Task4;