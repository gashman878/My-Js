function Hello(){
    document.getElementById("try").innerHTML = "Sorry, Hello Every One!";
}
function Datetime(){
    document.getElementById("time").innerHTML = Date();
}
function fontS(){
    document.getElementById('try').style.fontSize='40px';
}
function delet(){
    document.getElementById('nonesense').style.display='none';
}
function smaths(){
    document.write(12+12);
}
function paid(){
    window.alert('You have been successfully paid');
}

//Just created these variables, I haven't used them yet.
let a;
a = 43; b = 12; c = a+b;
document.getElementById('trial').innerHTML = a;//This is not working shaa, will figure it out later

//Now let's declare some arrays
const schools = ["Futo", "UNN", "ESUT"];

//Let's edit an item in the array
schools[1] = "UNIZIK";

//Let's add an item to the array
schools.push('IMT');

//Let's create an Object
// const school = {Name:"Futo", Location:"Owerri", Color:"Green"};

//To change a property
school.Color = "White";

//To add a property
school.Nationality = "Nigeria";

//Using typeof to get the type of data you have.
//Just call 'typeof' followed by the data you have, it will return the data type

//Let's create a function and randomly use it.
function topct(x) {
    return (x/100) * 430;
}
//You can use a function value directly as an object
//If you call a name and you want it to be in uppercase, you can add .toUpperCase()
