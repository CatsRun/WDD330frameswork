<script>
// get username and password that was entered in Login.vue

addEventListener('load', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    const password = urlParams.get('password');
    console.log('Username:', username);
    console.log('Password:', password);
});
</script>

<template>
    <h2>Login Successful</h2>
    <p>Welcome back! You have successfully logged in.</p>
    <table border="1" cellpadding="10" cellspacing="0" style="width: 90%; margin: 0 auto;">
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
    </table>

</template>