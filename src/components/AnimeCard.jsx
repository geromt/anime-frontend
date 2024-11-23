import { useEffect, useState } from "react";
import { useAnimeData } from "../hooks/useAnimeData";

export function AnimeCard() {
  const [ animeData2, setAnimeData ] = useState();
  const { animeData, _ } = useAnimeData();

  useEffect(() => {console.log("helds")}, [animeData])

  return (
    <div>
      <p>{animeData.title}</p>
      <img src={animeData.imageUrl} alt={`Image of ${animeData.title}`} />
      <div>
        <p>Score: {animeData.score ?? "N/A"}</p>
        <p>Status: {animeData.status ?? "N/A"}</p>
        <p>Rating: {animeData.rating ?? "N/A"}</p>
        <p>Season: {animeData.season ?? "N/A"}</p>
        <p>Year: {animeData.year ?? "N/A"}</p>
      </div>
    </div>
  )
}