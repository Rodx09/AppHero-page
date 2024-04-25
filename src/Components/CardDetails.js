import React from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import { useState } from "react"
import { useEffect } from "react"
import Swal from 'sweetalert2'
import '../css/styleD.css'


export const CardDetails = () => {
  const {id}=useParams();
  const apiKey = "b5bcf0ce911b2c47e82d34ea7ca52847";
  const bash = "c50df6781fe9a67891619f6385e61835";
  const [item,setItem]=useState()
  const [url, setUrl] = useState(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=${apiKey}&hash=${bash}`)

  useEffect(() => {
    const fetch = async() => {
        const res = await axios.get(url)
        let code = res['status'];
        if(code == 200)
        {
           // console.log(res.data.data.results[0]);
            setItem(res.data.data.results[0]);
        }else{
            let statusText = res['statusText'];
            Swal.fire({
                title: 'Hubo un problema con el servicio',
                text: {statusText},
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        }
    }
    fetch();
}, [url])

  return (
    <>
    {
      (!item)? <h2>Sin información</h2>:(
  
        <div className="containerD">
        <div className="imgBx">
            <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`}/>
        </div>
        <div className="details">
            <div className="content2">
                <h2>{item.name}</h2>
                <hr></hr>
                <div className='description'>
                {item.description ? item.description : <h4>Sin descripción</h4>}
                </div> 
                <p><h3>Listado de comics</h3></p>
                <ul className='listComics'>
                {Object.keys(item.comics.items).length > 0 ? item.comics.items.map(comic => (
                        <li>{comic.name}</li>
                        )) : <h4>Sin resultados</h4>}
                
                </ul> 
            </div>
        </div>
    </div>
   

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
