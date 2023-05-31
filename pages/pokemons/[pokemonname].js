import React from 'react'
import Image from "next/image"
import {useRouter} from "next/router"
import Title from "@/components/Title"

export default function PokemonPage({details}) {
  const router = useRouter()
  return (
    <div>
      <Title>
        <h1 className="text-3xl font-semibold">Pokemon - {details.data.name}  </h1>
      </Title>
        <div className="relative">
          <Image src={details.imageURL} width={200} height={200} />
        </div>

      <div className="flex flex-col space-y-4">
          <p>Classification: {details.data.classification}</p>
          <p>Generation: {details.data.generation}</p>
          <p>Height: {details.data.height_m}m</p>
          <p>Weight: {details.data.weight_kg}kg</p>
          <p>Attack: {details.data.attack}</p>
      </div> 
    </div>
  )
}

export async function getServerSideProps(context){
  // console.log("context", context.params)
  const pokemonName =  context.params.pokemonname
  const response = await fetch(`http://127.0.0.1:8000/pokemons/${pokemonName.toLowerCase()}`)
  let data = await response.json()
  // let data = await response.json()
 
  const externalUrl = ` https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}` 

  const externalDataResponse = await fetch(externalUrl)
  const externalData = await externalDataResponse.json()

  const imageURL = externalData.sprites.front_shiny


  console.log("before", data)
  
  data = {...data, imageURL}
  console.log("data of single of pokemon", data)

  return {
    props: {
      details: data
    }
  }
}