<template>
    <section class="w-full flex flex-col">
        <HeroInfo/>
        <HeroContainCard/>
    </section>
</template>
<script lang="ts">
    import image from '@assets/Container.jpg'
    import HeroContainCard from './HeroContainCard/HeroContainCard.vue';
    import HeroInfo from './HeroInfo/HeroInfo.vue';
    export default{
        data(){
            return {
                img:image
            }
        },
        components:{
            HeroInfo,
            HeroContainCard
        }
    }
</script>