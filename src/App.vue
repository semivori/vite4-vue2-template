<script setup>
import HelloWorld from './components/HelloWorld.vue';
import Tree from "@/components/Tree.vue";
</script>

<template>
  <div id="app">
    <header>
      <div class="wrapper">
        <HelloWorld msg="You did it!" />
      </div>
    </header>
    <Tree/>
  </div>
</template>
