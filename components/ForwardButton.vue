<template>
        <button class="flex space-x-1 items-center" @click="$emit('forward')"><span>Forward</span><ForwardSVGIcon/></button>
</template>

<script setup lang='ts'>

defineEmits(["forward"])

</script>