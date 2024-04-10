<template>
        <button 
        id="back-button"
        class="flex space-x-1 items-center" @click="$emit('back')"><BackSVGIcon/><span>Back</span></button>
</template>

<script setup lang='ts'>

defineEmits(["back"])

</script>
