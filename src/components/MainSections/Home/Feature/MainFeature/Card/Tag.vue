<template>
    <div
        v-for="(item,index) in tags"
        :key="index"
        class="flex gap-1 px-3.5 py-2 rounded-[28px] bg-grey-10 border border-grey-15 shrink-0 h-10.75"
    >
        <img :src="item.image" alt="">
        <p>{{item.name}}</p>
    </div>
</template>
<script lang="ts">
    interface tagCard{
        name:string,
        image:string
    }
    export default{
        props:{
            tags:{
                type:Array as () => tagCard[],
                required:true
            }
        }
    }
</script>