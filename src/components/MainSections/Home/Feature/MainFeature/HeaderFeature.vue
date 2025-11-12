<template>
    <header class="flex justify-between items-end w-full mb-20">
        <div class="flex flex-col gap-3.5" role="group" aria-label="Заголовок и описание">
            <h2 class="text-5xl font-semibold" id ="main-heading-feature">Featured Properties</h2>
            <p class="text-lg max-w-300 text-grey-60" id = "description-heading-feature">Explore our handpicked selection of featured properties. 
                Each listing offers a glimpse into exceptional homes and investments 
                available through Estatein. Click "View Details" for more information.
            </p>
        </div>
        <UIButton size = "custom" variant='view_btn' aria-label="View All Properties" @click = "onButtonClick">{{flag ? 'Show Less': 'View All Properties'}}</UIButton>
    </header>
</template>
<script lang="ts">
    export default{
         props: {
            onButtonClick: {
                type: Function,
                required: true
            },
            flag:{
                type:Boolean,
                default:false
            }
        }
    }
</script>