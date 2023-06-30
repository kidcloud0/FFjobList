import React from "react";
import { useLocation } from "react-router-dom";

let {name,img,age,job,origin,bio}=useLocation()
export default class Details extends React.Component{
    render(){
        return(
            <div className="Card">
                <p className="charaName">Name: {this.props.name}</p>
                <h2 className="charaAge">Age: {this.props.age}</h2>
                <img className="charaImage" src={this.props.img}/>
                <h3 className="charaJob">Job: {this.props.job}</h3>
                <h4 className="charaGame">Game: {this.props.origin}</h4>
                <p> {this.props.bio}</p>
            </div>
        )
    }
}