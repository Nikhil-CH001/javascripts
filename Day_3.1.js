//function in javascripts

function sum(a,b){
    console.log(a+b)
}
sum(5,6)


function subtract(a,b,c){
    console.log(a-b-c)
}
subtract(10,6,2)


//arrow function 
let add = (a,b) => {
    console.log(a+b)
}
add(5,5)

let Subtract = (a,b,c) => {
    console.log(a-b-c)
}
Subtract(10,2,2)


//make a function (PrintTitle) with prints the title by looping an array

let datas = [
    {
        title: "Hello World",
        id : 1
    },
    {
        title: "Bye World",
        id : 2
    }
]

// function PrintTitle(){
//     for (let i = 0; i < datas.length; i++) {
//         console.log(datas[i].title)        
//     }
// }
// PrintTitle()

function PrintTitle(){
    for (let data of datas) {
        console.log(data.title)
    }
}
PrintTitle()

let Title = (TitleMatra) => {
    for (let data of TitleMatra) {
        console.log(data.title)
    }
}
Title(datas)


//write the function that accepts age and check if age >18 then print "you can make license" else "you cannot make license"

let licenseCheck = (age) => {
    if(age>=18){
        console.log("you can make license")
    }else {
        console.log("you cannot make license")
    }
}
licenseCheck(20)



//higher order fucntion = it is function or method that accepts another functions as a parameter or we have to pass function as an argument to higher order function

//the function which id being passed to the hof is called callback function
//example of hof : foreach, map,filer, reduce

let data_haru = [
    {
        title: "Hello World",
        id : 1
    },
    {
        title: "Bye World",
        id : 2
    }
]

//foreach -->  jsut loop matra garxa
data_haru.forEach(function(data){
    console.log(data.title)
})
