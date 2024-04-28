<template>
  <button 
    id="truth-choice-button"
    data-testid="truth-choice-button-test"
    class=""
    @click="$emit('truth')"
  >
    {{ label }}
  </button>
</template>

<script setup lang='ts'>

withDefaults(defineProps<{
    label:string
}>(), {
    label:"Truth"
});

defineEmits(["truth"])

</script>