<template>
    <button 
    id="dare-choice-button"
    data-testid="dare-choice-button-test"
    @click="$emit('dare')" class="">{{ label }}</button>
</template>

<script setup lang='ts'>

withDefaults(defineProps<{
    label:string
}>(), {
    label:"Dare"
});

defineEmits(["dare"])

</script>