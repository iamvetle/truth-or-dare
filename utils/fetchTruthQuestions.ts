type Question = {
  en: string;
  no: string;
};

export const fetchTruthQuestions = async () => {
  try {
    const response = await fetch("/truthQuestions.json");
    if (response.ok) {
      return await response.json();
    }
    return [];
  } catch (e) {
    console.error("Something went wrong while trying to fetch truthquestions");
    console.error(e);
    return [];
  }
}
