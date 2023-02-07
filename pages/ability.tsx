import React, { useState, useEffect } from 'react';
import cardstyle from '../components/card.module.css' 
const gqlQuery = `query abilities {
  abilities {
    count
    next
    previous
    results {
      url
      name
    }
  }
}`;

const gqlVariables = {
  limit: 1,
  offset: 1,
};

const ability = () => {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetch('https://graphql-pokeapi.graphcdn.app/', {
        credentials: 'omit',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: gqlQuery,
          variables: gqlVariables,
        }),
        method: 'POST',
      })
        .then((res) => res.json())
        .then((res) => {
          setData(res);
          console.log('Response from server', res);
        });
    }, []);
  
    const slicedData = data && data.data.abilities.results.slice(0, 1);
  
    return (
      <div>
        {slicedData ? (
          slicedData.map((ability) => (
            <div  key={ability.url}>
              
                {ability.name}
              
            </div>
          ))
        ) : (
          'Loading...'
        )}
      </div>
    );
  };
  

export default ability;
