<template>
  <div class="bg-[#F0EDCC] w-full min-h-screen pt-12 px-2 flex flex-col mx-auto">
    <div class="space-y-2 w-fit mx-auto">
      <h1 class="text-3xl text-[#02343F] text-center font-bold">
        Truth or dare?
      </h1>
      <div></div>
    </div>

    <div class="max-w-96 mx-auto mt-10 flex flex-col flex-1 justify-between">
      <div>
        <Language :language="languageText" class="flex mb-2" @switch-language="switchLanguage" />


        <TheQuestion :text="questionText"
          class="mx-auto bg-white rounded-lg flex items-center justify-start h-64 w-full px-4" />

        <!-- <p v-if="theQuestion" class="break-words">{{ questionText }}</p> -->

        <div class="text-[#02343F] flex justify-between space-x-2 mt-7 text-sm">
          <BackButton @back="backToQuestion" />
          <ForwardButton @forward="forwardToQuestion" />
        </div>
      </div>

      <div class="mb-56 buttons mt-14 flex justify-between">
        <TruthButton :label="language === 'en' ? 'Truth' : 'Sannhet'"
          class="font-medium text-[#50586C] bg-[#DCE2F0] w-40 h-16 rounded-md shadow-sm"
          @buttonClick="truthButtonClick" />
        <DareButton :label="language === 'en' ? 'Dare' : 'Nødt'"
          class="font-medium text-[#9000FF] bg-[#FFE8F5] w-40 h-16 rounded-md shadow-sm"
          @button-click="dareButtonClick" />
      </div>
    </div>
    <!-- <pre>{{ theQuestion }}</pre> -->
  </div>
</template>

<script setup lang="ts">
type Question = {
  en: string;
  no: string;
};

const theQuestion = ref<Question | null>(null)
const backQuestions = ref<Question[] | []>([])
const forwardQuestions = ref<Question[] | []>([])
const mode = ref<"truth" | "dare">("truth")


const { randomTruthQuestion, randomDareQuestion } = await useQuestions()

const truthButtonClick = async () => {
  const question = await randomTruthQuestion()

  if (theQuestion.value != null) { //@ts-ignore
    backQuestions.value.push(theQuestion.value)
  }
  theQuestion.value = question

  mode.value = "truth"

}

const dareButtonClick = async () => {
  const question = await randomDareQuestion()

  if (theQuestion.value != null) { //@ts-ignore
    backQuestions.value.push(theQuestion.value)
  }
  theQuestion.value = question
  mode.value = "truth"
}

const languageText = computed(() =>
  language.value === "en" ? "english" : "norsk"
);
const language = ref<"en" | "no">("en");
const switchLanguage = () => {
  if (language.value === "en") {
    return (language.value = "no");
  }

  if (language.value === "no") {
    return (language.value = "en");
  }
};

const questionText = computed(() => {
  if (language.value === "en") {
    return theQuestion.value?.en;
  }
  if (language.value === "no") {
    return theQuestion.value?.no;
  }
});

const backToQuestion = () => {
  if (backQuestions.value.length > 0) {
    // Updates the "forward" questions
    //@ts-ignore
    forwardQuestions.value.push(theQuestion.value);

    // Removes an earlier question and assigns it to current question
    theQuestion.value = backQuestions.value.pop() as Question;
  }
};

const forwardToQuestion = () => {
  if (forwardQuestions.value.length > 0) {
    const forwardQuestion = forwardQuestions.value.pop() as Question;
    // updates the earlier questions
    //@ts-ignore
    backQuestions.value.push(theQuestion.value);

    // updates the current question
    theQuestion.value = forwardQuestion;
  }
};
</script>
