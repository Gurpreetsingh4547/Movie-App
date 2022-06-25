import React, { Component } from 'react';
import Movies from './Movies';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Detail from './Detail';
import ReactPaginate from 'react-paginate';


export default class Moviesitem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            totalpage: 0,
            page:1,
            currentPage:0
        }
        this.handlePageClick=this.handlePageClick.bind(this);
    }
    handlePageClick(e)
    {
        const selectedPage = e.selected;
        this.setState({page:selectedPage,currentPage:selectedPage});
    }
    async componentDidMount() {
        await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=5e08d71020658f7d21004276635bdf7f&page=${this.state.page}`).then(res => {

            this.setState({ data: res.data.results, totalpage: res.data.total_pages });
            console.log(this.state.totalpage)
            console.log(res)
        })
    }
    async shouldComponentUpdate() {
        await axios.get(`https://api.themoviedb.org/3/trending/${this.props.category}/week?api_key=5e08d71020658f7d21004276635bdf7f&page=${this.state.page}`).then(res => {

            this.setState({ data: res.data.results });
        })
    }
    render() {
        return (
            <>
            <div>
            <div className='container my-3'>
                <Navbar />
                {
                    <div className='row'>
                        {
                            this.state.data.map((item) => {
                                return (
                                    <div key={item.id} className='col-md-3' style={{ marginTop: "30px" }}>



                                        <Link to="/detail" style={{ textDecoration: "none" }} state={{ from: item.poster_path, name: item.original_name ? item.original_name : item.original_title, overview: item.overview, data: item.release_date ? item.release_date : item.first_air_date }} ><Movies img={"https://image.tmdb.org/t/p/original//" + item.poster_path} total={this.state.totalpage} type={item.media_type.toUpperCase()} date={item.release_date ? item.release_date : item.first_air_date} movieName={item.original_name ? item.original_name : item.original_title} /></Link>
                                        
                                    </div>
                                )
                            }

                            )
                        }
                    </div>
                }
                
            </div>
            <nav className='my-5'  aria-label="Page navigation example">
            <ReactPaginate
           
          nextLabel={"next"}
          previousLabel={"prev"}
          pageCount={this.state.totalpage}
          onPageChange={this.handlePageClick}
          containerClassName ={"pagination justify-content-center"}
          subContainerClassName={"pages pagination"}
          breakLabel={'...'}
          breakClassName={'break-me'}
          activeClassName={"active"}
          pageClassName= {"page-item"}
          pageLinkClassNamee={"page-link"}
          activeLinkClassName= {"page-item active"}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          />
            </nav> 
            </div>
           
            </>
        )
    }
}

