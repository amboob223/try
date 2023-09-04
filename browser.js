const main = document.getElementById("main");
const btn = document.getElementById("btn");



btn.addEventListener("click", async (event) => {
    event.preventDefault()
    try {
        const body = {
            main: main.value
        };

        fetch("https://codevolution-demo-8o2k.onrender.com/hello", {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify(body)
        }).then(response => response.json())
            .then(data => {
                console.log(data);
            }).catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });

    } catch (error) {
        console.log(error)
    }
})
