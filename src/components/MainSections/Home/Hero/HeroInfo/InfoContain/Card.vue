<template>
    <article
        role="listitem"
        v-for="(item,index) in formattedCardList"
        :key="index"
        class="bg-grey-10 border-grey-15 border border-solid flex-1 h-30 flex flex-col items-center justify-center text-start rounded-xl"
    >
        <div class="flex flex-col gap-0.5">
            <p class="text-[40px] text-white font-bold">{{item.formattedCount}}+</p>
            <p class="text-lg text-grey-60 font-medium">{{item.name}}</p>
        </div>
    </article>
</template>
<script lang="ts">
    interface ListCard {
        count: number,
        name: string
    }
    interface FormattedListCard extends ListCard {
        formattedCount: string;
    }
    export default{
        props:{
            cardList:{
                type:Array as () => ListCard[],
                required:true
            }
        },
        computed: {
            formattedCardList(): FormattedListCard[] {
                return this.cardList.map(item => ({
                    ...item,
                    formattedCount: this.formatNumber(item.count)
                }))
            }
        },
        methods: {
            formatNumber(count: number): string {
                if (count >= 1000) {
                    return (count / 1000).toFixed(0) + 'k'
                }
                return count.toString()
            }
        }
    }
</script>