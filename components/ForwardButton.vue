<template>
        <button @click="$emit('forward')">forward</button>
</template>

<script setup lang='ts'>

defineEmits(["forward"])

</script>