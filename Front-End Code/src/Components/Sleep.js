import React from "react";
import Donut from "./Donut";


function Sleep() {
    return ( 
       <div className="c-sleep">
         <div className="card-s">
           <img src = "/sleep.jpg" height={ 500 } />
         </div>
         <div className=" card-s sleep">
          <Donut/>
         </div>
       </div>
     );
}

export default Sleep;