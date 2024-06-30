<script setup>
import characters from '../data/characters.json'

</script>
<template>
    <div class="characters">
        <div class="container">
            <div class="characters_content">
                <h1 class="characters_title">Characters</h1>
                    <div class="characters_list">
                    <ul v-for="character in characters" :key="character.id">
                        <div class="character_item" to="/character_info">
                            <li class="character_name">{{ character.character_name }}</li>
                            <img class="character_img" :src="character.img" alt="character_img">
                            <div class="bg-box"></div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.characters 
{
    .characters_content 
    {
        padding-block: 150px;
        text-align: center;

        .characters_title
        {
            font-size: 40px;
            margin-bottom: 50px;
            color: var(--light);
        }

        .characters_list
        {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 60px 30px;
            justify-content: center;
            align-items: center;

            .character_item
            {
                position: relative;
                .bg-box
                {
                    clip-path: polygon(10% 8%, 98% 4%, 87% 100%, 4% 95%);
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    margin-top: 20px;
                    top: 0;
                    z-index: -1;
                    background: rgba( 255, 255, 255, 0.3 );
                    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
                    backdrop-filter: blur( 14px );
                    -webkit-backdrop-filter: blur( 10px );
                    border-radius: 10px;
                    border: 1px solid rgba( 255, 255, 255, 0.20 );
                }

                .character_img 
                {
                    max-width: 200px;
                    transition: all .3s;

                    &:hover 
                    {
                        transform: scale(1.1);
                        filter: drop-shadow(5px 9px 10px rgba(0,0,0,0.5));
                    }
                }
                .character_name 
                {
                    font-size: 24px;
                    font-weight: var(fw-bold);
                    color: var(--light);
                }
            }
        }
    }
}

@media (max-width: 748px){
    .characters 
    {
        .characters_content
        {
            .characters_list
            {
                grid-template-columns: 1fr;
            }
        }
    }
}
</style>