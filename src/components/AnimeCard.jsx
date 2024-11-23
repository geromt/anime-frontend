import { useEffect, useState } from "react";
import { useAnimeData } from "../hooks/useAnimeData";

export function AnimeCard({animeData}) {

  return (
    <div className="border-2 border-primary rounded-md mx-28 my-4 p-4 px-12 grid grid-cols-2 gap-4
    content-center justify-center justify-items-center">
      <p className="font-holtwood text-primary text-4xl text-center">{animeData.title}</p>
      <img className="w-[400px] h-[400px] row-span-2 object-fill drop-shadow-xl shadow-primary" src={animeData.imageUrl} alt={`Image of ${animeData.title}`} />
      <div className="flex flex-col justify-center items-center">
        <p className="text-primary text-3xl font-kantumruy">Score: {animeData.score ?? "N/A"}</p>
        <p className="text-primary text-3xl font-kantumruy">Status: {animeData.status ?? "N/A"}</p>
        <p className="text-primary text-3xl font-kantumruy">Rating: {animeData.rating ?? "N/A"}</p>
        <p className="text-primary text-3xl font-kantumruy">Season: {animeData.season ?? "N/A"}</p>
        <p className="text-primary text-3xl font-kantumruy">Year: {animeData.year ?? "N/A"}</p>
      </div>
    </div>
  )
}