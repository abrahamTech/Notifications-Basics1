const buttonsCont = document.getElementById("buttons-container");
const notificationsCont = document.getElementById("notifications-container");

buttonsCont.addEventListener("click", (e)=>{
    e.preventDefault();

    const type = e.target.dataset.type;

    if(type === "success"){
        console.log("Success !!!")
        /* addNotification({
            type: "successc",
            title: "Success!",
            description: "The operation was successful"
        }) */
    }
    else if(type === "info"){
        console.log("Info !!!")
    }
    else if(type === "warning"){
        console.log("Warning !!!")
    }
    else if(type === "error"){
        console.log("Error !!!")
    }
})