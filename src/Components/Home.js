import React from "react"
import { Card } from "./Card"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import '../css/style.css';
import Swal from 'sweetalert2'
export const Home = () => {
    const [url, setUrl] = useState("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=b5bcf0ce911b2c47e82d34ea7ca52847&hash=c50df6781fe9a67891619f6385e61835")
    const [item, setItem] = useState();
    const [search, setSearch] = useState("");
    useEffect(() => {
        const fetch = async() => {
            const res = await axios.get(url)
            
            let code = res['status'];
                if(code == 200)
                {
                    setItem(res.data.data.results);
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

    const searchMarvel = () => {
        setUrl(` https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a`)
    }

    return ( 
      <>
      <div className="mainContent">
  <div className = "content" >

        {
            (!item) ? < p > Sin registros </p>:<Card data={item}/>
        } 
        </div> 
        </div>
        </>
    )
}