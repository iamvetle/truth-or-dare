type Question = {
  en: string;
  no: string;
};

export const fetchTruthQuestions = async () => {
  try {
    const response = await $fetch<Question[] | null>("/truthQuestions.json");
    if (response) {
      return response;
    }
    return [];
  } catch (e) {
    console.error("Something went wrong while trying to fetch truthquestions");
    console.error(e);
    return [];
  }
}
