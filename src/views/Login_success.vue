<script>
// const baseURL = import.meta.env.VITE_SERVER_URL;
// // local storage
// // retrieve data from localstorage
// export function getLocalStorage(key) {
//     return JSON.parse(localStorage.getItem(key));
// }
// // save data to local storage
// export function setLocalStorage(key, data) {
//     localStorage.setItem(key, JSON.stringify(data));
// }
// // set a listener for both touchend and click
// export function setClick(selector, callback) {
//     qs(selector).addEventListener("touchend", (event) => {
//         event.preventDefault();
//         callback();
//     });
//     qs(selector).addEventListener("click", callback);
// }
// // From Team Assignment 2: Returns URL Parameter
// export function getParams(param) {
//     const queryString = window.location.search;
//     const urlParams = new URLSearchParams(queryString);
//     return urlParams.get(param);
// }
// **********************************************************
// JWT functions
// import jwt_decode from "jwt-decode";
// export async function loginRequest(creds) {
//     const options = {
//         method: "POST",
//         header: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(creds),
//     };
//     const response = await fetch(baseURL + "login", options).then(convertToJson);
//     console.log("response:", response);
//     return response.accessToken;
// }

// const tokenKey = "so-token";

// export async function login(creds, redirect = "/") {
//     try {
//         const token = await loginRequest(creds);
//         setLocalStorage(tokenKey, token);
//         window.location = redirect;
//     } catch (err) {
//         alertMessage(err.message.message);
//     }
// };

// function isTokenValid() {
//     if (token) {
//         const decoded = jwt_decode(token);
//         let currentDate = new Date();

//         if (decoded.exp * 1000 < currentDate.getTime()) {//token expiration has passed
//             console.log("Token expired.");
//             return false;
//         } else {
//             console.log("Valid token");
//             return true;
//         }
//     } else return false;
// };
// **********************************************************



// get username and password that was entered in Login.vue
addEventListener('load', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    const password = urlParams.get('password');
    console.log('Username:', username);
    console.log('Password:', password);
});

// function checkLogin() {
//     // get the token from localStorage
//     const token = getLocalStorage(tokenKey);
//     // use the isTokenValid function to check the validity of our token
//     const valid = isTokenValid(token);
//     // if the token is NOT valid
//     if (!valid) {
//         //remove stored token
//         localStorage.removeItem(tokenKey);
//         // redirect to login while sending the current URL along as a parameter
//         // grab the current location from the browser
//         const location = window.location;
//         // check out what location contains
//         console.log(location);
//         // redirect by updating window.location =
//         window.location = `/login/index.html?redirect=${location.pathname}`;
//     } else return token; //if they are logged in then just return the token.

// }
// checkLogin();
// loginRequest();
</script>

<template>
    <h2>Login Successful</h2>
    <p>Welcome back! You have successfully logged in.</p>
    <!-- <table> -->
    <tr>
        <th>Name</th>
        <th>Position</th>
        <th>Contact</th>
    </tr>
    <tr>
        <td>President</td>
        <td>John Doe</td>
        <td>john.doe@example.com</td>
    </tr>
    <tr>
        <td>Vice President</td>
        <td>Jane Smith</td>
        <td>jane.smith@example.com</td>
    </tr>
    <tr>
        <td>Treasurer</td>
        <td>Bob Johnson</td>
        <td>bob.johnson@example.com</td>
    </tr>
    <!-- </table> -->


</template>
