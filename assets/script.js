let best = document.querySelector(".best")
let best_villa = document.querySelector(".best_villa")

best.addEventListener('click',()=>{
    best_villa.classList.toggle('d-block')
    best_villa.classList.toggle('d-none')
    best.classList.toggle('text-danger')
})

let work = document.querySelector(".work")
let best_dolor = document.querySelector(".best_dolor")

work.addEventListener('click',()=>{
    best_dolor.classList.toggle('d-block')
    best_dolor.classList.toggle('d-none')
    work.classList.toggle('text-danger')
})

let why = document.querySelector(".why")
let best_why = document.querySelector(".best_why")

why.addEventListener('click',()=>{
    best_why.classList.toggle('d-block')
    best_why.classList.toggle('d-none')
    why.classList.toggle('text-danger')
})





