<script setup lang="ts">
import { CollapsibleRoot, useForwardPropsEmits } from 'reka-ui'
import type { CollapsibleRootEmits, CollapsibleRootProps } from 'reka-ui'

const props = defineProps<CollapsibleRootProps>()
const emits = defineEmits<CollapsibleRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <!-- eslint-disable vue/no-template-shadow -->
  <CollapsibleRoot
    v-slot="{ open }"
    data-slot="collapsible"
    v-bind="forwarded"
  >
    <slot :open />
  </CollapsibleRoot>
</template>
