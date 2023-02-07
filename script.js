const button = document.querySelector("button")

button.addEventListener("click", () => {
    Notification.requestPermission().then(prem => {
        if (prem == 'granted'){
            const notification = new Notification("Example notification", {
                body: "This is a exmaple text", // creates a body text to the notification
                data: {hello : "world"}, // creates a data to the backend
                // icon: "Logo Centered.png", // makes the notification come with a logo
                // tag: "Welcome Message",
            });
            Notification.addEventListener('error', e => {
                alert("error");
            })
        }
    })
})

let notification

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState == 'hidden'){
        notification = new Notification("Come back please", {
            body: 'Please',
            tag: "come back";
        })
    else {
        notification.close()
    }
    }
})