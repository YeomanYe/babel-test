// import {
//     Parser
// } from 'acorn';
const Parser = require('acorn');

// const MyParser = Parser.extend(
//     require("acorn-jsx")(),
//     require("acorn-bigint")
// );
var str = /*javascript*/`
for(let i = 0;i < 10;i++) {
    console.log(i);
}
`
var str = /*javascript*/`
    i === 10;
`
const token = Parser.tokenizer(str);
console.log([...token])