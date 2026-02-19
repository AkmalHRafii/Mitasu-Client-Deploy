import axios from "axios"
import { useState } from "react"



function AnimeCard({ anime }) {
    return (
        <>
            <div key={anime.mal_id} className="w-1/7 h-fit p-5 hover:bg-neutral-600 rounded-md">
                <div>
                    <img src={anime.images.jpg.image_url} />
                </div>
                <h2 className="text-white">{anime.title}</h2>
                <h3 className="text-white">{anime.title_japanese}</h3>
                <button className="text-white w-full rounded-md hover:bg-neutral-800">Add Bookmark</button>
            </div>
        </>
    )
}

export default AnimeCard