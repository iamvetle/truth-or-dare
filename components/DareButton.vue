<template>
    <div>
        <button 
        @click="buttonClick"
        class="p-1 bg-accent-500"
        >Dare</button>
    </div>
</template>

<script setup lang='ts'>

const { randomDareQuestion } = await useQuestions()

type Question = {
    en:string,
    no:string
}
const theQuestion = useState<Question | null>("theQuestion", () => null)
const buttonClick = async () => {
    const question = await randomDareQuestion()
    theQuestion.value = question
}
    
</script>