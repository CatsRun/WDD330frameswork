<script>

</script>

<template>
    <h2> Login page</h2>
    <div>
        <!-- this should be a post form but it gave a 404 error when trying to process the form because auth0 is active. -->
        <form class="form-group" id="login-form" action="login_success" method="get">
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
