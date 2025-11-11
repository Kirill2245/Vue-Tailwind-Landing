<template>
    <article
        class="flex justify-between w-full bg-grey-10 p-5 h-53 rounded-xl relative border border-grey-15 border-solid"  
        role="listitem"
        v-for="(item, index) in cardList"
        :key="index"
    >
        <div class="flex flex-col gap-5 justify-center items-center w-full text-center">
            <img :src="item.image" alt="" class="w-20.5 h-20.5">
            <p class="text-xl font-semibold">{{item.name}}</p>
        </div>
        <img :src="arrow" alt="" class="w-8.5 h-8.5 absolute left-[calc(100%-54px)]">
    </article>
</template>=
<script lang="ts">
import arrow from '@assets/arrow.svg'
    interface CardList{
        name:string,
        image:string
    }
    export default{
        props:{
            cardList:{
                type:Array as () => CardList[],
                required:true
            }
        },
        data(){
            return{
                arrow:arrow
            }
        }
    }
</script>