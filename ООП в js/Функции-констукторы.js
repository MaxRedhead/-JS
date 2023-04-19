function Candy(name){
    this.tasty = 'delicious',
    this.name = name
}

Candy.prototype.getWeight = function (weight){
    console.log(`Weight is ${weight}g`)
};

function ChocoCandy(name, choco, tasty){
    this.choco = choco,
    this.name = name
    this.tasty = tasty
}
ChocoCandy.prototype = new Candy()
ChocoCandy.prototype.getWeight = function (weight) {
    console.log(`Candy weight is ${weight}g`)
}

const twix = new ChocoCandy('twix', 'milk', 'delisious');
const snickers = new Candy('snickers');

console.log(twix)
twix.getWeight(47)

console.log(snickers)
snickers.getWeight(50)
