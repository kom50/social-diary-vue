<template>
    <nav
        class="
            bg-teal-400
            flex
            justify-center
            align-center
            shadow-lg
            text-white
        "
    >
        <h1
            class="header absolute text-[34px] font-bold left-[10px] top-[20px]"
        >
            Social Diary
        </h1>
        <div class="menu pt-[7px]">
            <div v-if="state.isLoggedIn">
                <router-link class="menu-item" to="/">Home</router-link>
                <router-link class="menu-item" to="/myposts"
                    >My Post</router-link
                >
                <router-link
                    class="menu-item"
                    to="/signin"
                    @click="logoutHandler"
                    >logout</router-link
                >
            </div>
            <div v-if="!state.isLoggedIn">
                <router-link class="menu-item" to="/signup">SignUp</router-link>
                <router-link class="menu-item" to="/signin">SignIn</router-link>
            </div>
        </div>
        <!-- <button class="dots-btn">
            <i class="bi bi-three-dots-vertical"></i>
        </button> -->
    </nav>
</template>

<script setup>
import { useStore } from "@/store/store";
// import { useRouter } from "vue-router";
const state = useStore();
// const router = useRouter();

function logoutHandler() {
    console.log("Logout ");
    window.localStorage.clear();
    state.$reset();
    // router.push("/signin");
}
</script>

<style lang="scss" scoped>
.header {
    font-variant: small-caps;
}
nav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 6;
}
.menu-item {
    margin-left: 25px;
    padding: 10px;
}
.menu-item:hover {
    opacity: 0.7;
}
.dots-btn {
    font-size: 24px;
    display: none;
    position: absolute;
    right: 20px;
}

.dots-menu {
    z-index: 10;
}

@media screen and(max-width:630px) {
    nav {
        // position: relative;
        height: 110px;
        overflow: hidden;
    }
    .header {
        width: 100%;
    }
    .menu {
        // display: none;
        position: absolute;
        bottom: 10px;
    }
    .dots-btn {
        display: block;
    }
}
</style>