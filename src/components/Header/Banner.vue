<template>
    <section 
        class="h-15.75 w-full relative flex items-center justify-center"
        role="banner"
        aria-label="Promotional offer"
    >
        <img 
            :src="abstractDesign" 
            alt="" 
            class="w-full h-15.75 object-cover"
            role="presentation"
            aria-hidden="true"
        >
        <div 
            class="absolute flex gap-1 px-9 w-full"
            role="group"
            aria-label="Banner content"
        >
            <p class="flex gap-2.5 text-lg font-medium mx-auto">
                <span aria-hidden="true">✨</span>
                <span class="sr-only">Special offer: </span>
                Discover Your Dream Property with Estatein
                <a 
                    href="https://www.figma.com/design/SJOUNqnvrTs3Yas5JUm7W2/Real-Estate-Business-Website-UI-Template---Dark-Theme-%7C-Produce-UI--Community-?node-id=46-304&t=cvM6mflKHPMJFuAZ-0" 
                    class="underline hover:no-underline transition-all"
                    aria-label="Learn more about our property discovery services"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                >
                    Learn More
                </a>
            </p>
            <button 
                class="bg-white/10 flex items-center justify-center rounded-[50%] w-8 h-8 hover:bg-white/20 transition-colors duration-200"
                aria-label="Close promotional banner"
            >
                <img 
                    :src="iconBtnClose" 
                    alt=""
                    aria-hidden="true"
                    class="w-4 h-4"
                >
            </button>
        </div>
    </section>
</template>
<script>
    import abstractDesign from '../../assets/AbstractDesign.svg'
    import iconBtnClose from '../../assets/IconBtnClose.svg'
    export default{
        data() {
            return {
                abstractDesign: abstractDesign,
                iconBtnClose:iconBtnClose
            }
        }
    }
</script>