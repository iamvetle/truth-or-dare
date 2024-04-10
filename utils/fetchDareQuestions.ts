type Question = {
  en: string;
  no: string;
};

export const fetchDareQuestions = async () => {

    const fetchDareQuestions = async () => {
        try {
            const response = await $fetch<Question[] | null>("/dareQuestions.json");
            if (response) {
              return response;
            }
            return [];
          } catch (e) {
            console.error("Something went wrong while trying to fetch dareQuestions");
            console.error(e);
            return []
          }
        
    }

    return { fetchDareQuestions }
}
