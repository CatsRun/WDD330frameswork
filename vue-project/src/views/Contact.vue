<template>
    <form action="Contact_success" method="get">
        <fieldset>
            <label for="fname">First Name:</label>
            <input type="text" id="fname" name="fname" required><br><br>
            <label for="lname">Last Name:</label>
            <input type="text" id="lname" name="lname" required><br><br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br><br>
            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required><br><br>

            <p>Are you a member?</p>
            <input type="radio" id="memberStatus1" name="memberStatus1" value="prospectiveMember" required>
            <label for="memberStatus1">Prospective member</label><br>
            <input type="radio" id="memberStatus2" name="memberStatus2" value="formerMember" required>
            <label for="memberStatus2">Current member</label><br>
            <input type="radio" id="memberStatus3" name="memberStatus3" value="member" required>
            <label for="memberStatus3">Former member</label><br>
            <input type="radio" id="memberStatus4" name="memberStatus4" value="other" required>
            <label for="memberStatus4">Other</label><br><br>
            <label for="message">Message:</label><br>
            <textarea id="message" name="message" rows="4" cols="50" required></textarea><br><br>
            <input type="submit" value="Submit">
        </fieldset>
    </form>
</template>