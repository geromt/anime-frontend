import { useState, useEffect } from "react";

export function AnimeCard() {
    const [title, setTitle] = useState()
    const [imageUrl, setImageUrl] = useState()
    const [score, setScore] = useState()

    useEffect(() => {
        fetch('https://api.jikan.moe/v4/random/anime')
        .then(result => result.json())
        .then(data => {
          setTitle(data.data.title);
          setImageUrl(data.data.images.jpg.image_url);
          setScore(data.data.score);
        })
      }, []);

    return (
        <button className="
        transition
        ease-out
        bg-dark-purple border-2 
        border-raspberry 
        rounded-md 
        flex 
        flex-col 
        hover:border-glaucous 
        hover:scale-105
        w-48 
        h-72">
            <img src={imageUrl} alt={title} className="w-36 h-36 object-contain rounded-t " />
            <p className="text-base line-clamp-2 h-24 py-1">{title}</p>
            <p className="border border-sky-500 rounded-md text-left text-sm p-1">Score: {score}</p>
        </button>
    )
}