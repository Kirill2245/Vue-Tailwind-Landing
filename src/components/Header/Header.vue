<template>
    <header class="w-full h-40.5 flex flex-col bg-grey-10">
        <Banner/>
        <NavigationBar/>
    </header>
</template>
<script>
    import Banner from './Banner/Banner.vue'
    import NavigationBar from './NavigationBar/NavigationBar.vue';
    export default{
        components:{
            Banner, NavigationBar
        }
    }
</script>