<template>
        <button 
        data-testid="truth-choice-button-test"
        id="truth-choice-button"
        @click="$emit('truth')"
        class=""
        >{{ label }}</button>
</template>

<script setup lang='ts'>

withDefaults(defineProps<{
    label:string
}>(), {
    label:"Truth"
});

defineEmits(["truth"])

</script>