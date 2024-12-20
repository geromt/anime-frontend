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
      <h1 className="font-holtwood text-primary 
      2xl:text-8xl xl:text-7xl lg:text-6xl md:text-6xl sm:text-5xl text-4xl 
      text-center lg:text-left 
      md:ml-28 md:pt-16 pt-8">
        Anime Random
      </h1>
      <AnimeCard animeData={animeData}/>
      <span className="flex justify-center">
        <button onClick={handleClick} className="
        bg-secondary border-2 rounded-md border-primary py-1 px-10 font-holtwood text-5xl 
        text-primary hover:scale-105 transition">
          <span className='drop-shadow-xl shadow-background-color'>Next</span>
        </button>
      </span>
    </>
  )
}

export default App
