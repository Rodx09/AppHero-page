import React from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import { useState } from "react"
import { useEffect } from "react"
import '../Components/styleD.css';
export const CardDetails = () => {
  const {id}=useParams();
  const apiKey = "b5bcf0ce911b2c47e82d34ea7ca52847";
  const bash = "c50df6781fe9a67891619f6385e61835";
  const [item,setItem]=useState()
  const [url, setUrl] = useState(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=${apiKey}&hash=${bash}`)

  useEffect(() => {
    const fetch = async() => {
        const res = await axios.get(url)
        let code = res['data']['code'];
        console.log(res.data.data.results[0]);
        if(code == 200)
        {
            setItem(res.data.data.results[0]);
        }else{

        }
    }
    fetch();
}, [url])

  return (
    <>
    {
      (!item)? "":(
        <body>
        <div className="container">
        <div className="imgBx">
            <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`}/>
        </div>
        <div className="details">
            <div className="content">
                <h2>{item.name}</h2>
                <div className='description'>
                    
                        {item.description}  
         
                </div> 
                <h3>Listado de comics</h3>
                <ul className='listComics'>
                {item.comics.items.map(comic => (
                        <li>{comic.name}</li>
                        ))}
                </ul>  
            </div>
        </div>
    </div>
    </body>

        //<div className="box-content">
          //<div className="right-box">
          //<img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
          //</div>
          //<div className="left-box">
            //<h1>Nombre:{item.name}</h1>
            //<h4>{item.description}</h4>
          //</div>
        //</div>
      )
    }
    </>
  )
}
