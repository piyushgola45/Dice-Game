import { useState } from "react";

function RandomNumber()
{
    const [randomInt,setRandomInt] = useState();
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1) + min);
          }
          setRandomInt(getRandomInt(1, 6));
    return <>
        <h1>{randomInt}</h1>
    </>
}
export default RandomNumber;