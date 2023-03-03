// refrence type
var object1 = { vale: 10 };
var object2 = object1;
var object3 = { value: 10 };

// context vs scope
const object4 = {
    a: function() {

        console.log(this)
    }
}


// instantiation
class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    introduce() {
        consloe.log('hi I am ${this.name}, I am a ${this.type}')
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
    }
    play() {
        console.log('WEEE I am a ${this.type}')
    }
}
const wizard1 = new Wizard('wicked', 'healer')