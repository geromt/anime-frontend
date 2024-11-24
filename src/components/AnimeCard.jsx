import { useEffect, useState } from "react";
import { useAnimeData } from "../hooks/useAnimeData";

export function AnimeCard({animeData}) {

  return (
    <div className="border-2 border-primary rounded-md 
    mx-4 md:mx-28 my-4
    py-4 px-4 md:p-4 md:px-12 
    grid grid-cols-2 gap-4 
    items-center lg:items-start
    content-center justify-center justify-items-center">
      <p className="font-holtwood text-primary 
      text-2xl md:text-4xl text-center">{animeData.title}</p>
      <img className="w-[150px] h-[200px] md:w-[400px] md:h-[400px] 
      lg:row-span-2 object-fill drop-shadow-xl shadow-primary" src={animeData.imageUrl} alt={`Image of ${animeData.title}`} />
      <div className="flex flex-col justify-center items-center 
      col-span-2 lg:col-span-1
      py-4 lg:py-1">
        <p className="text-primary text-xl md:text-3xl font-kantumruy truncate">Score: {animeData.score ?? "N/A"}</p>
        <p className="text-primary text-xl md:text-3xl font-kantumruy truncate">Status: {animeData.status ?? "N/A"}</p>
        <p className="text-primary text-xl md:text-3xl font-kantumruy truncate">Rating: {animeData.rating ?? "N/A"}</p>
        <p className="text-primary text-xl md:text-3xl font-kantumruy truncate">Season: {animeData.season ?? "N/A"}</p>
        <p className="text-primary text-xl md:text-3xl font-kantumruy truncate">Year: {animeData.year ?? "N/A"}</p>
      </div>
    </div>
  )
}