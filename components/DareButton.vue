<template>
    <button 
    id="dare-choice-button"
    @click="$emit('buttonClick')" class="">{{ label }}</button>
</template>

<script setup lang='ts'>

withDefaults(defineProps<{
    label:string
}>(), {
    label:"Dare"
});

// const { randomDareQuestion } = await useQuestions()

// type Question = {
//     en: string,
//     no: string
// }
// const theQuestion = useState<Question | null>("theQuestion", () => null)
// const backQuestions = useState<Question[] | []>("backQuestions", () => [])
// const mode = useState<string>("mode", () => "truth")

defineEmits(["buttonClick"])


// const buttonClick = async () => {
//     const question = await randomDareQuestion()

//     if (theQuestion.value != null) { //@ts-ignore
//         backQuestions.value.push(theQuestion.value)
//     }


//     theQuestion.value = question
//     mode.value = "truth"
// }

</script>