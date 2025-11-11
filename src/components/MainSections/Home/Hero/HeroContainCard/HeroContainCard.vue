<template>
    <div class="flex w-full bg-grey-08 p-5 gap-5 border-8 border-solid border-grey-10" role="list" aria-label="Company achievements and statistics">
        <Card :card-list="cardList"/>
    </div>
</template>=
<script lang="ts">
    import Card from './Card.vue';
    import iconCard1 from '@assets/IconContainer1.svg'
    import iconCard2 from '@assets/IconContainer2.svg'
    import iconCard3 from '@assets/IconContainer3.svg'
    import iconCard4 from '@assets/IconContainer4.svg'
    export default{
        components:{
            Card
        },
        data(){
            return{
                cardList: [{name:'Find Your Dream Home',image:iconCard1},
                {name:'Unlock Property Value',image:iconCard2},
                {name:'Effortless Property Management',image:iconCard3},
                {name:'Smart Investments, Informed Decisions',image:iconCard4}]
            }
        }
    }
</script>