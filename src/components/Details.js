import React from 'react';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Details = () => {
  const params = useParams();
  const { restaurants } = useSelector(state => state.search);
  let details = restaurants.filter(item => {
    if(item.id == params.id)
      return item;
  })
  details = details[0];
  
  const reviews = details.reviews.map(item => { 
    return  <section><div className="card">
        <div className="row d-flex">
            <div className="d-flex flex-column">
                <h3 className="mt-2 mb-0">{item.name}</h3>
                <div>
                    <p className="text-left"><span className="text-muted">Rating - {item.rating}</span> </p>
                </div>
            </div>
            <div className="ml-auto">
                <p className="text-muted pt-5 pt-sm-3">{item.date}</p>
            </div>
        </div>
        <div className="row text-left">
            <p className="content">{item.comments}</p>
        </div>
    </div></section>
  });

  return (
    <>
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-3">{details.name}</h1>
          <p>{details.address}</p>
          <p><a className="btn btn-primary btn-lg" href="#" role="button">Cuisine - {details.cuisine_type}</a></p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Opearting Hours</h2>
            <p>{details.operating_hours.Monday}</p>
            <p>{details.operating_hours.Tuesday}</p>
            <p>{details.operating_hours.Wednesday}</p>
            <p>{details.operating_hours.Thursday}</p>
            <p>{details.operating_hours.Friday}</p>
            <p>{details.operating_hours.Saturday}</p>
            <p>{details.operating_hours.Sunday}</p>
          </div>
        </div>
      </div>
      {reviews}
    </>
  );
}

export default Details;