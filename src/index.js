
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import { PokemonName, PokemonSpecies } from './pokemon-service.js'


function clearFields() {
    $('#pokemon').val("");
    $('.showErrors').text("");
    $('.showName').text("");
    $('.showImg').text("");
  }
  
  function getInfo(response, species) {
    if (response.forms) {
      $('.showName').text(`${response.forms[0].name}`);
      $('.showImg').html(`<img src=${response.sprites.other.dream_world.front_default}>`);
      $('.showAbilities').text(`Abilities: ${getAbilities(response.abilities)}`);
      $('.showMoves').text(`Moves: ${getMoves(response.moves)}`);
      $('.showTypes').text(`Types: ${getTypes(response.types)}`);
      $('.showEggs').text(`Egg Group: ${species.egg_groups[0].name}`);
      } else {
      $('.showErrors').text(`There was an error: ${response}`);
    }
  }

  function getMoves(movesArray){
    let moves = "";
    for (let i = 0; i <movesArray.length; i++){
      moves += movesArray[i].move.name + ", ";
    }
    return moves
}

  function getTypes(typesArray) {
    let types = "";
    for (let i = 0; i <typesArray.length; i++){
      types += typesArray[i].type.name + ", ";
    }
    return types
  }

  function getAbilities(abilitiesArray) {
    let ability = "";
    for (let i = 0; i <abilitiesArray.length; i++){
      ability += abilitiesArray[i].ability.name + ", ";
    }
    return ability
  }
  
  async function makeApiCall(number) {
    const response = await PokemonName.getPokemon(number);
    const species = await PokemonSpecies.getSpecies(name);
    getInfo(response, species);
  }
  
  $(document).ready(function() {
    $('#pokemonID').click(function() {
      let pokemon = $('#pokemonNum').val();
      clearFields();
      makeApiCall(pokemon);
    });
  });
      // let all = [];
      // for(i=1;i<897;i++) {
      //   all.push(i);
      // }
      // if($('#pokemonNum').val()>0) {
      //   let pokemon = $('#pokemonNum').val();
      //   clearFields();
      //   makeApiCall(pokemon);
      // } else {
      //   if($('#habitat').val()===null) {
      //     habitat = all;
      //   } else {
      //     habitat = $('#habitat').val();
          
      //   }
      // }
  //   });
  // });

