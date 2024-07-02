<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <RouterLink class="characters_btn" :to="{name: 'characters'}">Characters</RouterLink>
</template>

<style lang="scss" scoped>

.characters_btn
{background-color: hsla(0, 0%, 100%, 1);
  background-image:
    radial-gradient(at 44% 100%, hsla(39, 76%, 76%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 0%, rgb(204, 204, 5) 0px, transparent 50%),
    radial-gradient(at 90% 53%, hsla(266, 100%, 77%, 1) 0px, transparent 50%),
    radial-gradient(at 1% 82%, hsla(15, 100%, 54%, 1) 0px, transparent 50%),
    radial-gradient(at 83% 100%, hsla(323, 100%, 50%, 1) 0px, transparent 50%),
    radial-gradient(at 51% 41%, hsla(108, 100%, 50%, 1) 0px, transparent 50%),
    radial-gradient(at 59% 85%, hsla(237, 100%, 63%, 1) 0px, transparent 50%),
    radial-gradient(at 91% 13%, hsla(235, 100%, 50%, 1) 0px, transparent 50%);
    border: none;
    outline: none;
    padding: 20px 30px;
    border-radius: 5px;
    font-weight: var(--fw-bold);
    font-size: 18px;
    cursor: pointer;
    color: var(--dark);
}
</style>