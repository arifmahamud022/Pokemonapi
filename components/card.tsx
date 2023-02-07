import cardstyle from './card.module.css'
import ivysaur from '../public/ivysaur.png'
import React, { useState, useEffect } from 'react';
import Ability from '../pages/ability'
import Link from 'next/link';
import Texture from '../components/textture'


const gqlQuery = `query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
      }
    }
  }
  
  `;
  
  const gqlVariables = {
    limit: 10,
    offset: 1,
  };

export default function card() {
    const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://graphql-pokeapi.graphcdn.app/', {
          credentials: 'omit',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: gqlQuery,
            variables: gqlVariables,
          }),
          method: 'POST',
        });
        const json = await res.json();
        setData(json.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

    return (
      <>
      <div className={cardstyle.container}>
      
      {data.pokemons.results.map((pokemon, index) => (
       
          
       <Link href="/details">
       
       <div className={cardstyle.card} key={index}>
       <div className={cardstyle.secondcard}>
           <div className="">
               <h3 className={cardstyle.idd}>#0010</h3>
           </div>
           <div className={cardstyle.image}>
               <img src={pokemon.image} alt="" />
           </div>
       </div>
       <div className={cardstyle.nametext}>
           <p className='pt-1 text-xl'><div className={cardstyle.idd}>{pokemon.name}</div></p>
       </div>
       <div className={cardstyle.btn}>
       <button className={cardstyle.button}><Ability /></button> <button className={cardstyle.butn}>Poision</button>
       </div>

     </div>
     </Link>
       
      
      
          
    
      ))}
    
    </div>
    <div className="texture">
    <div className={cardstyle.bottomside}>
        <img src="https://res.cloudinary.com/dfwmknxqz/image/upload/v1675619927/Left_awn1id.png" alt="" className={cardstyle.left} />

    </div>
    
    </div>
    <div className="texturecomponent">
        < Texture />
    </div>

    <div className={cardstyle.bottomsidee}>
        <img src="https://res.cloudinary.com/dfwmknxqz/image/upload/v1675619927/Left_awn1id.png" alt="" className={cardstyle.leftt} />

    </div>


      


      
      </>
    )
  }