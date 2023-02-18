<link rel="stylesheet" href="styles/variables.css">
<script setup lang="ts">
import data from '../public/data.json';
import ScoreResultCard from "./components/ScoreResultCard.vue";
import ScoreCircle from "./components/ScoreCircle.vue";
import SummarySection from "./components/SummarySection.vue";
</script>

<template>
    <main class="main-body">
        <section class="main-section">
            <ScoreResultCard class="score-card" title="Great" message="You scored higher than 65% of the people who have taken these tests">
                <ScoreCircle :target="100" :score="data.score" />
            </ScoreResultCard>
           <SummarySection :data="data" />
        </section>
    </main>
</template>

<style scoped>
.main-body {
    background-color: var(--white);
    min-height: 100vh;
    display: grid;
    place-items: center;
}

.main-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: var(--white);
    border-radius: 1rem;
    box-shadow: var(--paleblue) 0 15px 20px -10px;
    animation: appearTop 250ms ease-in
}

.score-card {
    max-width: 20rem;
    border-radius: 1rem;
    overflow: hidden;
}

@media screen and (max-width: 800px) {
    .main-section {
        grid-template-columns: 1fr;
        min-height: 100vh;
        width: 100vw;
    }

    .score-card {
        max-width: 100%;
        border-radius: 0 0 2rem 2rem;
        overflow: hidden;
    }
}
</style>
