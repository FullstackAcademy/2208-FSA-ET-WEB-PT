import variable from "./test";
import axios from "axios";

console.log(variable);

const puppyListElement = document.getElementById("puppies")
const buttonElement = document.getElementById("getPuppies")

const getPuppies = async () => {
    // Reach out into DB for puppies
    const response = await fetch(
        "http://localhost:3000/api/puppies"
    );
    // const response = await fetch(
    // "http://localhost:3000/api/puppies",
    // {
    //     method: "POST",
    //     body: {
    //         asdfasdf: "asdfasdfas"
    //     }, 
    //     header: {
    //         Content-Type: "application.json",
    //         // ....
    //     }
    // });
    // const response = await axios.post("/api/puppies", body);

    // Decode puppies into actual data
    const json = await response.json();

    // Give back to the user
    return json.puppies;

    // const data = await axios.get("/api/puppies");
    // const json = await data.json;
};

const getPuppiesPromise = () =>
    fetch("http://localhost:3000/api/puppies")
        .then(response => response.json())
        .then(json => json.puppies);

const renderPuppies = (puppies) => {
    for (var i = 0; i < puppies.length; i++) {
        const puppy = puppies[i];
        const element = document.createElement("p");
        element.innerText = "Name: " + puppy.name;
        puppyListElement.appendChild(element);
    }

    // for (let puppy of puppies) {
    //     const element = document.createElement("p");
    //     element.innerText = "Name: " + puppy.name;
    //     puppyListElement.appendChild(element);
    // };
}

buttonElement.addEventListener("click", async () => {
    const puppies = await getPuppies();
    renderPuppies(puppies);
})

console.log("hello")