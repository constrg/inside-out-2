<script setup>
import CharactersButton from '../components/CharactersButton.vue';
import inside_out_2 from '../assets/images/inside_out_2.png';
</script>
<template>
    <div class="home">
        <div class="container">
            <div class="home_content">
                <img :src="inside_out_2" class="inside_out_2_img" alt="inside_out_2">
                <CharactersButton />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.home {


    .home_content {
        position: relative;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding-block: 100px;

        .inside_out_2_img {
            max-width: 400px;
            margin-bottom: 20px;
            animation: floating 5s ease-in-out infinite;

            @keyframes floating {
                0% {
                    transform: translateY(0);
                }

                50% {
                    transform: translateY(10px);
                }

                100% {
                    transform: translateY(0);
                }
            }
        }
    }
}
</style>