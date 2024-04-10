<template>
    <div class="flex" id="questionP">
        <!-- <p>{{ mode }}</p> -->
        <p v-if="text" class="text-lg">{{ text }}</p>
        <p v-else class="flex text-center mx-auto text-lg">...</p>
    </div>
</template>

<script setup lang='ts'>

defineProps<{
    text:string | undefined;
}>();

</script>