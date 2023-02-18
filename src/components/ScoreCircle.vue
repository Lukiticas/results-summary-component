<script setup>
import useCounter from "../composables/useCounter";

const props = defineProps({
    score: [String, Number],
    target: [String, Number]
})

useCounter(props.score, "score-circle__score");
</script>

<template>
    <div class="score-circle">
        <span class="score-circle__score counter"></span>
        <span class="score-circle__main-score">of {{target}}</span>
    </div>
</template>

<style scoped>
.score-circle {
    --color1: hsla(var(--persianblue), 0.3);
    --color2: hsla(var(--persianblue), 0.1);
    --color: hsla(var(--violetblue), 0.8);

    background-image: linear-gradient(to top, var(--color1) 20%, var(--color1) 40%,var(--color) 100%);

    width: 11rem;
    height: 11rem;
    border-radius: 1000%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;
    aspect-ratio: 1/1;

    animation: scale 350ms ease-in;
    transition: all 100ms ease;
}

.score-circle:hover {
    scale: 1.1;
}

.score-circle__score {
    font-weight: 800;
    font-size: 3.3rem;
    color: var(--white);
}

.score-circle__main-score {
    font-weight: 800;
    font-size: 1rem;
    margin-block-start: 0.5rem;
    color: hsl(var(--lightslateblue));
}

@media screen and (max-width: 800px) {
    .score-circle {
        width: 8rem;
        height: 8rem;
    }
}
</style>
