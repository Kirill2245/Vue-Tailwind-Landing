<template>
    <section class="flex w-full bg-grey-08 gap-20 relative">
        <InfoContain/>
        <img :src="img" alt="ilustration" aria-hidden="true" class="h-203.5 flex-1 max-w-1/2 object-cover"></img>
        <SubContiner/>
    </section>
</template>=
<script lang="ts">
    import image from '../../../../../assets/Container.jpg'
    import InfoContain from './InfoContain/InfoContain.vue';
    import SubContiner from './SubContiner.vue';
    export default{
        components:{
            InfoContain,
            SubContiner
        },
        data(){
            return {
                img:image
            }
        }
    }
</script>