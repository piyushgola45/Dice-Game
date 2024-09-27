function Showrules({setrules})
{
    return <>
        <div className="container">


            <div className="row">
                <h4>
                STEP 1 :- Select the number first .<br /><br />
                STEP 2 :- Scroll the dice .<br /><br />
                STEP 3 :- If the number selected and the number on the dice are same then the selected number will be added to your score otherwise score will be less by 2.
                </h4>
            </div>
            <br /><br />

            <center>
            <button className="btn btn-warning" onClick={()=>{
                setrules("notshow");
            }}>BACK TO GAME</button>

            </center>
        </div>
    </>
}
export default Showrules;