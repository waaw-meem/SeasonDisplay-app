import React from "react";
import ReactDOM  from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component{

    state = {lat:null,long:null,errMessage:''}

    // constructor(props){
    //     super(props);

    //     // first method Initialize the state here
    //     // this.state = {lat:null,long:null,errMessage:''};

    //     // parameters of the component
    //     // window.navigator.geolocation.getCurrentPosition(
    //     //     position => {
    //     //         // Updating state with set state
    //     //        this.setState({lat:position.coords.latitude}) 
    //     //        this.setState({long:position.coords.longitude}) 
    //     //     },
    //     //     err => {
    //     //         this.setState({errMessage:err.message})
    //     //     }
    //     // );
    // }

    // Best place for locating for data loading / API /  It is a best practice  

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => {
               // Updating state with set state
               this.setState({lat:position.coords.latitude}) 
               this.setState({long:position.coords.longitude}) 
            },
            err => {
                this.setState({errMessage:err.message})
            }
        );
    }

    renderContent(){
         
        if(this.state.errMessage && !this.state.lat){
            return <div>Error : {this.state.errMessage}</div>
        }
        if(!this.state.errMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }
        return <Spinner message="Please accept the location!"/>
    }
    

    // React says we have to say or define render!!
    render(){
        // Calling state here to show us on screen
        return(
            <div className="border red">
            {this.renderContent()}
        </div>
        )
    }
};

ReactDOM.render(<App/>,document.querySelector("#root"))
