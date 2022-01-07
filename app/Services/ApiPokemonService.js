import { ProxyState } from "../AppState.js"
import { pokeApi } from "./AxiosService.js"
class ApiPokemonService{

  async getAllPokemon(){
    const res = await pokeApi.get('')
    console.log(res.data.results)
    ProxyState.apiPokemon = res.data.results
  }

  async getActivePokemon(){[
    const res = await 
  ]}

}

export const apiPokemonService = new ApiPokemonService()