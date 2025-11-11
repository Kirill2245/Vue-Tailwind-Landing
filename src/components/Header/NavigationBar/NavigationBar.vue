<template>
    <section class="w-full flex justify-between items-center px-40.5 h-24.75 border border-solid border-grey-15">
        <div class="flex gap-2.5 items-center">
            <img :src="symbol" alt="logo" class="w-12 h-12" >
            <h1 class="font-bold text-2xl">Estatein</h1>
        </div>
        <NavMenu :btnList = "navBtnList"/>
        <UIButton variant="contact_btn" size = "lg"  aria-label="Contact Estatein real estate agency"> Contact Us</UIButton > 
    </section>
</template>
<script lang="ts">
    import Symbol from '@assets/Symbol.svg'
    import NavMenu from './NavMenu.vue';
    export default{
        components:{
            NavMenu
        },
        data(){
            return {
                symbol:Symbol,
                navBtnList:[
                    {id:0, name:'Home'},
                    {id:1, name:'About Us'},
                    {id:2, name:'Properties'},
                    {id:3, name:'Services'}
                ]
            }
        }
    }
</script>