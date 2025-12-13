<script>
// addEventListener('submit', function (e) {
//     e.preventDefault();
//     const form = e.target;
//     const formData = new FormData(form);
//     const params = new URLSearchParams(formData).toString();
//     // Redirect to Login_success with query parameters
//     window.location.href = `Login_success?${params}`;
// });

//  *************************************************

</script>

<template>
    <h2> Login page</h2>
    <!-- <form action="Login_success.vue" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
        <br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <br>
        <button class="btn btn-primary" type="submit">Login</button>
    </form> -->
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