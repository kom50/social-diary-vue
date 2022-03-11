<template>
    <div class="h-full pt-[120px]">
        <nav-bar></nav-bar>
        <h1 class="header text-[2rem] relative top-[70px]">Login</h1>
        <div class="h-[60%] w-full flex items-center justify-center my-16">
            <form
                class="w-full md:w-1/2 m-[20px] md:mx-[140px] text-[18px]"
                @submit.prevent="submitHandler"
            >
                <div class="mb-4">
                    <input
                        id="username"
                        type="text"
                        class="
                            p-4
                            w-full
                            rounded-md
                            outline-none
                            border-2 border-teal-400
                            focus:ring-4 focus:ring-teal-200
                        "
                        placeholder="Enter Username"
                        v-model="username"
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
                            border-2 border-teal-400
                            focus:ring-4 focus:ring-teal-200
                        "
                        placeholder="Enter Password"
                        v-model="password"
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
                    Submit
                </button>
            </form>
        </div>

        <!-- <button @click="store.count++">{{ store.count }}</button> -->
    </div>
</template>


<script setup>
import NavBar from "@/components/NavBar.vue";

import { useStore } from "@/store/store";
import { reactive, toRefs } from "vue-demi";
import { useRouter } from "vue-router";
// import axios from "@/Axios/axios";

const store = useStore();
const state = reactive({ username: "", password: "" });
const { username, password } = toRefs(state);

const router = useRouter();
//
function submitHandler() {
    if (state.username && state.password) {
        console.log("submit handler called", username.value, state.password);

        const temp = store.users.find(
            (user) =>
                user.username === state.username &&
                user.password === state.password
        );

        console.log(temp);
        if (temp) {
            store.isLoggedIn = true;
            store.user = {
                username: temp.username,
                password: temp.password,
                posts: temp.posts,
                userId: temp.userId,
            };
            router.push({ name: "home" });
        }
        // axios(process.env.VUE_APP_FIREBASE_API).post("/users.json", {
        //     ...temp,
        // });
        // store.users.push(temp);
    }
}
</script>