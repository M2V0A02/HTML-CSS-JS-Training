function sum(a){
    return (function(a){
        console.log(a)
        
    })(a)
}

b = sum(123);
console.log(b);

const person = {
    surname: 'Старк',
    knows: function (what, name) {
        console.log(`Ты ${what} знаешь, ${name} ${this.surname}`)
    }
}

john = "Старк"
person.surname = 'Егор'
person.knows('Все', 'Бран')
person.knows.call({surname: '123'}, 'ничего не', 'Джон')

function Cat(name, color) {
    this.name = name
    this.color = color
}

Cat.prototype.voice = function() {
    console.log('1')
}
console.log(typeof(Cat))
cat = new Cat('Alice', 'black')
console.log(typeof(cat))
cat1 = cat
cat1.test = function() {
    console.log('test')
}
console.log(cat.constructor)