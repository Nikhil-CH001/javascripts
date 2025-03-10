// //object


// let me = {
//     Name : "Nikhil",
//     Age : 50,
//     Ghar : "Kalabanjar"
// }

// me.College = "Green peace lincoln college"

// console.log(me)
// console.log(Object.keys(me))
// console.log(Object.values(me))


// let i = ['sun','mon','tue','wec','thu','fri','sat']
// console.log(i.length)


// let isRaining = true
// if(isRaining){
//     console.log("Carry Umbrela")
// } else {
//     console.log("Don't Carry Umbrela")

// }


let age = 20

if(age>18){
    console.log("you can get license")
} else {
    console.log("you can not get license")
}

(age>18) ?  console.log("you can get license") :     console.log("you can notget license")

age>18 && console.log("you can get license")


let temp = 19
if(temp>30){
    console.log("Hot Wether")
} else if (temp>20){
    console.log("Normal Wether")
} else {
    console.log("Cold Wether");
}


//loops

let array = ['Nikhil','sudip','sumit','nishanta','kamal']
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}


for(let data of array) {
    console.log(data)
}




let week = ['sun','mon','tue','wec','thu','fri','sat']

for(let day of week){
    console.log("Today is "+day)
}





let arrays = [
    {
        name : "Hello",
        age : 20
    },
    {
        name : "Bye",
        age : 60
    }
]

for(let data of arrays){
    console.log("My name is "+data.name)
}


let products = [
    {
        name : ["apple","mango"],
        age : ["20","22"]
    }
]

console.log(products[0].name[1])