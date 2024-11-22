import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { AnimeCard } from "./AnimeCard.jsx"
import { Header } from "./Header.jsx"

function App() {
  return (
    <>
    <div className="flex flex-col">
      <Header />
      <section className="flex flex-row gap-4">
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
      </section>
    </div>
    </>
  )
}

export default App
