<template>
    <button @click="buttonClick" class="p-1 bg-accent-500"></button>
</template>

<script setup lang='ts'>

const { randomDareQuestion } = await useQuestions()

type Question = {
    en: string,
    no: string
}
const theQuestion = useState<Question | null>("theQuestion", () => null)
const backQuestions = useState<Question[] | []>("backQuestions", () => [])
const mode = useState<string>("mode", () => "truth")

const buttonClick = async () => {
    const question = await randomDareQuestion()

    if (theQuestion.value != null) { //@ts-ignore
        backQuestions.value.push(theQuestion.value)
    }


    theQuestion.value = question
    mode.value = "truth"
}

</script>