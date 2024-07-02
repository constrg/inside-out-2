<script setup>
import { RouterLink } from 'vue-router';
import inside_out_2_logo from '/inside_out_2_logo.png';
import { onMounted, ref } from 'vue';

const isHamburgerMenuBtnActive = ref(false);
const isNavListActive = ref(false);
const isLogoActive = ref(false)

const navMenuActive = () => {
    isHamburgerMenuBtnActive.value = !isNavListActive.value;
    isNavListActive.value = !isNavListActive.value;
    isLogoActive.value = !isLogoActive.value;
    document.body.classList.toggle('overflow-hidden')
}

const resetActiveState = () => {
    isHamburgerMenuBtnActive.value = false;
    isNavListActive.value = false;
    isLogoActive.value = false;
    document.body.classList.remove('overflow-hidden')
}

onMounted(() => {
    window.addEventListener('resize', () => {
        if (window.innerWidth > 748) {
            isHamburgerMenuBtnActive.value = false;
            isNavListActive.value = false;
            isLogoActive.value = false;
        }
    })
})

</script>
<template>
    <nav class="nav">
        <div class="container">
            <div class="nav_content">
            <RouterLink to="/" class="inside_out_2_logo_link"><img :src="inside_out_2_logo" class="inside_out_2_logo" :class="{'inside_out_2_logo_active' : isLogoActive}" alt="inside_out_2_logo"></RouterLink>
            <ul class="nav_list"  :class="{'nav_list_active': isNavListActive}">
                <RouterLink :to="{name: 'home'}" class="nav_item" @click="resetActiveState">Home</RouterLink>
                <RouterLink :to="{name: 'about'}" class="nav_item"  @click="resetActiveState">About</RouterLink>
                <a href="https://github.com/constrg/inside-out-2" target="_blank" class="nav_item">Source Code</a>
            </ul>
            <div class="hamburger_menu_btn" @click="navMenuActive" :class="{'hamburger_menu_btn_active': isHamburgerMenuBtnActive}">
                <span class="hamburger_menu_btn_line"></span>
                <span class="hamburger_menu_btn_line"></span>
                <span class="hamburger_menu_btn_line"></span>
            </div>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.nav 
{
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 99;
    
    .nav_content
    {
        display: flex;
        justify-content: space-between;
        align-items: center;
        column-gap: 20px;
        padding-block: 20px;

        .inside_out_2_logo_link 
        {
            z-index: 999;
            .inside_out_2_logo
            {
                max-width: 150px;
                &.inside_out_2_logo_active {
                    filter: invert(100%);
                }
            }
        }
        
        .nav_list 
        {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;

            .nav_item 
            {
                color: var(--light);
            }

            
        }

        .hamburger_menu_btn
        {
            display: none
        }
    }
}

@media (max-width: 748px) {
    .nav 
    {
        .nav_content 
        {
            .nav_list
            {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: var(--light);
                flex-direction: column;

                .nav_item {
                    color: var(--dark)
                }
                
                &.nav_list_active 
                {
                    display: flex;
                }
            }

        .hamburger_menu_btn
        {
            display: block;
            position: relative;

            .hamburger_menu_btn_line
            {
                background-color: var(--light);
                width: 50px;
                height: 3px;
                display: block;
                margin-bottom: 10px;
                transition: all .3s;

                &:last-child
                {
                    margin-bottom: unset;
                }
                
            }
            
            &.hamburger_menu_btn_active
            {
                .hamburger_menu_btn_line
                {
                    background-color: var(--dark);
                    
                    &:first-child
                    {
                        position: absolute;
                        transform: rotate(45deg);
                        top: 0;
                    }
                    &:nth-child(2)
                    {
                        transform: rotate(45deg);
                    }
                    &:last-child
                    {
                        position: absolute;
                        transform: rotate(-45deg);
                        top: 0;
                    }
                }
            }
        }
        }       
    }
}
</style>