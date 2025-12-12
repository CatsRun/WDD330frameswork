<script>
addEventListener('submit', function (e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const params = new URLSearchParams(formData).toString();
    // Redirect to Login_success with query parameters
    window.location.href = `Login_success?${params}`;
});

//  *************************************************
</script>

<template>
    <!-- <form action="Login_success.vue" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
        <br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <br>
        <button class="btn btn-primary" type="submit">Login</button>
    </form> -->
    <form id="login-form" action="Login_success" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
        <br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <br>
        <button class="btn btn-primary" type="submit">Login</button>
    </form>
</template>