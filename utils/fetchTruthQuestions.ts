export const fetchTruthQuestions = async () => {
	try {
		// Check for cached response first
		const cachedResponse = await caches.match("/truthQuestions.json");

		// Use cached response if available
		if (cachedResponse) {
			console.log("Using cached truth questions");
			return await cachedResponse.json();
		}

		// Fallback to network fetch if no cache hit
		const response = await fetch("/truthQuestions.json");
		if (response.ok) {
			return await response.json();
		}
		return [];
	} catch (e) {
		console.error(
			"Something went wrong while trying to fetch truthquestions"
		);
		console.error(e);
		return [];
	}
};
