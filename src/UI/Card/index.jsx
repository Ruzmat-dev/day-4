import React from 'react';
import { Link } from 'react-router-dom';
import "./style.scss";

const index = ({ data: { flag, population, capital, region, name } }) => {

   return (
      <>
         <Link to={`/countries/${name}`}>
            <div className="card text-dark">
               <img src={flag} alt={name} className="card-img" />
               <div className="card-body">
                  <h4 className="card-title">
                     {name}
                  </h4>
                  <ul>
                     <li>Population: <strong>{population}</strong></li>
                     <li>Region: <strong>{region}</strong></li>
                     <li>Capital: <strong>{capital}</strong></li>
                  </ul>
               </div>
            </div>
         </Link>
      </>
   );
};

export default index;