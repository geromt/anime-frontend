import './App.css'
import { AnimeCard } from "./components/AnimeCard.jsx"
import { useAnimeData } from './hooks/useAnimeData.jsx'

function App() {
  const { animeData, refreshAnimeData } = useAnimeData()

  const handleClick = async () => {
    console.log("clikite")
    refreshAnimeData()
  }

  return (
    <>
      <h1>Anime Random</h1>
      <AnimeCard animeData={animeData}/>
      <button onClick={handleClick}>Next</button>
    </>
  )
}

export default App
