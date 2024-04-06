<template>
        <button @click="$emit('back')">Back</button>
</template>

<script setup lang='ts'>

defineEmits(["back"])

</script>