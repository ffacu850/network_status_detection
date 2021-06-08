 const body = document.getElementById("body")
const networkStatus = () => {
    const div = document.createElement("div")

    if(navigator.onLine){
        div.textContent = "Conexión Reestablecida"
        div.classList.add("online")
        div.classList.remove("offline")
    }else{
        div.textContent = "Conexión Perdida"
        div.classList.remove("online")
        div.classList.add("offline")
    }
    
    body.insertAdjacentElement("afterbegin",div)
    setTimeout(() => body.removeChild(div),900)
}

export default networkStatus