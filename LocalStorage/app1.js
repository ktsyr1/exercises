const form= document.querySelector("form")
const ul= document.querySelector("ul")
const input= document.querySelector("input")
const button= document.querySelector("button")
const item =[]
const data =JSON.parse(localStorage.setItem('app'))

const createLi = (text)=>{
    const li = document.createElement('li')
    li.textContent=text
    ul.appendChild(li)
}
data.map((item)=>{
    createLi(item)
})
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    // input.clear.value()
    item.push(input.value)
    
    localStorage.setItem('app', JSON.stringify(item))

    createLi(input.value)
    input.value=""
})
function clear() {
    localStorage.clear()
}