<script setup>
import { ref } from 'vue'
import characters_data from '../data/characters_data.json'
import CharacterCard from '../components/CharacterCard.vue'

const characters = ref(characters_data)

</script>
<template>
    <div class="characters">
        <div class="container">
            <div class="characters_content">
                <h1 class="characters_title">Characters</h1>
                <div class="characters_list">
                    <CharacterCard v-for="character in characters" :key="character.id" :character="character" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.characters {
    .characters_content {
        padding-block: 150px;
        text-align: center;

        .characters_title {
            font-size: 40px;
            margin-bottom: 50px;
            color: var(--light);
        }

        .characters_list {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 60px 30px;
            justify-content: center;
            align-items: center;


        }
    }
}

@media (max-width: 748px) {
    .characters {
        .characters_content {
            .characters_list {
                grid-template-columns: 1fr;
            }
        }
    }
}
</style>