const { application } = require("express")

// Create a function that tests the post route handler [2 pts]
const creatForm = document.querySelector("create-potion")
creatForm.addEventListener("submit", (e)=>{
    e.preventDefault
    const potion=new FormData(creatForm)
    const reqBody= Object.fromEntries(potion)
})



// Call the function [1 pt]
// Show us the successful POST fetch [1 pt]

