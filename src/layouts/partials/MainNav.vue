<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { cn } from '@/lib/utils';
</script>

<template>
  <nav
    class="main-nav"
    :class="cn('flex items-center space-x-4 lg:space-x-6 text-sm', $attrs.class ?? '')"
  >
    <RouterLink
      to="/"
      class="font-medium transition-colors hover:text-primary border-b-2 border-transparent hover:border-primary -mb-1 py-5 px-2"
      active-class="active"
    >
      Dashboard
    </RouterLink>
    <RouterLink
      to="/mailbox"
      class="font-medium transition-colors hover:text-primary border-b-2 border-transparent hover:border-primary -mb-1 py-5 px-2"
      active-class="active"
    >
      MailBox
    </RouterLink>
    <RouterLink
      to="/settings"
      class="font-medium transition-colors hover:text-primary border-b-2 border-transparent hover:border-primary -mb-1 py-5 px-2"
      active-class="active"
    >
      Settings
    </RouterLink>
  </nav>
</template>

<style>
.main-nav .active {
  @apply border-primary;
}
</style>
