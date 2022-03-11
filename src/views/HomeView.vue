<template>
    <nav-bar></nav-bar>
    <create-btn />
    <div class="relative mt-[120px]">
        <div class="">
            <div
                class="
                    post
                    bg-blue-100
                    rounded-md
                    shadow-md
                    m-4
                    p-4
                    hover:bg-gray-200
                "
                v-for="post in store.posts"
                :key="post.username"
                @click="postViewHandler(post)"
            >
                <p class="text-left text-[24px]">
                    <b>{{ post.username }}</b> -
                    <span class="text-[16px]"> {{ post.date }} </span>
                </p>
                <!-- <p class="text-left text-[14px]">{{ post.date }}</p> -->
                <p class="text-left text-ellipsis truncate ml-2">
                    {{ post.data }}
                </p>
                <!-- <p class="read-more hover:bg-rose-700">read more</p> -->
            </div>
            <!-- <button @click="store.count++">$patch {{ store.count }}</button>
            <h1>{{ store.secret }}</h1> -->
        </div>
    </div>
</template>


<script setup>
import NavBar from "@/components/NavBar.vue";
import CreateBtn from "@/components/CreateBtn.vue";

// ----------------------------------------- //
import { useStore } from "@/store/store";
// import { storeToRefs } from "pinia";
// import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

// ------------------------------------------- //
const store = useStore();
//  destructuring state from store
// const { users } = storeToRefs(store);
// let { viewPost } = storeToRefs(store);
//  destructuring action from store

const router = useRouter();

function postViewHandler(post) {
    console.log(router, post);
    const temp = { ...post };
    console.log("temp", temp);
    store.viewPost = temp;
    router.push({ name: "postView", params: temp });
}

// $patch

// function usingPatchIn() {
//     store.$patch({
//         count: store.count + 1,
//         name: "Ram",
//     });
// }
</script>


<style lang="scss">
.read-more {
    cursor: pointer;
}

.post {
    cursor: pointer;
}
</style>