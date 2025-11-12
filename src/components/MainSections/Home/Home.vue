<template>
    <section class="flex flex-col justify-center">
        <Hero/>
        <Feature/>
    </section>
</template>
<script lang="ts">
import Feature from './Feature/Feature.vue';
import Hero from './Hero/Hero.vue';
    export default{
        components:{
            Hero,
            Feature
        }
    }
</script>