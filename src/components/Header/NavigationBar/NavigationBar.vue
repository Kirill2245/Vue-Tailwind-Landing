<template>
    <section class="w-full flex justify-between items-center px-40.5  h-24.75">
        <div class="flex gap-2.5 items-center">
            <img :src="symbol" alt="logo" class="w-12 h-12">
            <h1 class="font-bold text-2xl">Estatein</h1>
        </div>
        <NavMenu/>
        <UIButton variant="contact_btn" size = "lg"> Contact Us</UIButton > 
    </section>
</template>
<script>
import Symbol from '../../../assets/Symbol.svg'
import NavMenu from './NavMenu/NavMenu.vue';
    export default{
        components:{
            NavMenu
        },
        data(){
            return {
                symbol:Symbol
            }
        }
    }
</script>