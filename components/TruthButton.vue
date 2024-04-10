<template>
        <button 
        id="truth-choice-button"
        @click="$emit('buttonClick')"
        class=""
        >{{ label }}</button>
</template>

<script setup lang='ts'>

withDefaults(defineProps<{
    label:string
}>(), {
    label:"Truth"
});

defineEmits(["buttonClick"])

</script>