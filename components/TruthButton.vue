<template>
    <div>
        <button 
        @click="buttonClick"
        class="p-1 bg-accent-500"
        >Truth</button>
    </div>
</template>

<script setup lang='ts'>

const { randomTruthQuestion } = await useQuestions()

type Question = {
    en:string,
    no:string
}
const theQuestion = useState<Question | null>("theQuestion", () => null)

const buttonClick = async () => {
    const question = await randomTruthQuestion()
    theQuestion.value = question
}
    
</script>