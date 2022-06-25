import React from 'react';
import { useLocation } from 'react-router-dom';
export default function Detail() {
  
  const location = useLocation();
  console.log(location.state);
  return (
    <div className='container  my-5'>
      <div className="card mb-3 bg-dark" style={{ maxWidth: "100%" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={'https://image.tmdb.org/t/p/original//' + location.state.from} className="img-fluid rounded-start" alt="..." />
          </div>                         <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title" style={{ fontSize: "10vmin" }}>{location.state.name}</h5>
              <p className="card-text ">{location.state.overview}</p>
              <p className="card-text"><small className="text-muted " style={{ fontSize: "3vmin" }}>{location.state.data}</small></p>
              {/* slider */}
            

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

