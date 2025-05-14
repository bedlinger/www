<template>
  <div class="bg-primary-100 ml-15">
    <h1>Hello, World!</h1>
    <h2>Welcome to your Vue.js app</h2>
    <h3>Using Vite and Vue 3</h3>
    <h4>With TypeScript support</h4>
    <h5>And Tailwind CSS for styling</h5>
    <h6>And PrimeVue for components</h6>
    <p>Hello, World!</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
      <li>Item 5</li>
      <li><a href="">test</a></li>
    </ul>
    <Button label="Submit" />
    <Icon icon="line-md:arrow-align-center" class="w-30 h-30" />
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
