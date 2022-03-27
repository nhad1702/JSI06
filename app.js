// let input = prompt("enter your name");
// console.log(input);

// let a = 1;
// let b = 2;
// console.log(a + b);

const getData = async (apiURL, callback) => {
    try {
        const request = fetch("https://https://reqres.in/api/users?page=2");
        const data = await request.json();
        console.log(data.data);
    } catch (error) {
        alert(error.massage)
    }
};

const renderUsers = (users) => {
    console.log("render user from API")
}

getData("https://https://reqres.in/api/users?page=2");