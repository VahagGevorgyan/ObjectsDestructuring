'use strict'

function cityFacts(object){
    let {name,population,continent}=object
    return `${object.name} has a population of ${object.population} and is a situated in ${object.continent}`
}
console.log(cityFacts({name:"Paris",population:"2 140 5266",continent:"Europe"}))