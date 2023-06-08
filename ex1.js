// Construye la clase Pokemon
// https://pokemondb.net/pokedex/all

/**
 * Un pokemon tiene las siguientes características:
 * 
 * - Un identificador único
 * - Un nombre
 * - Tipo de pokemon (fuego, agua, etc). ¡Puede ser más de un tipo!
 * - Vida máxima
 * - Poder de ataque
 * - Poder de defensa
 * 
 * Define el constructor de esta clase.
 */

class Pokemon {

    constructor(id, name, type, maxlife, powerat,powerdef){

        this.id=id
        this.name = name
        this.type = type
        this.maxlife=maxlife
        this.powerat = powerat
        this.powerdef=powerdef
     

    }

    


}

// TEST----
// let pokemon = new Pokemon(890, "Eternatus", ['Poison', 'Dragon'], 255, 115, 250)
// console.log(pokemon)
