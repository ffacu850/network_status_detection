import networkStatus from "./network_status.js";

window.addEventListener("online", () => {
    networkStatus()
})
window.addEventListener("offline", () => {
    networkStatus()
})

