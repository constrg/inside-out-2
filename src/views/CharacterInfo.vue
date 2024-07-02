<script setup>
import { ref, watch } from 'vue'
import characters_data from '../data/characters_data.json'
const { id } = defineProps(['id'])

const character_info = ref(characters_data.find(c => c.id === Number(id)))

watch(() => id, (newId) => {
    character_info.value = characters_data.find(c => c.id === Number(newId))
})

</script>
<template>
    <div class="character_info">
        <div class="container">
            <div class="character_info_content">
                <div class="character_info_item">
                    <h1 class="character_info_title">Character Info</h1>
                    <h1 class="character_info_name"> {{ character_info.name }}</h1>
                    <img class="character_info_img" :src="character_info.img" alt="character_info_img"
                        data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                    <p class="character_info_description" data-aos="fade-in" data-aos-duration="1000"
                        data-aos-once="true">{{
                            character_info.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.character_info {
    .character_info_content {
        padding-block: 150px;
        text-align: center;
        color: var(--light);

        .character_info_title {
            font-size: 40px;
            margin-bottom: 50px;
        }

        .character_info_item {
            .character_info_img {
                max-width: 200px;
                margin-bottom: 20px;
            }

            .character_info_description {
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
            }
        }
    }
}
</style>