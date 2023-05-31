import React from "react"
import Link from "next/link"


const colorMap = {
  fire: "bg-red-500",
  water: "bg-blue-500",
  grass: "bg-green-500",
  rock: "bg-amber-700",
  poison: "bg-fuchsia-500",
  electric: "bg-yellow-300",
  normal: "bg-gray-200",
  fairy: "bg-pink-400",
  ground: "bg-amber-600",
  fighting: "bg-orange-700",
  psychic: "bg-rose-700",
  steel: "bg-slate-500",
  flying: "bg-gray-500",
  bug:"bg-lime-500",
  ice: "bg-cyan-500",
  ghost:"bg-purple-500",
  dark:"bg-gray-900",
  dragon:"bg-violet-700",
}

function PokemonListItem({ pokemon }) {
  return (
   <Link href={`/pokemons/${pokemon.name}`}>
    <li className="border border-gray-400 p-5 flex flex-col">
      <span className="flex items-center space-x-4">
        <div className={`w-20 h-20 text-gray-50 rounded-full grid place-items-center ${colorMap[pokemon.type1.toLowerCase()]}`}>
           <span>
           {pokemon.type1}
           </span>
        </div>
        <div className={`w-20 h-20 text-gray-50 rounded-full grid place-items-center ${colorMap[pokemon.type2.toLowerCase()]}`}>
           <span>
           {pokemon.type2}
           </span>
        </div>
        <span className="text-gray-700 text-xl">{pokemon.name}</span>
      </span>
      <span className="text-gray-700"> {pokemon.classfication}</span>
    </li>
   </Link>
  )
}

export default function PokemonList({ pokemons }) {
  pokemons = pokemons.sort((a,b)=> {
    if(a.pokedex_no<b.pokedex_no){
      return-1;
    }
  });
  return (<ul>
      {pokemons.length > 0 ? (
       
        pokemons.map((pokemon, index) => <PokemonListItem pokemon={pokemon} key={index} />)
      ) : (
        <h1 className="text-3xl text-gray-600"> No pokemons in database </h1>
      )}
    </ul>
  )
}
