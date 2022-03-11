<template>
    <div class="h-full pt-[120px]">
        <nav-bar></nav-bar>
        <h1 class="header text-[2rem] relative top-[70px]">Create Account</h1>
        <div class="h-[60%] w-full flex items-center justify-center my-16">
            <form
                class="w-full md:w-1/2 m-[20px] md:m-[140px] text-[18px]"
                @submit.prevent="submitHandler"
            >
                <div class="mb-4">
                    <input
                        id="email"
                        type="email"
                        class="
                            p-4
                            w-full
                            rounded-md
                            outline-none
                            border-2 border-teal-400
                            focus:ring-4 focus:ring-teal-200
                        "
                        v-model="store.currentUser.email"
                        placeholder="Enter Email"
                    />
                    <!-- <label for="username">Username</label> -->
                </div>
                <div class="mb-4">
                    <input
                        id="username"
                        type="text"
                        class="
                            p-4
                            w-full
                            rounded-md
                            outline-none
                            focus:ring-4 focus:ring-teal-200
                            border-2 border-teal-400
                        "
                        v-model="store.currentUser.username"
                        placeholder="Enter Username"
                    />
                    <!-- <label for="username">Username</label> -->
                </div>
                <div class="md-4">
                    <!-- <label for="password">Password</label> -->
                    <input
                        id="password"
                        type="password"
                        class="
                            p-4
                            w-full
                            rounded-md
                            outline-none
                            focus:ring-4 focus:ring-teal-200
                            border-2 border-teal-400
                        "
                        v-model="store.currentUser.password"
                        placeholder="Enter Password"
                    />
                </div>
                <div class="mt-4">
                    <!-- <label for="password">Password</label> -->
                    <input
                        id="c_password"
                        type="password"
                        class="
                            p-4
                            w-full
                            rounded-md
                            outline-none
                            focus:ring-4 focus:ring-teal-200
                            border-2 border-teal-400
                        "
                        v-model="store.currentUser.c_password"
                        placeholder="Enter Confirm Password "
                    />
                </div>
                <button
                    class="
                        p-2
                        rounded-md
                        text-white
                        bg-teal-500
                        mt-4
                        outline-none
                        focus:ring-4 focus:ring-teal-200
                    "
                >
                    submit
                </button>
            </form>
        </div>
    </div>
</template>


<script setup>
import NavBar from "@/components/NavBar.vue";
import { useStore } from "@/store/store";
import axios from "@/Axios/axios";

//
const store = useStore();

// Wwe can also store store date in local object to modify

function submitHandler() {
    const { username, email, password, c_password } = store.currentUser;
    if (
        username &&
        email &&
        password &&
        c_password &&
        password === c_password
    ) {
        console.log("submit handler called");
        const temp = { ...store.currentUser };
        delete temp.c_password;
        const res = axios(process.env.VUE_APP_FIREBASE_API).post(
            "/users.json",
            {
                ...temp,
            }
        );
        store.users.push({ ...temp, userId: res.name });
        store.currentUser = {
            email: "",
            username: "",
            password: "",
            c_password: "",
        };
    }
}
</script>

<style lang="scss">
.header {
    font-variant: small-caps;
}
</style>