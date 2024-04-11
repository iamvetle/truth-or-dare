<template>
  <div>
    <button class="text-sm" @click="$emit('switchLanguage')">
      Language:
      <span class="hover:cursor-pointer text-sm">{{
        language
      }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    language: string;
  }>(),
  {
    language: "english",
  }
);

defineEmits(["switchLanguage"])

</script>
