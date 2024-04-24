import React from "react"
import { Card } from "./Card"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
export const Home = () => {
    const [url, setUrl] = useState("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=b5bcf0ce911b2c47e82d34ea7ca52847&hash=c50df6781fe9a67891619f6385e61835")
    const [item, setItem] = useState();
    const [search, setSearch] = useState("");
    useEffect(() => {
        const fetch = async() => {
            const res = await axios.get(url)
            setItem(res.data.data.results);
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
        <img src = "./images/marvel.png"
        alt = "" />
        </div> 
        <div className = "search-bar" >
        <input type = "search"
        placeholder = 'Buscar heroe'
        className = 'search'
        onChange = { e => setSearch(e.target.value) }
        onKeyPress = { searchMarvel }
        /> </div > 
        </div> <div className = "content" >

        {
            (!item) ? < p > Not Found </p>:<Card data={item}/>
        } 
        </div> 
        </>
    )
}