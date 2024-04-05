type Question = {
    
        en:string,
        no:string
    
}

export const useQuestions = async () => {

    const randomTruthQuestion = async () => {
        const response = await $fetch<Question[]>("/truthQuestions.json")

        const numOfQuestions = response.length

        const randomNumber = Math.floor(Math.random() * numOfQuestions)

        const randomQuestion = response[randomNumber]

        return randomQuestion
    }
    
    const randomDareQuestion = async () => {
        const response = await $fetch<Question[]>("/dareQuestions.json")

        const numOfQuestions = response.length

        const randomNumber = Math.floor(Math.random() * numOfQuestions)

        const randomQuestion = response[randomNumber]

        return randomQuestion
    }

    

    // console.log(response)

    return { randomTruthQuestion, randomDareQuestion }
}