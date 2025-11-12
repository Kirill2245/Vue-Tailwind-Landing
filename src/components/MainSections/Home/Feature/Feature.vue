<template>
    <section class="flex flex-col justify-center items-center pt-36.25 gap-2.5 px-3 " aria-labelledby="main-heading-feature" aria-describedby="description-heading-feature">
        <div class="w-full max-w-404">
            <img :src="img" alt="" class="w-17 h-7.5 " aria-hidden="true"></img>
        </div>
        <MainFeature/>
    </section>
</template>
<script lang="ts">
    import AbstractDesign1 from '@assets/AbstractDesign1.svg'
    import MainFeature from './MainFeature/MainFeature.vue';
    export default{
        components:{
            MainFeature
        },
        data(){
            return {
                img:AbstractDesign1
            }
        }
    }
</script>