import { useState, useEffect } from 'react'
import { getAnimeInfo } from '../services/animeService.js'

export function useAnimeData () {
  const [animeData, setAnimeData] = useState({
    title: "",
    imageUrl: null,
    score: 0,
    status: "",
    rating: "",
    season: "",
    year: 2000,
  })

  const refreshAnimeData = () => {
    getAnimeInfo().then(animeData => setAnimeData(animeData))
  }

  useEffect(refreshAnimeData, [])

  return { animeData, refreshAnimeData }
}