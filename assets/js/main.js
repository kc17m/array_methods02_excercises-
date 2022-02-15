// lev1_1
let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];
function sortierung(e) {
    e.sort();
    return e;
}

let sortier = function (e) {
    e.sort();
    return e;
}


console.log(sortierung(languages), sortier(languages));

// lev1_2
let sortierung2 = (e => {
    e.reverse();
    return e;
})

console.log(sortierung2(languages));

// lev2_2
let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];

let sortNum = numArray2.sort((a, b) => (a - b));

console.log(numArray2.sort((a, b) => (a - b)));
console.log(sortNum);

// lev3_1
let reverString = str => {
    let rev, temp;
    if (str.includes(" ")) {
        temp = str.split(" ")
        console.log(temp);
        rev = temp.map(e => e.split("").reverse().join(""));
        console.log(rev);
    }
    else {
        rev = str.split("")
            .reverse()
            .join("");
    }
    return rev;
}

console.log(reverString("Katze und Hund"));
console.log(reverString("Reliefpfeiler"));

// forEach / map()
// lev1_1

let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
];

console.log(getraenke.sort());

getraenke.forEach(e => {
    document.write(e);
});

//lev1_2 
let upperDrinks = getraenke.map(e => e.toUpperCase());
console.log(upperDrinks);

//lev1_3

let array = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];



// function expression
let arrMultandSort = function (arr) {
    let res = arr.map(e => e * 2);
    res.sort((a, b) => a - b);
    return res;
}
// arrow function
let arrMultandSort2 = (arr) => {
    let res = arr.map(e => e * 2);
    res.sort((a, b) => a - b);
    return res;
}
//function declaration
function arrMultandSort3(arr) {
    let res = arr.map(e => e * 2);
    res.sort((a, b) => a - b);
    return res;
}


console.log(arrMultandSort(array));
console.log(arrMultandSort2(array));
console.log(arrMultandSort3(array));


// lev1_5

let checkNumber = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];

let arr = [];

checkNumber.forEach(e => {

    if (e % 3 == 0) {
        e = (e + 100);
    }
    else {
        (e);
    }
    console.log(e);
    return e;

});
















