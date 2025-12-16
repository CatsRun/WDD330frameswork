<script>
addEventListener('submit', function (e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const params = new URLSearchParams(formData).toString();
    // Redirect to Login_success with query parameters
    window.location.href = `Login_success?${params}`;
});

// document.querySelector("#login-Button").addEventListener("click", () => {
//     const password = document.querySelector("#password").value;
//     const email = document.querySelector("#email").value;
//     login((email, password), redirect);
// });
//  *************************************************
// // retrieve data from localstorage
// export function getLocalStorage(key) {
//     return JSON.parse(localStorage.getItem(key));
// }
// // save data to local storage
// export function setLocalStorage(key, data) {
//     localStorage.setItem(key, JSON.stringify(data));
// }

// // login processing wdd330
// const baseURL = import.meta.env.VITE_SERVER_URL;
// // import jwt_decode from "jwt-decode";

// const tokenKey = "so-token";
// export async function login(creds, redirect = "/") {
//     try {
//         const token = await loginRequest(creds);
//         setLocalStorage(tokenKey, token);
//         // because of the default arg provided above...if no redirect is provided send them Home.
//         window.location = redirect;
//     } catch (err) {
//         alertMessage(err.message.message);
//     }
// }

// export async function loginRequest(creds) {
//     const options = {
//         method: "POST",
//         header: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(creds),
//     };
//     const response = await fetch(baseURL + "login", options).then(convertToJson);
//     return response.accessToken;
// }

// function isTokenValid(token) {
//     // check to make sure a token was actually passed in.
//     if (token) {
//         // decode the token
//         const decoded = jwt_decode(token);
//         // get the current date
//         let currentDate = new Date();
//         // JWT exp is in seconds, the time from our current date will be milliseconds.
//         if (decoded.exp * 1000 < currentDate.getTime()) {
//             //token expiration has passed
//             console.log("Token expired.");
//             return false;
//         } else {
//             // token not expired
//             console.log("Valid token");
//             return true;
//         }
//         //no token...automatically return false.
//     } else return false;
// };

// export function checkLogin() {
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



// document.querySelector("#login-Button").addEventListener("click", () => {
//     const password = document.querySelector("#password").value;
//     const email = document.querySelector("#email").value;
//     login((email, password), redirect);
// });













</script>

<template>
    <h2> Login page</h2>
    <div>
        <form class="form" id="login-form" action="Login_success" method="post">
            <label for="username">Username:</label>
            <input type="text" class="form-control" id="username" name="username" required>
            <br>
            <label for="password">Password:</label>
            <input type="password" class="form-control" id="password" name="password" required>
            <br>
            <button class="btn btn-primary" type="submit">Login</button>
        </form>
    </div>
</template>