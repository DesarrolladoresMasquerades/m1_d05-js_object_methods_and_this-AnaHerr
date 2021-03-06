// Class code examples

//This is a function that will be attached to the global object
//Therefore the "this" keyword will point/refer to the global object
function sayHelloFloating(){
    console.log(this.firstName)
    console.log("this object of a floating function", this)
}

sayHelloFloating()


const person1 = {
    firstName: "Jordi",
    age: 28,
    city: "Valencia",
    sayHello: function sayHello(){
        console.log(this.firstName)
    }
}

//This function is attached to a "person1" object
// and therefore the "this" keyword will refer/point to the person1
person1.sayHello()


const person2 = {
    firstName: "Daniel",
    age: 31,
    city: "Barcelona",
    sayHello(){
        console.log( `Buen día, soy ${this.firstName}`)
    }
}

person2.sayHello()

const abstractPerson = {
    sayHello(){
      return `Hello my name is ${this.name}`
    },
    tellAge(){
    return `I am ${this.age} years young`
    }
}

console.log( "abstractPerson", abstractPerson.sayHello())

console.log(abstractPerson.tellAge.bind(person1)())//
