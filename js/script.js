const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


//question 1
const cat = {
    complain: function() {
        console.log("Meow!")
    }
}

console.log(cat.complain);



//question 2

const heading = document.querySelector ("h3");
heading.innerHTML = "updatet heading";


// question 3

heading.style.fontSize = "2em";

// question 4 

console.dir(heading.className);

heading.className = "subheading";

console.log(heading.className)

// question 5

const paragraphs = document.querySelectorAll("p");

for(let i = 0; i < paragraphs.length; i++) {

paragraphs[i].style.color = "red";

}

// question 6

const resultsContainer = document.querySelector (".results");
resultsContainer.innerHTML = "<p>new paragraph</p>";
resultsContainer.style.background = "yellow";

// question 7 

function variableForQuestion7 (list) {

    for(let i = 0; i < list.length; i++) {
        console.log(list[i].name)
    }

}

variableForQuestion7 (cats);


//question 8

function createCats (cats) {
    for(let i = 0; i < cats.length; i++) {
        
    }


}

 
