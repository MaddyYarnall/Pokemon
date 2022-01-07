import { ProxyState } from "../AppState.js";
import { apiPokemonService } from "../Services/ApiPokemonService.js";



function _drawAllPokemon() {
  const apiPokemon = ProxyState.apiPokemon
  let template = ''
  apiPokemon.forEach(p => template += `<li class="selectable p-1" onclick="app.apiPokemonController.getActivePokemon('${p.name}')"> ${p.name}</li>`)
  document.getElementById('all-pokemon').innerHTML = template
}

// async function drawActivePokemon(){
// const pokemon = ProxyState.activePokemon
// if (!pokemon){
// }
// document.getElementById('id').innerHTML = ''
// }

async function _getAllPokemon() {
  try {
    await apiPokemonService.getAllPokemon()
  } catch (error) {
    console.error(error)
  }
}
export class ApiPokemonController {

  constructor() {
    ProxyState.on('apiPokemon', _drawAllPokemon)

    _getAllPokemon()
  }


  async getActivePokemon(pokemonName) {
    try {
      await apiPokemonService.getActivePokemon(pokemonName)
    } catch (error) {
      console.error(error)
    }

  }

}



