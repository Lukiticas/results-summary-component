<script setup>
import {ref} from "vue";
import SummaryListItem from "./summaryListItem.vue";
import iconMemory from "../assets/icon-memory.svg"
import iconReaction from "../assets/icon-reaction.svg"
import iconVerbal from "../assets/icon-verbal.svg"
import iconVisual from "../assets/icon-visual.svg"

defineProps({
    data: Object
})

const icons  = ref({
    "verbal": iconVerbal,
    "reaction": iconReaction,
    "visual": iconVisual,
    "memory": iconMemory,
})
</script>

<template>
    <section class="summary">
        <h2 class="summary__title">Summary</h2>
        <div class="summary__list">
            <SummaryListItem
                    v-for="(item, idx) in data.summary"
                    :key="item.name + idx"
                    :style="`animation-delay: .${idx + 2}${idx}0s`"
                    :score="item.score"
                    target="100"
                    :title="item.category"
                    :icon="icons[item.category.toLowerCase()]"
                    :color="item.color"
            ></SummaryListItem>
        </div>
        <button title="continue" class="summary__button">
            continue
        </button>
    </section>
</template>

<style scoped>
.summary {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    flex-flow: column;
    gap: 1rem;

    padding-block: 2em;
    padding-inline: 1.5rem;
    min-width: 21rem;
    height: 100%;
}

.summary__title {
    font-weight: 700;
    font-size: 1.3rem;
    color: var(--darkgrayblue);
    margin-bottom: 1rem;
}

.summary__list {
    padding-inline: 0.5rem;
    margin-block: 1rem;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    margin-bottom: 1rem;
}

.summary__button {
    margin-block: 1rem;
    color: var(--white);
    font-size: 1rem;
    border: none;
    border-radius: 10rem;
    padding: 1rem;
    font-weight: 600;
    text-transform: capitalize;

    background-color: var(--darkgrayblue);
    background-image: var(--darkgrayblue);

    transition: all 200ms ease;
    cursor: pointer;
}

.summary__button:hover {
    --color: hsla(var(--lightroyalblue), 0.9);
    --color1:hsla(var(--lightroyalblue), 0.6);
    --color2: hsla(var(--violetblue), 0.3);

    background-color: hsl(var(--lightslateblue));
    background-image: linear-gradient(to top, var(--color) 10%,  var(--color1) 50%, var(--color2) 100%);
}

@media screen and (max-width: 800px) {
    .summary {
        min-width: 21rem;
        height: 100%;
    }

    .summary__title {
        font-size: 1.1rem;
    }

    .summary__button {
        margin-block: 1rem 0;
    }
}
</style>
