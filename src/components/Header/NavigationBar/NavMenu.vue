<template>
  <nav aria-label="Main navigation">
    <UIButton 
      :variant="index === activeButton ? 'nav_btn' : null" 
      size="lg" 
      v-for="(btn, index) in btnList" 
      :key="btn.id"
      @click="handleButtonClick(index)"
      :aria-label="`Navigate to ${btn.name} section`"
      role="menuitem"
    >
      {{ btn.name }}
    </UIButton>
  </nav>
</template>

<script lang="ts">
    interface NavButton {
        id: number;
        name: string;
    }
    export default{
        props: {
            btnList: {
              type: Array as () => NavButton[], 
              required: true
            }
        },
        inject: ['setActiveComponent'],
        data() {
            return {
              activeButton: 0 as number
            }
        },
        methods: {
            handleButtonClick(index: number): void {
            this.activeButton = index
            const setActiveComponent = this.setActiveComponent as (index: number) => void
                setActiveComponent(index)
            }
        }
    }
</script>