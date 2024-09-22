link = document.querySelectorAll(("#leveone a"))
li = document.querySelectorAll((".rout li"))
section = document.querySelector("section")
lifeat = document.querySelectorAll((".features ul li"))
lishfull = document.querySelectorAll("#Work li")
myimg = document.querySelectorAll(".row1 img")

handelactive(link, "active")
handelactive(lifeat,"activefeat")
handelactiveandbg(li)

    
function handelactive(ele,att) {
    ele.forEach(e => e.addEventListener("click", _ => {
        ele.forEach(e=>e.classList.remove(`${att}`))
        e.classList.add(`${att}`)
    }))
}


function handelactiveandbg(ele) {
    ele.forEach(e => e.addEventListener("click", function () {
        ele.forEach(e => e.classList.remove("liactive"))
        let t = e.dataset.imge
        e.classList.add("liactive")
        section.style.backgroundImage = `url(../assets/slider0${t}.jpg)`;
    }))
}

lishfull.forEach(e => {
    e.addEventListener("click", _ => {
        myimg.forEach(function (m) {
            m.parentElement.style='opacity: 0.08'
            m.classList == e.dataset.opcity ? m.parentElement.style = 'opacity: 1' : console.log("NO")  
        })
    })
})
lishfull[0].addEventListener("click", _=> myimg.forEach(e => e.parentElement.style='opacity: 1'))
