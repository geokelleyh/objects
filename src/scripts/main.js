

// Lightning Exercises
// Lightning Exercise 1: Given two options of data structures - array or object - which should you use? You need to represent a red 2015 Ford Mustang in your code.



const cars = {

    make : "Ford",
    model: "Mustang",
    year: "2015",
    color: "red",
}

console.log(cars)

// Lightning Exercise 2: Given two options of data structures - array or object - which should you use? You need to store list of animal names in a shelter. The names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky".
const animalNames = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"]
console.log(animalNames)
// Lightning Exercise 3: Define an object for four family members, and put each object in an array named familyMembers. Each family member object that you create should have the same keys on them, but the values will be different.
const familyMembers = [{
    name: "George",
    position: "Dad",
    age: 56,
    atHome: "true",

},
{
    name: "Rosemary",
    position: "Mom",
    age: 51,
    atHome: "true",

},
{
    name: "Hannah",
    position: "First Born",
    age: 22,
    atHome: "false",

},
{
    name: "William",
    position: "Middle Child",
    age: 20,
    atHome: "false",
},
{
    name: "Parker",
    position: "Youngest Child",
    age: 5,
    atHome: "true",

},
]

console.log(familyMembers)
// Lightning Exercises
// Time to practice dot and square-bracket notation. Use the following object to complete the lightning exercises below.

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}



// Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.

console.log("The dimensions of the Empire State Building are", empireStateBuilding.stories, "stories high, a height of", empireStateBuilding.height, "ft.,", "an area of", empireStateBuilding.squareFeet, "squareFeet, with an East-West length of ", empireStateBuilding.eastWestLength, "ft. and a North-South Length of ", empireStateBuilding.northSouthLength,"ft.")

// Lightning Exercises 2: Use square bracket notation to output the remaining 5 properties to the console. Create 5 variables first with the keys as their values. Use those variables to look up the values.

console.log("Other facts about the Empire State Building include its address at",empireStateBuilding["address"]  ,", built at a cost of $", empireStateBuilding["cost"], "by architect",empireStateBuilding["architect"], "in the year",empireStateBuilding["constructionDate"],". The building is owned by", empireStateBuilding["owner"],".")





// Lightning Exercise
// Examine the object below.

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}






// Lightning Exercise 1: Output the names of the part-time instructors followed by the names of the full-time instructors in the console.


console.log("The part-time instructors at Nashville Software School are", `${nashvilleSoftwareSchool.instructors.partTime}`,".The full-time instructors are", `${nashvilleSoftwareSchool.instructors.fullTime}`,".")


// Lightning Exercise 2: Output only Andy and Zoe in the console.

console.log("Two of the instructors are",`${nashvilleSoftwareSchool.instructors.fullTime[4]}`,"and",`${nashvilleSoftwareSchool.instructors.partTime[0]}`,".")




// Practice: Accessing Property Values
// Given the following object...

const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}
// Output the following value to the console.

// Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Myster Tour Album.

console.log(`${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[1].birth}. He contributed heavily to the ${beatles.albums[3]} album.`)



