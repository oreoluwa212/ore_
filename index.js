//Modules

// const names = require('./4-names')
// const say = require('./5-utils') 
// require('./7-mind-grenade')
// const ahira = require('./6-alternativeflows')
// console.log(ahira)

// say(names.john)
// say(names.peter)


const _ = require('lodash')

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items)

console.log(newItems)