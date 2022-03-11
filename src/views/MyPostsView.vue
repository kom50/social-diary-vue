<template>
    <nav-bar></nav-bar>
    <create-btn />
    <div class="relative mt-[120px] mb-[10px]">
        <div class="posts bg-white">
            <div
                class="
                    post
                    bg-blue-100
                    rounded-md
                    shadow-md
                    m-2
                    p-4
                    hover:bg-gray-200
                    w-[250px]
                    h-[150px]
                    grid
                    place-content-center
                "
                v-for="post in store.user.posts"
                :key="post.username"
                @click="postViewHandler(post)"
            >
                <p class="text-left text-[24px]">
                    <b>{{ post.username }}</b> -
                    <span class="text-[16px]"> {{ post.date }} </span>
                </p>
                <p class="text-left text-ellipsis truncate ml-2">
                    {{ post.data }}
                </p>
            </div>
        </div>
    </div>
</template>


<script setup>
import NavBar from "@/components/NavBar.vue";
import CreateBtn from "@/components/CreateBtn.vue";

// ----------------------------------------- //
import { useStore } from "@/store/store";
import { useRouter } from "vue-router";

// ------------------------------------------- //
const store = useStore();

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
.posts {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 92%;
    margin: auto;
}

@media screen and(max-width:630px) {
    .post {
        width: 90%;
        margin: 10px auto;
    }
}
</style>