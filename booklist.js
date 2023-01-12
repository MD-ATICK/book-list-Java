
let title = document.querySelector("#title")
let author = document.querySelector("#author")
let year = document.querySelector("#year")
let btn = document.querySelector(".btn")
let booklist = document.querySelector("#book-list")

btn.addEventListener("click" , function (w) {
    w.preventDefault()

       
if (title.value === "" || author.value === "" || year.value === "") {
    alert("Vai Kicu akta to liken?")
}else{

// ==================== frist way =====================

    let x = document.createElement("tr")
    x.innerHTML = `
    <th>${title.value}</th>
    <th>${author.value}</th>
    <th>${year.value}</th>
    `
    booklist.appendChild(x)

    
// ================== another way ======================


    // let x = document.createElement("tr")
    
    // let a = document.createElement("th")
    // a.innerHTML = title.value
    // x.appendChild(a)
    
    // let b = document.createElement("th")
    // b.innerHTML = author.value
    // x.appendChild(b)
    
    // let c = document.createElement("th")
    // c.innerHTML = year.value
    // x.appendChild(c)

    // booklist.appendChild(x)
    }

})
