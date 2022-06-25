import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (        
            <nav clasname="container sticky-top" >
                <ul className="nav my-5 ">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" style={{color:"white"}} href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" style={{color:"white"}} href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" style={{color:"white"}} href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" style={{color:"white"}} href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" style={{color:"white"}} href="#">Active</a>
                    </li>
                </ul>
            </nav>
        )
    }
}
