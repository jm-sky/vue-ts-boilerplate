<script setup lang="ts">
import { ComboboxItem, useForwardPropsEmits } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import type { ComboboxItemEmits, ComboboxItemProps } from 'radix-vue'

const props = defineProps<ComboboxItemProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<ComboboxItemEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props // eslint-disable-line @typescript-eslint/no-unused-vars

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ComboboxItem
    v-bind="forwarded"
    :class="cn('relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden data-highlighted:bg-accent data-disabled:pointer-events-none data-disabled:opacity-50', props.class)"
  >
    <slot />
  </ComboboxItem>
</template>
