<template>
    <nav
        class="
            fixed
            w-full
            bg-teal-400
            flex
            justify-center
            items-center
            shadow-lg
        "
    >
        <button class="absolute left-[10px]" @click="$router.back()">
            <!-- <i class="bi bi-arrow-left font-bold text-[24px]"></i> -->
            <i class="bi bi-arrow-return-left text-[24px]"></i>
        </button>
        <h1 class="header text-[34px] font-bold">Social Diary</h1>
    </nav>
    <div class="h-full pt-[100px]">
        <!-- <nav-bar></nav-bar> -->
        <div class="p-1 flex flex-col align-center items-center">
            <p class="self-stretch text-[24px] font-bold">
                {{ viewPost.username }}
            </p>
            <p class="self-stretch">{{ viewPost.date }}</p>
            <!-- <textarea
                class="
                    w-[85%]
                    h-3/4
                    p-4
                    w-full
                    rounded-md
                    outline-none
                    border-2 border-teal-400
                    focus:ring-4 focus:ring-teal-100
                    text-[18px]
                "
                name=""
                id=""
                cols="35"
                rows="20"
                readonly
                :value="$route.params.data"
            ></textarea>
                 -->
            <p
                class="
                    data
                    w-[85%]
                    h-3/4
                    mb-2
                    p-4
                    w-full
                    bg-white
                    rounded-md
                    outline-none
                    text-left
                    border-2 border-teal-400
                    hover:ring-4 hover:ring-teal-100
                    text-[18px]
                "
                name=""
                id=""
                cols="35"
                rows="20"
                readonly
                :value="viewPost.data"
            >
                {{ viewPost.data }}
            </p>
            <!-- <pre>{{ viewPost }}</pre> -->
        </div>
    </div>
</template>

<script setup>
// import NavBar from "@/components/NavBar.vue";
import { useStore } from "@/store/store";
// ------------------------------------------- //

const store = useStore();
const { viewPost } = store;
</script>
<style lang="scss" scoped>
nav {
    height: 80px;
}
button {
    border-radius: 50%;
    width: 40px;
    height: 40px;
}

button:hover {
    background-color: rgb(145, 228, 228);
    transition: all 0.2s ease;
}
.data {
    text-indent: 10px;
}
.data::first-letter {
    font-size: 200%;
    color: rgb(30, 228, 228);
}
</style>