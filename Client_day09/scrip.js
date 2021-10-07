const input = document.querySelector("input");
const addUserButton = document.querySelector("button");
const userDetailSection = document.querySelector(".details");

//there have not puttined arraow function but reason is hosing issue
// Add Button Click Action
addUserButton.onclick = () => {
    fetch("http://localhost:3002/addUser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: Date.now(),
            name: input.value
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            displayUser();
        });
    input.value = "";
};


function displayUser() {
    let section = "";
    fetch("http://localhost:3002/displayUser")
        .then((res) => res.json())
        .then((data) => {
            data.forEach(element => {
                section = `<section>${element.name}</section>`;
            });
            userDetailSection.insertAdjacentHTML("beforeend", section);
        });
};

