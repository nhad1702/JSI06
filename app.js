// let input = prompt("enter your name");
// console.log(input);

// let a = 1;
// let b = 2;
// console.log(a + b);

// const getData = async (apiURL, callback) => {
//     try {
//         const request = fetch("https://https://reqres.in/api/users?page=2");
//         const data = await request.json();
//         console.log(data.data);
//     } catch (error) {
//         alert(error.massage)
//     }
// };

// const renderUsers = (users) => {
//     console.log("render user from renderUsers")
// }

// getData("https://https://reqres.in/api/users?page=2");

import { mockUser } from "./mockData.js";
const rootElement = document.getElementById("root");

const getData = async (apiURL, callback) => {
  try {
    const request = await fetch(apiURL);
    const data = await request.json();
    callback(data.data);
  } catch (error) {
    alert(error.message);
  }
};

const renderUsers = (users) => {
  for (let user of users) {
    const userDiv = createUserHTMLElement(user);
    rootElement.appendChild(userDiv);
  }
};

const createUserHTMLElement = (user) => {
  const { first_name, last_name, avatar, email } = user;

  // return `
  //   <div class="user">
  //     <img src="${avatar}" alt="">
  //     <h2>${first_name} ${last_name}/h2>
  //     <p>${email}</p>
  //   </div>
  // `;

  const userDiv = document.createElement("div");
  userDiv.classList.add("user");

  const avatarElement = document.createElement("img");
  avatarElement.src = avatar;

  const fullNameElement = document.createElement("h2");
  fullNameElement.innerText = `${first_name} ${last_name}`;

  const emailElement = document.createElement("p");
  emailElement.innerText = email;

  userDiv.appendChild(avatarElement);
  userDiv.appendChild(fullNameElement);
  userDiv.appendChild(emailElement);

  return userDiv;
};

// createUserHTMLElement(mockUser);
// console.log(userHRML);

getData("https://reqres.in/api/users?page=2", renderUsers);