const body = {
    word: "HELLO"
};

fetch("https://codevolution-demo-8o2k.onrender.com/hello", {
    headers: { "Content-Type": "application/json" }, // Corrected Content-Type
    method: "POST",
    body: JSON.stringify(body)
}).then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json(); // You can use .json() to parse JSON response
}).then(data => {
    // Handle the data here, for example, log it
    console.log(data);
}).catch(error => {
    // Handle errors here
    console.error('There was a problem with the fetch operation:', error);
});
