<template>
    <!-- <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </nav> -->
    <div class="relative h-screen bg-white overflow-auto">
        <router-view />
        <!-- <counter /> -->
    </div>
</template>

<script setup>
// const Counter = {
//     // state
//     data() {
//         return {
//             count: 0,
//         };
//     },
//     // view
//     template: `
//     <h4>{{ count }}</h4>
//   `,
//     // actions
//     methods: {
//         increment() {
//             this.count++;
//         },
//     },
// };

// -------------  import Start -----------------
import { onBeforeMount, watch } from "vue";
import { useStore } from "@/store/store";

// -------------  import End -----------------

// --------------------- Variable declaration Start -----------
const store = useStore();

// -------- Variable End --------------------------
const { fetchUsers, fetchPosts } = store;

fetchUsers();
fetchPosts();
// onBeforeMount(() => {
// });
watch(
    store,
    (state) => {
        console.log("watch");
        if (state.isLoggedIn)
            localStorage.setItem("user", JSON.stringify(state.user));
        // persist the  whole state to the local storage whenever it changes
        localStorage.setItem("piniaState", JSON.stringify(state));
    },
    { deep: true }
);

// lifecycle hooks
onBeforeMount(() => {
    store.$state = JSON.parse(localStorage.getItem("piniaState"));
});
</script>

// <script>
// export default {
//     data() {
//         return {
//             state: {
//                 isLoggedIn: false,
//                 users: {},
//                 currentUser: {},
//             },
//         };
//     },
//     provide() {
//         return {
//             state: this.state,
//         };
//     },
// };
//
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

* {
    box-sizing: border-box;
}
.header {
    font-variant: small-caps;
}
nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    /* color: #42b983; */
    color: #ff0077;
    text-decoration: underline;
}

::-webkit-scrollbar {
    width: 4px;
}

::-webkit-scrollbar-thumb {
    background-color: rgb(132, 168, 168);
}
</style>
