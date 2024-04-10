import { describe, expect, test, vi } from "vitest";
import app from "~/app.vue";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import { flushPromises } from "@vue/test-utils";
// import { mockNuxtImport } from '@nuxt/test-utils/runtime'
// import { useQuestions } from "../composables/useQuestions";

let mockRandomTruthQuestions = [
  {
    en: "What is your biggest fear, and why?",
    no: "Hva er din største frykt, og hvorfor?",
  },
  {
    en: "Have you ever cheated on a test or exam? How did you do it?",
    no: "Har du noen gang jukset på en prøve eller eksamen? Hvordan gjorde du det?",
  },
  {
    en: "What is the most embarrassing thing that has ever happened to you in public?",
    no: "Hva er det mest pinlige som har skjedd med deg offentlig?",
  }
];
const mockRandomDareQuestions = [
  {
    en: "Do your best impression of a celebrity and have everyone guess who it is.",
    no: "Gjør ditt beste inntrykk av en kjendis og la alle gjette hvem det er.",
  },
  {
    en: "Call a random number from your phone and sing 'Happy Birthday' to whoever answers.",
    no: "Ring et tilfeldig nummer fra telefonen din og syng 'Happy Birthday' til den som svarer.",
  },
  {
    en: "Wear socks on your hands for the next three rounds.",
    no: "Bruk sokker på hendene dine for de neste tre rundene.",
  }
];

// ! CORRECT IMPLEMENTATION OF MOCKING A COMPOSABLE - GOOD
vi.mock("../composables/useQuestions", async () => ({
  useQuestions: vi.fn().mockImplementation( async() => {
    const randomTruthQuestion = vi.fn(() => {
      const numOfQuestions = mockRandomTruthQuestions.length;

      const randomNumber = Math.floor(Math.random() * numOfQuestions);

      const randomQuestion = mockRandomTruthQuestions[randomNumber];
      mockRandomTruthQuestions.splice(randomNumber, 1);
      
      console.log(randomQuestion)
      return randomQuestion

    });

    const randomDareQuestion = vi.fn(() => {

      return {
        en: "What is dare question?",
        no: "Hva er dare spørsmål?",
      };
    });

    const fetchAllQuestions = vi.fn( async() => {
      return null;
    });

    return { randomTruthQuestion, randomDareQuestion, fetchAllQuestions };
  }),
}));

describe("testing the main app", async () => {
  
  test("Existence, and heading", async () => {
    const wrapper = await mountSuspended(app);
    const heading = wrapper.find("h1")
    expect(heading.text()).toMatchInlineSnapshot(`"Truth or dare?"`) 
  });

  test('Should render a button for the "truth" action', async () => {
    const wrapper = await mountSuspended(app);
    let button: any = wrapper.find("#truth-choice-button");
    expect(button.text()).toMatchInlineSnapshot(`"Truth"`);
    button = wrapper.get("#truth-choice-button");
    expect(button.element.tagName).toBe("BUTTON");
  });

  test('Should render a button for the "dare" action', async () => {
    const wrapper = await mountSuspended(app);
    let button: any = wrapper.find("#dare-choice-button");
    expect(button.text()).toMatchInlineSnapshot(`"Dare"`);
    button = wrapper.get("#dare-choice-button");
    expect(button.element.tagName).toBe("BUTTON");
  });

  test("Should render a forward button for the forward action", async () => {
    const wrapper = await mountSuspended(app);
    let button: any = wrapper.find("#forward-button");
    expect(button.text()).toMatchInlineSnapshot(`"Forward"`);
    button = wrapper.get("#forward-button");
    expect(button.element.tagName).toBe("BUTTON");
  });

  test("Should render a back button for the back action", async () => {
    const wrapper = await mountSuspended(app);
    let button: any = wrapper.find("#back-button");
    expect(button.text()).toMatchInlineSnapshot(`"Back"`);
    button = wrapper.get("#back-button");
    expect(button.element.tagName).toBe("BUTTON");
  });

  test('Should have an initial truth question when mounted', async () => {
    const wrapper = await mountSuspended(app);
    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
      <link rel="manifest" href="/site.webmanifest">
      <div class="bg-[#F0EDCC] w-full min-h-screen pt-12 px-2 flex flex-col mx-auto">
        <!-- <SpeedInsights /> -->
        <div class="space-y-2 w-fit mx-auto">
          <h1 class="text-3xl text-[#02343F] text-center font-bold"> Truth or dare? </h1>
          <div></div>
        </div>
        <div class="max-w-96 mx-auto mt-10 flex flex-col w-full justify-center">
          <div class="flex justify-between">
            <!-- TODO - Make it so I can ask the questions in norwegian too -->
            <!-- <Language :language="languageText" class="flex mb-2" @switch-language="switchLanguage" /> -->
            <!-- <span>{{ mode }}</span> -->
          </div>
          <div class="flex bg-white rounded-lg flex items-center justify-start min-h-64 w-full px-4" id="questionP" delay="200">
            <!-- <p>{{ mode }}</p> -->
            <p class="flex text-center mx-auto text-lg">...</p>
          </div> <!-- <p v-if="theQuestion" class="break-words">{{ questionText }}</p> -->
          <div class="text-[#02343F] flex justify-between space-x-2 mt-7 text-sm"><button id="back-button" class="flex space-x-1 items-center"><svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 9C14 7.9 13.1 7 12 7C10.9 7 10 7.9 10 9C10 10.1 10.9 11 12 11C13.1 11 14 10.1 14 9ZM12 0C7.03 0 3 4.03 3 9H0L4 13L8 9H5C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9C19 12.87 15.87 16 12 16C10.49 16 9.09 15.51 7.94 14.7L6.52 16.14C8.04 17.3 9.94 18 12 18C16.97 18 21 13.97 21 9C21 4.03 16.97 0 12 0Z" fill="#02343F"></path>
              </svg><span>Back</span></button><button id="forward-button" class="flex space-x-1 items-center"><span>Forward</span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9H12.17L7.29 13.88C6.9 14.27 6.9 14.91 7.29 15.3C7.68 15.69 8.31 15.69 8.7 15.3L15.29 8.71C15.68 8.32 15.68 7.69 15.29 7.3L8.71 0.700001C8.32 0.310001 7.69 0.310001 7.3 0.700001C6.91 1.09 6.91 1.72 7.3 2.11L12.17 7H1C0.45 7 0 7.45 0 8C0 8.55 0.45 9 1 9Z" fill="#02343F"></path>
              </svg></button></div>
          <div class="mb-56 mt-14 flex justify-between space-x-2"><button id="truth-choice-button" class="font-medium text-[#50586C] bg-[#DCE2F0] max-w-40 w-full h-16 rounded-md shadow-sm">Truth</button><button id="dare-choice-button" class="font-medium text-[#9000FF] bg-[#FFE8F5] max-w-40 w-full h-16 rounded-md shadow-sm">Dare</button></div>
        </div><!-- <pre>{{ theQuestion }}</pre> -->
      </div>"
    `)
    console.log(wrapper.html())

    
    // Bad testing
    const questionP = wrapper.find("#questionP")
    expect(questionP.html()).not.toContain("...")


  })
});
