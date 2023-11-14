<script setup>
import {ref} from 'vue';

const items = ref([])
const searchText = ref('')

function search() {
  fetch(`https://api.github.com/search/repositories?q=${searchText.value}`)
    .then(res => res.json())
    .then(res => {
      items.value = res.items
    })
}

</script>

<template>
  <div>
    <div>
      <input type="text" v-model="searchText">
      <button @click="search">Search</button>
    </div>
    <div>
      <ul>
        <li v-for="item in items" :key="item.id">
          {{item.name}}
        </li>
      </ul>
    </div>
  </div>
</template>