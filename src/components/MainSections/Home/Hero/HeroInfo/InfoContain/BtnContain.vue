<template>
    <div class="flex gap-5 " aria-label="Viewing Tools" role="toolbar">
        <UIButton
            :variant="index === 0 ? 'nav_btn' : 'primary'" 
            v-for = "(item,index) in ListBtn"
            size = "custom"
            :key="index"
            :aria-label="`${item.name}`"
        >
        {{item.name}}
        </UIButton>
    </div>
</template>
<script lang="ts">
    interface ListButton {
        name: string;
    }
    export default{
        props:{
            ListBtn:{
                type:Array as () => ListButton[],
                required: true
            }
        },

    }
</script>