import axios from 'axios';
import React, { Component } from 'react'
import Movies from './Movies';

export default class Movielist extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      item: '',
      data: [],
      error: "",
      error2: '',
      type: 'movie'
    }
    this.handlesearch = this.handlesearch.bind(this);
    this.type = this.type.bind(this);
    this.type1 = this.type1.bind(this);
  }
  type() {
    this.setState({ type: "movie" })
  }
  type1() {
    this.setState({ type: "tv" })
  }
  handlesearch() {
    axios.get(`https://api.themoviedb.org/3/search/${this.state.type}?api_key=5e08d71020658f7d21004276635bdf7f&query=${this.state.item}&page=1`).then(res => {
      this.setState({ data: res.data.results })
      if (res.data.results == '') {
        this.setState({
          error: "Oops!",
          error2: "Record Not Found!!!"
        })
      }
      else {
        this.setState({
          error: "",
          error2: ""
        })
      }
      console.log(res.data.results)
    })

  }
  render() {

    return (
      <div className='container my-5'>
        <div className="d-flex" role="search">
          <input className="form-control me-2 bg-dark text-white" onChange={e => this.setState({ item: e.target.value })} type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-dark" onClick={this.handlesearch} type="submit">Search</button>
        </div>
        <div className=" container my-4">

          <button className="btn btn-dark" style={{ marginRight: "10px" }} onClick={this.type} type="submit">Movie</button>


          <button className="btn btn-dark " onClick={this.type1} type="submit">Tv</button>

        </div>

        <div className='container text-center my-5'>
          <h1>{this.state.error}</h1>
          <h4>{this.state.error2}</h4>
        </div>

        <div className='row'>
          {

            this.state.data.map((item) => {
              return (
                <div key={item.id} className='col-md-3' style={{ marginTop: "30px" }}>
                  <Movies img={"https://image.tmdb.org/t/p/original//" + item.poster_path} date={item.release_date ? item.release_date : item.first_air_date} movieName={item.original_name ? item.original_name : item.original_title} />
                </div>

              )
            }

            )
          }
        </div>


      </div>
    )
  }
}
