// import { describe, vi } from "vitest";
// import { createPage, setup, url } from "@nuxt/test-utils/e2e";
import { test, expect } from "@nuxt/test-utils/playwright";
import { fileURLToPath } from 'node:url';


// test.use({
// 	nuxt: {
// 	  rootDir: fileURLToPath(new URL('..', import.meta.url))
// 	}
//   })
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
// vi.mock("../utils/fetchDareQuestions", async () => ({
// 	fetchDareQuestions: vi.fn().mockImplementation(async () => {
// 		const fetchDareQuestions = vi.fn(() => {
// 			return mockRandomDareQuestions;
// 		});

// 		return { fetchDareQuestions };
// 	}),
// }));

// /**
//  * mocked "fetchTruthQuestions" returns a custom value
//  */
// vi.mock("../utils/fetchTruthQuestions", async () => ({
// 	fetchTruthQuestions: vi.fn().mockImplementation(async () => {
// 		const fetchTruthQuestions = vi.fn(() => {
// 			return mockRandomTruthQuestions;
// 		});

// 		return { fetchTruthQuestions };
// 	}),
// }));

// describe("testing the main app", async () => {
// 	// For the createPage()
// 	await setup({});

	test("Testing as page (e2e)", async ({page, goto}) => {
		// const page = await createPage();
		await goto("/", {waitUntil:"domcontentloaded"});
		// await page.goto(url("/"), { waitUntil: "hydration" });
		const backButton = page.locator("#back-button");
		await expect(backButton).toContainText("Back");
		await expect(backButton).not.toContainText("something else");

		// ! FINALLY FUCKING WORKS, or?
		const questionP = page.locator("#questionP");
		await expect(questionP).not.toHaveText("...");
		console.log(questionP);
	});
// });

// describe("testing the main app with the playwright test runner", async () => {
	test('test', async ({ page, goto }) => {
		await goto('/', { waitUntil: 'domcontentloaded' });
		// await expect(page.locator("#the-heading")).toContainText("Truth");
		await expect(page.locator("[data-testid='the_heading']")).toContainText("Truth");
	  })

// });
