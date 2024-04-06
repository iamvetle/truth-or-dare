<template>
  <div class="bg-[#F0EDCC] w-full min-h-screen pt-12 px-2">

    <div class="flex flex-col mx-auto w-full">

      <div class="space-y-2 w-fit mx-auto">
        <h1 class="text-3xl text-[#02343F] text-center font-bold">Truth or dare?</h1>
        <div>

        </div>
      </div>

      <div class="w-96 mx-auto mt-10">
        <Language
          :language="languageText"
          class="flex mb-2"
          @switch-language="switchLanguage"
          />
        <div class="mx-auto bg-white rounded-lg flex items-center justify-start h-64 w-full px-4">
          
            <!-- <p>{{ mode }}</p> -->
            <p v-if="questionText" class="text-lg">{{ questionText }}</p>
            <p v-else class="w-full text-center text-lg ">...</p>
            <!-- <p v-if="theQuestion" class="break-words">{{ questionText }}</p> -->
          </div>
        <div class="mt-2">
          <div class=" text-[#02343F] flex justify-between space-x-2 mt-7 text-sm">
            <BackButton @back="backToQuestion"
            />
            <ForwardButton

            @forward="forwardToQuestion"
            />
          </div>
          <div class="buttons mt-14 flex justify-between">
            <TruthButton
            :label="language === 'en' ? 'Truth' : 'Sannhet'"
            class="font-medium text-[#50586C] bg-[#DCE2F0] w-40 h-16 rounded-md shadow-sm"/>
            <DareButton
            :label="language === 'en' ? 'Dare' : 'Nødt'"
            class="font-medium text-[#9000FF] bg-[#FFE8F5] w-40 h-16 rounded-md shadow-sm "/>
          </div>
        </div><!-- <pre>{{ theQuestion }}</pre> -->
      </div>
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

const languageText = computed(() => language.value === "en" ? "english" : "norsk")
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