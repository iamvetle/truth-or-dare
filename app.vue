<template>
  <div class="bg-gray-50 w-full min-h-screen pt-12 px-2">

    <div class="flex flex-col mx-auto w-full sm:w-[600px] border">

      <div class="space-y-2">
        <h1 class="text-3xl">Truth or dare?</h1>
        <div class="flex justify-between">
          <button
          class="text-sm"
          @click="switchLanguage">Switch Language</button>
          <span class="text-sm">{{ languageText }}</span>
        </div>
      </div>

      <div class="mt-8">

        <div class="flex space-x-2 mt-4 text-sm">
          <BackButton @back="backToQuestion" 
          class="p-1 bg-gray-200 rounded-md shadow-sm" 
          />

          <ForwardButton 
          @forward="forwardToQuestion" 
          class="p-1 bg-gray-200 rounded-md shadow-sm"
          />
        </div>

        <div class="mt-8">
          <!-- <p>{{ mode }}</p> -->
          <p>question:</p>
          <p v-if="theQuestion" class="break-words">{{ questionText }}</p>
        </div>


        <div class="buttons mt-12 flex justify-between">
          <TruthButton class="py-2 px-3 rounded-md shadow-md bg-gray-200"/>
          <DareButton class="py-2 px-3 rounded-md shadow-md bg-gray-200"/>
        </div>

      </div><!-- <pre>{{ theQuestion }}</pre> -->
    </div>
  </div>

</template>

<script setup lang="ts">

type Question = {
  en: string,
  no: string
}

// current question
const theQuestion = useState<Question | null>("theQuestion", () => null)

// earlier questions
const backQuestions = useState<Question[] | []>("backQuestions", () => [])

// questions to forward to
const forwardQuestions = useState<Question[] | []>("forwardQuestions", () => [])

const languageText = computed(() => language.value === "en" ? "English" : "Norsk")
const language = ref<"en" | "no">("en")
const switchLanguage = () => {
  if (language.value === "en") {
    return language.value = "no"
  }

  if (language.value === "no") {
    return language.value = "en"
  }
}

const questionText = computed(() => {
  if (language.value === "en") {
    return theQuestion.value?.en
  }

  if (language.value === "no") {
    return theQuestion.value?.no
  }
})

const backToQuestion = () => {

  if (backQuestions.value.length > 0) {

    // Updates the "forward" questions
    //@ts-ignore
    forwardQuestions.value.push(theQuestion.value)

    // Removes an earlier question and assigns it to current question
    theQuestion.value = backQuestions.value.pop() as Question
  }
}



const forwardToQuestion = () => {

  if (forwardQuestions.value.length > 0) {

    const forwardQuestion = forwardQuestions.value.pop() as Question
    // updates the earlier questions
    //@ts-ignore
    backQuestions.value.push(theQuestion.value)

    // updates the current question
    theQuestion.value = forwardQuestion


  }
}

</script>

<style scoped>
.buttons {
  display: flex;
}
</style>