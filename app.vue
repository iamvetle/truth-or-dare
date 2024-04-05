<template>
  <div>

    <h1>Truth or dare?</h1>
    <p>language ({{ language }})</p>
    <button @click="switchLanguage">Switch Language</button>

    <div class="buttons">
      <TruthButton />
      <DareButton />
    </div>
    <p v-if="theQuestion">question: {{ question }}</p>
    <!-- <pre>{{ theQuestion }}</pre> -->
  </div>
</template>

<script setup lang="ts">

type Question = {
  en:string,
  no:string
}
const theQuestion = useState<Question | null>("theQuestion", () => null)

// onMounted(() => {
  
// })

const language = ref<"en" | "no">("en")
const switchLanguage = () => {
  if (language.value === "en") {
    return language.value = "no"
  } 
  
  if (language.value === "no") {
    return language.value = "en"
  } 
}

const question = computed(() => {
  if (language.value === "en") {
    return theQuestion.value?.en
  }
  
  if (language.value === "no") {
    return theQuestion.value?.no
  }
})

</script>

<style scoped>

.buttons {
  display: flex;
}

</style>