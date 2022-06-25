import React, { Component } from 'react';


export default class Movies extends Component {
    render() {
        return (
            <div >
                <div className="card bg-dark" style={{color:"white"}}>
                    <img src={this.props.img} style={{height:"350px"}} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p style={{textAlign:"center",margin:"0",fontFamily:"fantasy",fontSize:"20px",fontWeight:"bold",padding:"0"}} className="card-text">{this.props.movieName}</p>
                            <p style={{padding:"0px",margin:"0",fontSize:"3vmin"}}>{this.props.type} <span style={{float:"right"}}>{this.props.date}</span></p>
                        </div>
                </div>
                
            </div>
        )
    }
}
