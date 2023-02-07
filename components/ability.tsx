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
  limit: 2,
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

  return (
    <div>
      {data ? (
        data.data.abilities.results.map((ability) => (
          <div key={ability.url}>
            <button className={cardstyle.button}>{ability.}</button>
          </div>
        ))
      ) : (
        'Loading...'
      )}
    </div>
  );
};

export default ability;
