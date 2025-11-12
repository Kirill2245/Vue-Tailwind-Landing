<template>
    <article 
        class="flex flex-col justify-center items-center w-full flex-1 h-173 max-w-lg max-h-173 border border-grey-15 rounded-[10px] p-10 gap-7.5"
        role="listitem"
        v-for="(item,index) in listProduct"
        :key = "index"
    >
        <img :src="item.image" alt="product-image" class="rounded-[10px] max-w-108 h-auto">
        <header class="flex flex-col gap-1.5">
            <h3 class="text-2xl font-semibold ">{{item.header}}</h3>
            <p class="text-lg text-grey-60">{{item.body}}</p>
        </header>
        <div role = "group" class="flex w-full overflow-x-auto gap-2.5 " style="scrollbar-width: none; -ms-overflow-style: none;">
            <Tag :tags="item.tag"/>
        </div>
        <footer class="flex justify-between w-full">
            <div class="flex flex-col gap-0.5">
                <h4 class="text-lg text-grey-60">Price</h4>
                <p class="text-xl font-semibold">${{formatedPrice(item.price)}}</p>
            </div>
            <UIButton size = "custom2x">View Property Details</UIButton>
        </footer>
    </article>
</template>
<script lang="ts">
import { formatedPrice } from '../../../../../../lib/formatedFunction';
import Tag from './Tag.vue';

    interface tagCard{
        name:string,
        image:string
    }
    interface ProductCard{
        header:string,
        body:string,
        image:string,
        tag:tagCard[],
        price:number
    }
    export default{
        components:{
            Tag
        },
        data(){
            return{
                formatedPrice:formatedPrice
            }
        },
        props:{
            listProduct:{
                type:Array as () => ProductCard[],
                required:true
            }
        },
    }
</script>