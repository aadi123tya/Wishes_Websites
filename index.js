import React from "react";
import  ReactDOM  from "react-dom";
import "./index.css";
import date from 'date-and-time';

const box={

    border:"2px solid black ",
    width:"70%",
marginLeft:"16%",
    height:"15rem",
    position:"absolute",
    top:"30%",
    fontSize:"5rem",
    display:"flex",
    flexShrink:"0",
    flexWrap:"wrap",
    backgroundColor:"pink",
    borderRadius:"10rem",
    justifyContent:"center",
    textAlign:"center",
   



}

const first={
width:"auto",
    height:"auto",
    // marginLeft:"30rem",
    backgroundColor:"pink",
    color:"red",
    borderRadius:"10rem",
    // flexShrink:"1",
    marginTop:"5rem",
    
   




}
const second={
width:"auto",

    height:"auto",
    backgroundColor:"pink",
    color:"green",
    // flexShrink:"1",
    borderRadius:"10rem",
    marginLeft:"1rem",
    marginTop:"5rem",
   









}


const now = new Date();
const hrs = date.format(now, 'H');
// const meri = date.format(now,"A")
if(hrs>1 && hrs<=11 )
{
    ReactDOM.render(<React.Fragment>

        <div style={box}>
        <div style={first}>Hello Sir ,</div>
        <div style={second}>Good Morning </div>
    
        </div>
    </React.Fragment>
    
        ,document.getElementById("root")
    )

}
 else if(hrs>11 && hrs<=19 )
{
    ReactDOM.render(<React.Fragment>

        <div style={box}>
        <div style={first}>Hello Sir ,</div>
        <div style={second}>Good Afternoon</div>
    
        </div>
    </React.Fragment>
    
        ,document.getElementById("root")
    )
}
else if(hrs>20 && hrs<=24 )
{

    ReactDOM.render(<React.Fragment>

        <div style={box}>
        <div style={first}>Hello Sir ,</div>
        <div style={second}>Good Night</div>
    
        </div>
    </React.Fragment>
    
        ,document.getElementById("root")
    )

}


