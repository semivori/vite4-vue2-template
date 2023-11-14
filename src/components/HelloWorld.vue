<script setup>
import {ref, onMounted} from 'vue'

// reactive state
const count = ref(0)
const msg = ref('hello')
const test = ref('test')
const test2 = ref('test2')

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <div>
    {{ msg }}
    <br>
    {{test2}}
    <br>
    <span style="color: red;">
          test hmr 2
        </span>
    <br>
    <button @click="increment">Count is: {{ count }}</button>
  </div>
</template>
