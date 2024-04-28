<template>
  <button 
    id="dare-choice-button"
    data-testid="dare-choice-button-test"
    class=""
    @click="$emit('dare')"
  >
    {{ label }}
  </button>
</template>

<script setup lang='ts'>

withDefaults(defineProps<{
    label:string
}>(), {
    label:"Dare"
});

defineEmits(["dare"])

</script>