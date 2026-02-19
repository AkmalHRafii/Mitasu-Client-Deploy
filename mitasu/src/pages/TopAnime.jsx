import axios from "axios"
import { useEffect, useState } from "react"
import AnimeCard from "../component/AnimeCard"
import NavBar from "../component/NavBar"
import jikanURL from "../assets/jikanURL"


function TopAnime() {
    const [topAnime, setTopAnime] = useState([])

    async function fetchTopAnime() {
        try {
            const {data} = await axios.get(`${jikanURL}top/anime?limit=10&sfw=true`)
            setTopAnime(data.data)
        } catch (error) {
            
        }
    }



    useEffect(() =>{
        fetchTopAnime()
    },[])
    return (
        <>
            <NavBar />

            <AnimeCard />
        </>
    )
}

export default TopAnime