import React from "react";
import "./SeasonDisplay.css";


// second method from object config

const SeasonConfig = {
    summer :{
        text:"Let's hit the beach",
        iconName:'sun'
    },
    winter :{
        text:"Burr, It is chill",
        iconName:'snowflake'
    }
}


const getSeasonDisplay = (lat,month) => {
    if(month > 2 && month < 9){
        // Nothern Hemispere
    return lat > 0 ? 'summer' : 'winter';
    }else{
          // Southern Hemispere
     return   lat > 0 ? 'winter' : 'summer';
     
    }
}

const SeasonDisplay = props =>{
    const season = getSeasonDisplay(props.lat,new Date().getMonth);

    // Ternary Operator

    // const text = season === 'winter' ? 'Burr, It is chill' : "Let's hit the beach";
    // const icon = season === 'winter' ? 'snowflake' : 'sun';
    
    const {text,iconName} = SeasonConfig[season];

    return (

        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}/>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`}/>
        </div>

    )

}

export default SeasonDisplay;
