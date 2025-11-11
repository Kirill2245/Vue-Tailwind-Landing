<template>
  <main>
    <component :is="components[$parent.activeComponentIndex]" />
  </main>
</template>

<script>
    import Home from '../MainSections/Home/Home.vue';
    import AboutUs from '../MainSections/AboutUs/AboutUs.vue';
    import Services from '../MainSections/Services/Services.vue';
    import Properties from '../MainSections/Properties/Properties.vue';

    export default {
    components: {
        Home,
        AboutUs,
        Services,
        Properties
    },
    data() {
        return {
            components: ['Home', 'AboutUs', 'Properties', 'Services']
        }
    }
    }
</script>