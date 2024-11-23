//Array of objects

const people =[
    {name: "Tobi", images: "",occupation:"Front-end- Developer"},
    {name: "Tobi", images: "",occupation:"Front-end- Developer"},
    {name: "Tobi", images: "",occupation:"Front-end- Developer"},
    {name: "Tobi", images: "",occupation:"Front-end- Developer"},
    {name: "Tobi", images: "",occupation:"Front-end- Developer"},
    {name: "Tobi", images: "",occupation:"Front-end- Developer"},
    {name: "Tobi", images: "",occupation:"Front-end- Developer"},
    {name: "Tobi", images: "",occupation:"Front-end- Developer"},
    {name: "Tobi", images: "",occupation:"Front-end- Developer"},
    {name: "Tobi", images: "",occupation:"Front-end- Developer"},
    {name: "Tobi", images: "",occupation:"Front-end- Developer"},
];
let body = document.getElementById("body")

people.forEach(person => {
    let card = document.createElement("div")
    card.classList.add("card")
    body.appendChild(card)

    let images = document.createElement("img")
    images.src = person.images
    card.appendChild(images)

    let name = document.createElement("h2")
    name.textContent = person.name
    card.appendChild(name)

    let occupation = document.createElement("p")
    occupation.textContent = person.occupation
    card.appendChild(occupation)
})
