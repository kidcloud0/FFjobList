import React from "react";
import {Link} from "react-router-dom"
import "./ClassCard.css";

export default class JobList extends React.Component{
    componentDidMount(){
        console.log(this.props)
    }
    render(){
        return(
            <div className="Card">
                <Link to={`/FF/classes/${this.props.id}`} state={{name:this.props.name, age:this.props.age, job:this.props.job, Game:this.props.origin, bio:this.props.bio}}>
                <p className="charaName">Name: {this.props.name}</p>
                </Link>
                <h2 className="charaAge">Age: {this.props.age}</h2>
                <img className="charaImage" src={this.props.img}/>
                {/* For the images make sure its a self closing "/" after the Culies */}
                <h3 className="charaJob">Job: {this.props.job}</h3>
                <h4 className="charaGame">Game: {this.props.origin}</h4>
            </div>
        )
    }
}