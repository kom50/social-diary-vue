<template>
    <router-link
        to="/createpost"
        class="
            create-btn
            rounded-full
            bg-white
            border-2 border-teal-500
            text-teal-500
            hover:ring-8 hover:ring-teal-200 hover:bg-teal-500 hover:text-white
        "
    >
        <i class="bi bi-plus-lg"></i>
    </router-link>
</template>


<script>
// fetch(url, {
//     method:"POST",
//     data:
// })
</script>

<style lang="css">
.create-btn {
    width: 50px;
    height: 50px;
    font-size: 32px;
    transition: all 0.2s linear;
    position: fixed;
    bottom: 15px;
    z-index: 5;
}
</style>