import React from "react"
import Head from "next/head"
//import pokemons from "@/assets/sampledataset.json"
import PokemonList from "@/components/PokemonList"
import Title from "@/components/Title"

export default function Pokemons({pokemonsList}) {
  return (
    <>
      <Head>
        <title>Pokemons</title>
      </Head>

      <Title>
        <span className="text-gray-700 text-xl">List of Pokemon:</span>
      </Title>
      <PokemonList pokemons={pokemonsList} />
    </>
  )
}

export async function getServerSideProps(context) {
  // console.log("pokemon", pokemons)
  const response = await fetch("http://127.0.0.1:8000/pokemons")
  const data = await response.json()


  console.log("pokemons", data)

  return {
    props: {
      pokemonsList: data,
    },
  }
}
