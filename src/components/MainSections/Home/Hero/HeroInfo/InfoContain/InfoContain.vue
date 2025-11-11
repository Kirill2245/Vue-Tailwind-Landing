<template>
    <section class="flex bg-grey-08 flex-1 min-w-0 items-center pl-4" aria-labelledby="main-heading" aria-describedby="description-heading">
        <div class="flex flex-col gap-15 max-w-189.5 ml-auto">
            <InfoHeader/>
            <BtnContain :ListBtn="btnList"/>
            <div class="flex gap-5" role="list" aria-label="Company achievements and statistics">
                <Card :cardList = "cardList"/>
            </div>
        </div>
    </section>
</template>
<script lang="ts">
    import BtnContain from './BtnContain.vue';
    import Card from './Card.vue';
    import InfoHeader from './InfoHeader.vue';
    interface ListButton {
        name: string;
    }
    interface ListCard {
        count: number,
        name: string
    }
    export default{
        components:{
            BtnContain,
            InfoHeader,
            Card
        },
        data(){
            return{
                btnList:[{name:'Learn More'},{name:'Browse Properties'}] as ListButton[],
                cardList:[{count:200, name:'Happy Customers'},{count:10000, name:'Properties For Clients'},{count:16, name:'Years of Experience'}] as ListCard[]
            }
        }
    }
</script>