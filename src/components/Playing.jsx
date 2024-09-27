import { useState } from "react";
import Layout from "./Layout";
import Showrules from "./Showrules";
function Playing({setplaygame})
{
    const [selected__number,setnumber] = useState();
    const [randomInt,setrandomint] = useState();
    const [score,setscore] = useState(0);
    const [rules,setrules] = useState("notshow");
    const [score_string,set_score_string] = useState("");
    /*const arr_of_images = [{
        url:"https://img.freepik.com/premium-photo/dice-number-one-black-gaming-icon-silhouette-lucky-roll-chance-gamble-gaming-art_695763-2493.jpg"
    },
    {
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MDfjdhK3J6v2FBEuPKf3kOXizmuncAY4zw&s"

    },
    {
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxv5qbU-b0FMKjXvaCuovjBY6bVjgAFUR9_Q&s"

    },
    {
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPLlTV9srK9cZ1yy6NF3M5D8EJqGV_QmIURw&s"

    },
    {
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_d7uISwpKZAop6sHw_0KeJV7ZPBlFvWTbdw&s"
    },
    {
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdP37a1uSnUTspJ3ZA4_VddJFOxAeKJUugzQ&s"
    }
]*/ 
    // const [exit_game,set_exit_game] = useState("YES");
    const selectednumber=(item)=>{
        setnumber(item);
    }

    const select_random=()=>{
        // generating a random number
        const a = Math.floor(Math.random() * (6 - 1)) + 1;
        console.log(a);
        setrandomint(a);
    }
    var p;
    var h;
    if(randomInt && selected__number)
    {
        if(randomInt===selected__number){
            console.log("same");
            p = score+selected__number;
            h="same";
            // prompt(`Score is added by ${selected__number}`); 
            // setscore(p);
        }
        else
        {
            console.log("different");
            p = score - 2;
            h="different";
            // set_score_string("different");
            // prompt("Score is deleted by 2")
            // setscore(p);
        }
        setTimeout(()=>{
            setnumber();
            setrandomint();
            setscore(p);
            set_score_string(h);
        },1000);
        setTimeout(()=>{
            set_score_string("");
        },3500);
        // setTimeout(()=>{
        // },2000);
    }
    const numbers=[1,2,3,4,5,6]
    return <>
    
        <div className="container">
            <div className="row">
                
                    <center><u><marquee><h1 style={{'color':'green'}}>Total Score Is {score} </h1></marquee></u><br />
                        <button className="btn btn-warning" onClick={()=>{
                            setrules("show");
                        }}>Show Rules For Playing The Game</button>
                    </center>
            </div>

                <br /><br /><br />
                { rules==="notshow" &&
                    <div className="container">
            <div className="row">
                    <div className="container">
                        <div className="row">
                            {numbers.map((item)=>(
                                <Layout item={item} selectednumber={selectednumber}/>
                            ))}
                            <br /> <br /><br /><br /><br /> 
                            {!selected__number && !score_string &&<h4 style={{'textAlign':'center'}}>SELECT THE NUMBER</h4>}

                            {/* <br /><br /><br /> */}
                            {!selected__number && !randomInt  && !score_string && <h4 style={{'textAlign':'center'}}><button className="btn btn-warning" onClick={()=>{
                                setplaygame("Homescreen");
                            }}>Exit Game</button></h4>
                             }
                            
                        </div>
                    </div>
            </div>
            <br /><br /><br />
            <center><div className="container">
                {selected__number && <button className="btn btn-secondary"><img src="https://t4.ftcdn.net/jpg/03/35/18/03/360_F_335180308_cmPdOAErZAQx8I9iCX9lb0XoSsBEe4Y7.jpg" height={100}onClick={()=>{
                        select_random();
                }}></img></button>}

            </div></center>

            <br /><br />
            <div className="row" style={{'textAlign':'center'}}>
                {selected__number && (!randomInt) && <h4>CLICK ON THE DICE TO SCROLL</h4>}
                {randomInt && <h4> The number on dice is {randomInt}</h4>}
                {score_string=="same" && <h4>Score is added by selected number</h4>}
                {score_string=="different" && <h4>Score is deleted by 2</h4>}
            </div>
            </div>
}


        {rules==="show" && <Showrules setrules={setrules}/>}
        </div>
    </>
}
export default Playing;