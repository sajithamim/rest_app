import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { search } from "../actions/index";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { getDistance } from 'geolib';
import kittenHeader from '../images/2.jpg';

const SearchList = () => {
  const dispatch = useDispatch();
  const { restaurants } = useSelector(state => state.search);
  const [searchItems, setSearchItems] = useState(restaurants);
  const [items, setItems] = useState(restaurants);
 console.log("resttttt" , restaurants);
  useEffect(() => {
    dispatch(search());
  }, [])
 
  const handleSearch = (string, results) => {
    //setSearch(string);
  }

  const handleSelect = (selected => {
    console.log('selected', selected);
    var lat = selected.latlng.lat;
    var lng = selected.latlng.lng;

    const data = items.map((item) => {
      if(item !== undefined) {
        let distance = getDistance(
          { latitude: item.latlng.lat, longitude: item.latlng.lng },
          { latitude: lat, longitude: lng }
        );
        distance = distance / 1000;
        if (distance <= 5)
          return item;  
      }
    });
    setItems(data); 
  });
  
  
  const listItems = items.map(item => {
    return item !== undefined ? 
    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
      <div className="icon-box">
        <img className="card-img-top" src={kittenHeader} alt={item.name} />
        <div className="card-body">
          <p className="card-text">{item.neighborhood}</p>
          <p className="card-text">{item.address}</p>
          <Link to={`details/${item.id}`} params={{ details: "hello" }} className="btn btn-primary">{item.name}</Link>
        </div>
      </div>
    </div> : ''
  });
  
  

  return (
    <>
      <section id="hero" className="d-flex align-items-center">
        <div style={{ width: 400, marginLeft:100 }}>
          <ReactSearchAutocomplete
            items={searchItems}
            fuseOptions={{ keys: ["address"] }}
            resultStringKeyName="address"
            onSearch={handleSearch}
            onSelect={handleSelect}
            autoFocus
          />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            { listItems }
          </div>
        </div>
      </section>
    </>
  );
}

export default SearchList;









