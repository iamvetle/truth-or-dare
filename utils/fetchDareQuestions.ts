// import dareQuestions from "~/public/dareQuestions.json" (remains the same)

export const fetchDareQuestions = async () => {
	try {
		// Check for cached response first
		const cachedResponse = await caches.match("/dareQuestions.json");

		// Use cached response if available
		if (cachedResponse) {
			console.log("Using cached dare questions");
			return await cachedResponse.json();
		}

		// Fallback to network fetch if no cache hit
		const response = await fetch("/dareQuestions.json");
		if (response.ok) {
			return await response.json();
		}
		return [];
	} catch (e) {
		console.error(
			"Something went wrong while trying to fetch dareQuestions"
		);
		console.error(e);
		return [];
	}
};
