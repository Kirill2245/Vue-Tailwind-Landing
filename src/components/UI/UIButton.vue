<template>
    <button
        :class="buttonClasses"
        :type="type"
        :disabled="disabled"
        @click="$emit('click', $event)"
    >
        <span v-if="$slots.iconLeft" class="flex items-center">
            <slot name="iconLeft" />
        </span>
        
        <slot />
        
        <span v-if="$slots.iconRight" class="flex items-center">
            <slot name="iconRight" />
        </span>
    </button>
</template>

<script lang="ts">
    import { defineComponent, computed } from 'vue'
    import type {PropType} from 'vue'

    type ButtonVariant = 'contact_btn' | 'primary' | 'nav_btn' |'view_btn'
    type ButtonSize = 'sm' | 'md' | 'lg' | 'xl' | 'custom' | 'custom2x'

    export default defineComponent({
        name: 'UIButton',
        props: {
            variant: {
                type: String as PropType<ButtonVariant>,
                default: 'primary',
                validator: (value: string): value is ButtonVariant => 
                    ['primary', 'contact_btn', 'nav_btn', 'view_btn'].includes(value)
            },
            size: {
                type: String as PropType<ButtonSize>,
                default: 'md',
                validator: (value: string): value is ButtonSize => 
                    ['sm', 'md', 'lg', 'xl', 'custom', 'custom2x'].includes(value)
            },
            disabled: {
                type: Boolean,
                default: false
            },
            loading: {
                type: Boolean,
                default: false
            },
            type: {
                type: String as PropType<'button' | 'submit' | 'reset'>,
                default: 'button'
            },
            fullWidth: {
                type: Boolean,
                default: false
            }
        },
        emits: ['click'],
        setup(props) {
            const buttonClasses = computed(() => {
                const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 '
                
                const sizeClasses: Record<ButtonSize, string> = {
                    sm: 'px-3 py-1.5 text-sm',
                    md: 'px-4 py-2 text-base',
                    lg: 'px-6 text-lg font-medium',
                    xl: 'px-8 py-4 text-xl ',
                    custom:'px-6 py-4.5 text-lg font-medium h-15.75',
                    custom2x:'px-13.5 py-4.5 text-lg font-medium h-15.75'
                }
                
                const variantClasses: Record<ButtonVariant, string> = {
                    primary: 'bg-purple-60 hover:bg-purple-70 text-white focus:ring-purple-60',
                    contact_btn:'bg-grey-08 border border-solid border-grey-15 py-4',
                    nav_btn:'bg-grey-08 border border-solid border-grey-15 py-3.5',
                    view_btn:'bg-grey-10 border border-solid border-grey-15'
                }
                
                const stateClasses = props.disabled 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:scale-105 active:scale-95'
                
                const widthClass = props.fullWidth ? 'w-full' : ''
                
                return [
                    baseClasses,
                    sizeClasses[props.size],
                    variantClasses[props.variant],
                    stateClasses,
                    widthClass
                ].join(' ')
            })

            return {
                buttonClasses
            }
        }
    })
</script>