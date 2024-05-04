import { describe, expect, test, vi } from "vitest";
import app from "~/app.vue";
import { mountSuspended, renderSuspended } from "@nuxt/test-utils/runtime";
import { screen, fireEvent } from "@testing-library/vue";

const mockRandomTruthQuestions = [
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
  },
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
  },
];


/**
 * mocked "fetchDareQuestions" returns a custom value  
 */
vi.mock("../utils/fetchDareQuestions", async () => ({
  fetchDareQuestions: vi.fn().mockImplementation(async () => {
    const fetchDareQuestions = vi.fn(() => {
      return mockRandomDareQuestions;
    });

    return { fetchDareQuestions };
  }),
}));

// ? I dont need this - so confused
// const mockedRandom = vi.fn().mockReturnValue({
//   en:"what is p",
//   no:"hva er p"
// });
// vi.stubGlobal("randomTruthQuestion", mockedRandom)

/**
 * mocked "fetchTruthQuestions" returns a custom value
 */
vi.mock("../utils/fetchTruthQuestions", async () => ({
  fetchTruthQuestions: vi.fn().mockImplementation(async () => {
    const fetchTruthQuestions = vi.fn(() => {
      return mockRandomTruthQuestions;
    });

    return { fetchTruthQuestions };
  }),
}));

describe("testing the main app", async () => {

  test("Existence, and heading", async () => {
    const wrapper = await mountSuspended(app);
    const heading = wrapper.find("h1");
    expect(heading.text()).toMatchInlineSnapshot(`"Truth or dare?"`);

    // ! This does NOT WORK - only on full page rendering with createPage()
    // ! because of using nuxt - which has server side rendering - not only vue
    // const questionP = wrapper.find("#questionP");
    // expect(questionP.html()).not.toContain("...");
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

  test("Testing with html renderSuspended", async () => {
    const html = await renderSuspended(app)

    expect((html).getAllByTestId("dare-choice-button-test")).toMatchInlineSnapshot(`
      [
        <button
          class="font-medium text-[#9000FF] bg-[#FFE8F5] max-w-40 w-full h-16 rounded-md shadow-sm"
          data-testid="dare-choice-button-test"
          id="dare-choice-button"
        >
          Dare
        </button>,
      ]
    `)
  })

  test("The dare button should create/get a new question/dare when clicked (with renderSuspended)", async () => {
    await renderSuspended(app)

    let questionP = screen.getByTestId("questionP-test")
    const questionPHTML = questionP.innerHTML
    console.log("before fireEvent", questionPHTML)

    const button = screen.getByTestId("dare-choice-button-test")
    await fireEvent.click(button)

    questionP = screen.getByTestId("questionP-test")
    console.log("after fireEvent", questionPHTML)
    expect(questionP).not.toContainEqual(questionPHTML)
  })

  test("The truth button should create/get a new question/truth when clicked (with renderSuspended)", async () => {
    await renderSuspended(app)

    let questionP = screen.getByTestId("questionP-test")
    const questionPHTML = questionP.innerHTML
    console.log("before fireEvent", questionPHTML)

    const button = screen.getByTestId("truth-choice-button-test")
    await fireEvent.click(button)

    questionP = screen.getByTestId("questionP-test")
    console.log("after fireEvent", questionPHTML)
    expect(questionP).not.toContainEqual(questionPHTML)
  })

  
});
