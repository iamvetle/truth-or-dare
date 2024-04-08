<template>
        <button class="flex space-x-1 items-center" @click="$emit('forward')"><span>Forward</span><ForwardSVGIcon/></button>
</template>

<script setup lang='ts'>

// TODO - Fix, there is a problem where I can go forward with the questions even though all the questions have run out

defineEmits(["forward"])

</script>