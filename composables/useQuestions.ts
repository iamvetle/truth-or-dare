type Question = {
        en:string,
        no:string
}

/**
 * Various function related to fetching dare and truth questions,
 * as well as randomizing which ones will be picked.
 */
export const useQuestions = async () => {
    const truthQuestions = ref<Question[] | []>([])
    const dareQuestions = ref<Question[] | []>([])


/**
 * Fetches all the truth and dare questions
 */
    const fetchAllQuestions = async() => {

    // * Currently only 25 questions
    const truthResponse = await $fetch<Question[] | null>("/truthQuestions.json")
    

    if (truthResponse) {
        truthQuestions.value = truthResponse
    }

    console.info(`There are ${truthQuestions.value.length} truth questions`)


    // * Currently only 25 questions
    const dareResponse = await $fetch<Question[] | null>("/dareQuestions.json")

    if (dareResponse) {
        dareQuestions.value = dareResponse
    }
    console.info(`There are ${dareQuestions.value.length} dare questions`)

}

    /**
     * Gets a random truth question.
     * 
     * Based on the remaining truth questions that have not yet been used.
     * 
     * @returns a truth random question
     */
    const randomTruthQuestion = async () => {
        // const response = await $fetch<Question[]>("/truthQuestions.json")

        const numOfQuestions = truthQuestions.value.length

        const randomNumber = Math.floor(Math.random() * numOfQuestions)

        const randomQuestion = truthQuestions.value[randomNumber]
        truthQuestions.value.splice(randomNumber, 1)

        console.assert(truthQuestions.value.length > 0, "No new truth questions remaining")

        return randomQuestion
    }
    
    /**
     * Gets a random dare question.
     * 
     * Based on the remaining dare questions that have not yet been used.
     * 
     * @returns a dare random question
     */
    const randomDareQuestion = async () => {

        const numOfQuestions = dareQuestions.value.length

        const randomNumber = Math.floor(Math.random() * numOfQuestions)

        const randomQuestion = dareQuestions.value[randomNumber]
        dareQuestions.value.splice(randomNumber, 1)

        console.assert(dareQuestions.value.length > 0, "No new dare questions remaining" )

        return randomQuestion
    }

    return { randomTruthQuestion, randomDareQuestion, fetchAllQuestions }
}