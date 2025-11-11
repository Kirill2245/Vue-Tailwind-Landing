<template>
    <section class="w-full flex flex-col">
        <HeroInfo/>
    </section>
</template>
<script lang="ts">
    import image from '../../../../assets/Image.png'
    import HeroInfo from './HeroInfo/HeroInfo.vue';
    export default{
        data(){
            return {
                img:image
            }
        },
        components:{
            HeroInfo
        }
    }
</script>