import React from "react"
import { Card } from "./Card"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import '../Components/style.css';
export const Home = () => {
    const [url, setUrl] = useState("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=b5bcf0ce911b2c47e82d34ea7ca52847&hash=c50df6781fe9a67891619f6385e61835")
    const [item, setItem] = useState();
    const [search, setSearch] = useState("");
    useEffect(() => {
        const fetch = async() => {
            const res = await axios.get(url)
            console.log(res);
            if(res.code == "ERR_BAD_REQUEST")
            {
                alert(res.message);
            }else{
                setItem(res.data.data.results);
            }
        }
        fetch();
    }, [url])

    const searchMarvel = () => {
        setUrl(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a`)
    }

    return ( 
      <>
        <div className = "header" >
        <div className = "bg" >
        <img src = "./images/header.jpg"
        alt = "" />
        </div> 
        </div> <div className = "content" >

        {
            (!item) ? < p > Sin registros </p>:<Card data={item}/>
        } 
        </div> 
        </>
    )
}