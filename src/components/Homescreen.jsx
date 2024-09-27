function Homescreen({setplaygame})
{
    
    return <>
        <div className="container-fluid" id="hello">
            <div className="container">
            <div className="row" style={{'textAlign':'left'}}>
                <div className="col">
                    <h1 id="heading">DICE GAME</h1>
                </div>
                {/* <div className="col">
                    
                </div> */}
            </div>
            <br />
            <div className="row" style={{'textAlign':'left'}}>
                <div className="col">
            <button className="btn btn-success"  onClick={()=>{
                setplaygame("Playing");
            }}>Play Game</button>
            </div>
            </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    </>
}
export default Homescreen;