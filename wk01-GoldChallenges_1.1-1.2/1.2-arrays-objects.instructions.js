/* 
    - write an object literal that stores information about your favorite movie. nameOfMovie, runTime, characters, and genre should be keys directly inside the object.
        - characters will be an array that should store no more than 2 character objects, each of which stores name, age, and items.
        - items itself will also be an array that should store no more than 2 item objects. These items objects can have key-value pairs of whatever you would like (ex. {itemOne: 'Bow and Arrow'}).

    - use console.log statements to show that you can print out the 
    
    1. nameOfMovie, 
    2. runTime, 
    3. the characters, 
    4. the name of a character, 
    5. and one of the items a character has
*/

//NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS

let favoriteMovie =  {
    nameOfMovie: 'Westworld',
    runTime: '4 seasons',
    characters: [Character1 = {name: 'Bernard', age: '45', items: ['tablet', 'glasses']}, Character2 = {name: 'Dolores', age: '30', items: ['guns', 'tablet']}]
}

console.log(favoriteMovie.nameOfMovie);
console.log(favoriteMovie.runTime);
console.log(favoriteMovie.characters);
console.log(favoriteMovie.characters[1].name)
console.log(favoriteMovie.characters[1].items[1]);
