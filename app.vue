<template>
  <Head>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
  </Head>

  <div
    class="bg-[#F0EDCC] w-full min-h-screen pt-12 px-2 flex flex-col mx-auto"
  >
    <!-- <SpeedInsights /> -->

    <div class="space-y-2 w-fit mx-auto">
      <h1 class="text-3xl text-[#02343F] text-center font-bold">
        Truth or dare?
      </h1>
      <div></div>
    </div>

    <div class="max-w-96 mx-auto mt-10 flex flex-col w-full justify-center">
      <div class="flex justify-between">
        <!-- TODO - Make it so I can ask the questions in norwegian too -->
        <!-- <Language :language="languageText" class="flex mb-2" @switch-language="switchLanguage" /> -->
        <!-- <span>{{ mode }}</span> -->
      </div>

      <TheQuestion
        :text="questionText"
        class="bg-white rounded-lg flex items-center justify-start min-h-64 w-full px-4"
        v-motion="slideAnimation"
        :delay="200"
        :key="questionText"
      />
      <!-- <p v-if="theQuestion" class="break-words">{{ questionText }}</p> -->

      <div class="text-[#02343F] flex justify-between space-x-2 mt-7 text-sm">
        <BackButton @back="backToQuestion" />
        <ForwardButton @forward="forwardToQuestion" />
      </div>

      <div class="mb-56 mt-14 flex justify-between space-x-2">
        <TruthButton
          :label="language === 'en' ? 'Truth' : 'Sannhet'"
          class="font-medium text-[#50586C] bg-[#DCE2F0] max-w-40 w-full h-16 rounded-md shadow-sm"
          @button-click="truthButtonClick"
        />
        <DareButton
          :label="language === 'en' ? 'Dare' : 'Nødt'"
          class="font-medium text-[#9000FF] bg-[#FFE8F5] max-w-40 w-full h-16 rounded-md shadow-sm"
          @button-click="dareButtonClick"
        />
      </div>
    </div>
    <!-- <pre>{{ theQuestion }}</pre> -->
  </div>
</template>

<script setup lang="ts">
import { slideVisibleLeft, slideVisibleRight } from "@vueuse/motion";
import { fetchDareQuestions } from "./utils/fetchDareQuestions";
import { fetchTruthQuestions } from "./utils/fetchTruthQuestions";
// import { SpeedInsights } from "@vercel/speed-insights/nuxt";

type Question = {
  en: string;
  no: string;
};

const allDareQuestions = ref<Question[] | []>([]);
const numOfDareQuestions = computed(() => allDareQuestions.value.length);

const allTruthQuestions = ref<Question[] | []>([]);
const numOfTruthQuestions = computed(() => allTruthQuestions.value.length);

const theQuestion = ref<Question | null>(null);
const backQuestions = ref<Question[] | []>([]);
const forwardQuestions = ref<Question[] | []>([]);
const mode = ref<"truth" | "dare">("truth");

const slideDirection = ref<"right" | "left">("right");

const slideAnimation = computed(() =>
  slideDirection.value === "right" ? slideVisibleRight : slideVisibleLeft
);

onMounted(async () => {
  allDareQuestions.value = await fetchDareQuestions();
  allTruthQuestions.value = await fetchTruthQuestions();

  console.log("app 91", allTruthQuestions.value)

  if (allTruthQuestions.value.length > 1) {
    console.log("api 94", allTruthQuestions.value)
    console.log("api 98", theQuestion.value);


    theQuestion.value = randomTruthQuestion();
    console.log("api 97", theQuestion.value);
    
  }

});

const truthButtonClick = () => {
  const question = randomTruthQuestion();

  console.log(question)

  if (theQuestion.value != null) {
    slideDirection.value = "left";

    //@ts-ignore
    backQuestions.value.push(theQuestion.value);
  }
  theQuestion.value = question;

  mode.value = "truth";
};

const dareButtonClick = () => {
  const question = randomDareQuestion();

  if (theQuestion.value != null) {
    slideDirection.value = "right";

    //@ts-ignore
    backQuestions.value.push(theQuestion.value);
  }
  theQuestion.value = question;
  mode.value = "dare";
};

// TODO - Make it so I can ask the questions in norwegian too
// const languageText = computed(() =>
//   language.value === "en" ? "english" : "norsk"
// );
const language = ref<"en" | "no">("en");
// const switchLanguage = () => {
//   if (language.value === "en") {
//     return (language.value = "no");
//   }

//   if (language.value === "no") {
//     return (language.value = "en");
//   }
// };

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

function forwardToQuestion () {
  if (forwardQuestions.value.length > 0) {
    const forwardQuestion = forwardQuestions.value.pop() as Question;
    // updates the earlier questions
    //@ts-ignore
    backQuestions.value.push(theQuestion.value);

    // updates the current question
    theQuestion.value = forwardQuestion;
  }
};

function randomTruthQuestion () {
  // const response = await $fetch<Question[]>("/truthQuestions.json")

  const randomNumber = Math.floor(Math.random() * numOfTruthQuestions.value);

  const randomQuestion = allTruthQuestions.value[randomNumber];
  allTruthQuestions.value.splice(randomNumber, 1);

  // console.assert(truthQuestions.value.length > 0, "No new truth questions remaining")

  return randomQuestion;
};

const randomDareQuestion = () => {
  const randomNumber = Math.floor(Math.random() * numOfDareQuestions.value);

  const randomQuestion = allDareQuestions.value[randomNumber];
  allDareQuestions.value.splice(randomNumber, 1);

  // console.assert(dareQuestions.value.length > 0, "No new dare questions remaining" )

  return randomQuestion;
};
</script>
