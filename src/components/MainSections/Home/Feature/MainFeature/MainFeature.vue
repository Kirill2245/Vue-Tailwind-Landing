<template>
    <div class="flex flex-col justify-center items-center w-full max-w-[1596px]">
        <HeaderFeature :on-button-click="showAll" :flag="isShowingAll"/>
        <div role="list" aria-label="Featured properties list" class='w-full flex flex-wrap gap-7.5 items-center justify-center mb-12.5 '>
            <Card :list-product="displayedProducts"/>
        </div>
        <NavPanel 
            :count="totalPages" 
            :current-page="currentPage"
            @page-change="handlePageChange"
        />
    </div>
</template>

<script lang="ts">
    import Card from './Card/Card.vue';
    import HeaderFeature from './HeaderFeature.vue';
    import NavPanel from './NavPanel.vue';
    import ImageProd from '@assets/ImageProd.jpg';
    import ImageProd2 from '@assets/ImageProd2.jpg';
    import ImageProd3 from '@assets/ImageProd3.jpg';
    import IconTag1 from '@assets/IconTag1.svg'
    import IconTag2 from '@assets/IconTag2.svg'
    import IconTag3 from '@assets/IconTag3.svg'

    export default{
        components:{
            HeaderFeature,
            Card,
            NavPanel
        },
        data(){
            return{
                productList:[
                    {
                        header:'Seaside Serenity Villa',
                        body:'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood',
                        tag:[{image:IconTag1,name:'4-Bedroom'},{image:IconTag2,name:'3-Bathroom'},{image:IconTag3,name:'Villa'}],
                        price:550000,
                        image:ImageProd
                    },
                    {
                        header:'Seaside Serenity Villa',
                        body:'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood',
                        tag:[{image:IconTag1,name:'4-Bedroom'},{image:IconTag2,name:'2-Bathroom'},{image:IconTag3,name:'Villa'}],
                        price:550000,
                        image:ImageProd2
                    },
                    {
                        header:'Seaside Serenity Villa',
                        body:'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood',
                        tag:[{image:IconTag1,name:'1-Bedroom'},{image:IconTag3,name:'Villa'}],
                        price:550000,
                        image:ImageProd3
                    },
                    {
                        header:'Seaside Serenity Villa',
                        body:'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood',
                        tag:[{image:IconTag1,name:'4-Bedroom'}],
                        price:550000,
                        image:ImageProd
                    },
                    {
                        header:'Seaside Serenity Villa',
                        body:'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood',
                        tag:[{image:IconTag1,name:'4-Bedroom'}],
                        price:550000,
                        image:ImageProd
                    },
                    {
                        header:'Seaside Serenity Villa',
                        body:'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood',
                        tag:[{image:IconTag1,name:'4-Bedroom'}],
                        price:550000,
                        image:ImageProd
                    },
                    {
                        header:'Seaside Serenity Villa',
                        body:'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood',
                        tag:[{image:IconTag1,name:'4-Bedroom'}],
                        price:550000,
                        image:ImageProd
                    }
                ],
                screenWidth: window.innerWidth,
                currentPage: 1,
                itemsPerPage: 3,
                isShowingAll: false, 
                originalItemsPerPage: 3
            }
        },
        mounted() {
            window.addEventListener('resize', this.handleResize);
            this.updateItemsPerPage(); 
        },
        beforeUnmount() {
            window.removeEventListener('resize', this.handleResize);
        },
        computed: {
            itemsPerPageComputed() {
                if (this.screenWidth >= 1540) {
                    return 3;
                } else if (this.screenWidth >= 800) {
                    return 2;
                } else {
                    return 1;
                }
            },
            totalPages() {
                return Math.ceil(this.productList.length / this.itemsPerPage);
            },
            startIndex() {
                return (this.currentPage - 1) * this.itemsPerPage;
            },
            endIndex() {
                return this.startIndex + this.itemsPerPage;
            },
            displayedProducts() {
                if (this.isShowingAll) {
                    return this.productList;
                }
                return this.productList.slice(this.startIndex, this.endIndex);
            }
        },
        methods: {
            showAll(){
                if(this.isShowingAll){
                    this.showLess()
                }
                else{
                    this.isShowingAll = true;
                    this.itemsPerPage = this.productList.length;
                }
            },
            handleResize() {
                this.screenWidth = window.innerWidth;
                this.updateItemsPerPage();
            },
            updateItemsPerPage() {
                if (!this.isShowingAll) {
                    this.itemsPerPage = this.itemsPerPageComputed;
                    this.originalItemsPerPage = this.itemsPerPage;
                    
                    if (this.currentPage > this.totalPages) {
                        this.currentPage = this.totalPages || 1;
                    }
                }
            },
            showLess(){
                this.isShowingAll = false;
                this.itemsPerPage = this.originalItemsPerPage;
                this.currentPage = 1;
            },
            toggleShowAll(){
                if (this.isShowingAll) {
                    this.showLess();
                } else {
                    this.showAll();
                }
            },
            handlePageChange(newPage: number) {
                if (newPage >= 1 && newPage <= this.totalPages) {
                    this.currentPage = newPage;
                }
            },
            nextPage() {
                if (this.currentPage < this.totalPages) {
                    this.currentPage++;
                }
            },
            prevPage() {
                if (this.currentPage > 1) {
                    this.currentPage--;
                }
            }
        }
    }
</script>
                