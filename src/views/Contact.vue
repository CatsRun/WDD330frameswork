<script setup>
// import { officers } from '@/assets/officers_contact.json';
import { ref } from "vue";
console.log(officers);
const fname = ref("");
const lname = ref("");
const phone = ref("");
const email = ref("");
const member_status = ref("");

const submitForm = () => {
    console.log("First Name:", fname.value);
    console.log("Last Name:", lname.value);
    console.log("Phone:", phone.value);
    console.log("Email:", email.value);
    console.log("Member Status:", member_status.value);
};

</script>
<template>
    <!-- change these to make live, chang eto sin=mple if... -->
    <!-- <form action="Contact_success" method="get" class="form-group"> -->
    <form @submit.prevent="submitForm" method="get" class="form-group">
        <fieldset>
            <label for="fname" class=" col-form-label">First Name:</label>
            <input type="text" class="form-control" id="fname" name="fname" v-model="fname" required><br>
            <label for="lname" class=" col-form-label">Last Name:</label>
            <input type="text" class="form-control" id="lname" name="lname" v-model="lname" required><br>
            <label for="email" class=" col-form-label">Email:</label>
            <input type="email" class="form-control" id="email" name="email" v-model="email" required><br>
            <label for="phone" class="col-form-label">Phone:</label>
            <input type="tel" class="form-control" id="phone" name="phone" v-model="phone" required><br>

            <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
            <div class="col-sm-10">
                <div class="form-check">
                    <input class="form-check-input" v-model="member_status" type="radio" value="Prospective member"
                        checked>
                    <label class="form-check-label" for="gridRadios1">
                        Prospective member
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" v-model="member_status" type="radio" value="Current member">
                    <label class="form-check-label" for="gridRadios2">
                        Current member
                    </label>
                </div>
                <div class="form-check ">
                    <input class="form-check-input" v-model="member_status" type="radio" value="Former member">
                    <label class="form-check-label" for="gridRadios3">
                        Former member
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" v-model="member_status" type="radio" value="Other">
                    <label class="form-check-label" for="gridRadios4">
                        Other
                    </label><br><br>
                    <!-- hidden, if filled out, do not send... -->
                    <!-- or simple math prob with random generator,  -->
                </div>

            </div>
            <input type="submit" value="Submit">
        </fieldset>
    </form>
</template>