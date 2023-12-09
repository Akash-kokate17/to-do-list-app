const inputBox =document.getElementById("input-box")
const listCounter =document.getElementById("list-container")

function addTask(){
    if(inputBox.value===''){
        alert('You have to write something')
    }
    else{
        let li = document.createElement('li')
        li.innerHTML = inputBox.value ;
        listCounter.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML='\u00d7'
        li.appendChild(span)
        saveData()
    }
    inputBox.value=''
}
listCounter.addEventListener("click" ,function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle('checked')
        saveData()
    }else{
        e.target.tagName==='SPAN'
        e.target.parentElement.remove()
        saveData()
    }
},false)

function saveData(){
    localStorage.setItem("data",listCounter.innerHTML)
}
function showData(){
    listCounter.innerHTML=localStorage.getItem("data")
}
showData()