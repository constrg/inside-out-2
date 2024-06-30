<script setup>
import inside_out_2_img1 from '../assets/images/inside_out_2_img1.jpg';
import inside_out_2_img2 from '../assets/images/inside_out_2_img2.jpg';
import inside_out_2_img3 from '../assets/images/inside_out_2_img3.jpg';
</script>
<template>
    <div class="about">
        <div class="container">
            <div class="about_content">
               <div class="about_text">
                <h1 class="about_title">About</h1>
                <p class="about_desc">Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions. Joy, Sadness, Anger, Fear and Disgust, who've long been running a successful operation by all accounts, aren't sure how to feel when Anxiety shows up. And it looks like she's not alone.</p>
               </div>
                <div class="images">
                    <img class="images_item" :src="inside_out_2_img1" alt="inside_out_img1">
                    <img class="images_item" :src="inside_out_2_img2" alt="inside_out_img2">
                    <img class="images_item" :src="inside_out_2_img3" alt="inside_out_img3">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.about {
    .about_content 
    {
        padding-block: 150px;
        color: var(--light);

        .about_text  
        {
            margin-bottom: 20px;
            .about_title
            {
                margin-bottom: 20px;
            }
        }

        .images
        {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            justify-content: center;
            gap: 20px;

            .images_item
            {
                height: 100%;
                border-radius: 20px;
            }
        }
    }
}

@media (max-width: 748px) {
    .about 
    {
        .about_content 
        {
            .images
            {
                grid-template-columns: 1fr;
            }
        }
    }
}
</style>