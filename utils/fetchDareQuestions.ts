type Question = {
  en: string;
  no: string;
};

export const fetchDareQuestions = async () => {
  try {
    const response = await fetch('/dareQuestions.json');
    if (response.ok) {
      return await response.json();
    }
    return [];
  } catch (e) {
    console.error("Something went wrong while trying to fetch dareQuestions");
    console.error(e);
    return [];
  }
};