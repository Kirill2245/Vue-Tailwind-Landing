
<template>
    <Header/>
    <Main/>
    <Footer/>
</template>
<script lang="ts">
    import Header from './components/Header/Header.vue';
    import Main from './components/Main/Main.vue';
    import Footer from './components/Footer/Footer.vue';
    export default {
        components:{
            Header,Main,Footer
        },
        data() {
            return {
                activeComponentIndex: 0 as number
            }
        },
        provide() {
            return {
                setActiveComponent: this.setActiveComponent
            }
        },
        methods: {
            setActiveComponent(index:number):void {
                this.activeComponentIndex = index
            }
        }
    }
</script>