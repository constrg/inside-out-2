<script setup>
import { RouterLink } from 'vue-router';
const { character } = defineProps(["character"])
</script>

<template>
    <RouterLink :to="{ name: 'character_info', params: { id: character.id } }">
        <div class="character_item" data-aos="flip-right" data-aos-duration="1000" data-aos-once="true">
            <h1 class="character_name">{{ character.name }}</h1>
            <img class="character_img" :src="character.img" alt="character_img">
            <div class="bg-box"></div>
        </div>
    </RouterLink>
</template>


<style lang="scss" scoped>
.character_item {
    position: relative;
    cursor: pointer;

    .bg-box {
        clip-path: polygon(10% 8%, 98% 4%, 87% 100%, 4% 95%);
        position: absolute;
        height: 100%;
        width: 100%;
        margin-top: 20px;
        top: 0;
        z-index: -1;
        background: rgba(255, 255, 255, 0.3);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(10px);
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.20);
    }

    .character_img {
        max-width: 200px;
        transition: all .3s;

        &:hover {
            transform: scale(1.1);
            filter: drop-shadow(5px 9px 10px rgba(0, 0, 0, 0.5));
        }
    }

    .character_name {
        font-size: 24px;
        font-weight: var(fw-bold);
        color: var(--light);
    }
}
</style>