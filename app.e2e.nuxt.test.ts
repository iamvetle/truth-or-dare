import { describe, expect, test, vi } from "vitest";
import app from "~/app.vue";
import { mountSuspended, renderSuspended } from "@nuxt/test-utils/runtime";
import { createPage, setup, url } from "@nuxt/test-utils/e2e";
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
	// For the createPage()
	await setup();

	test("Testing as page (e2e)", async () => {
		const page = await createPage();
		await page.goto(url("/"), { waitUntil: "hydration" });
		const backButton = await page.textContent("#back-button");
		expect(backButton).toContain("Back");
		expect(backButton).not.toContain("something else");

		// ! FINALLY FUCKING WORKS, or?
		const questionP = await page.textContent("#questionP");
		expect(questionP).not.toContain("...");
		console.log(questionP);
	});
});
