<script setup>
defineProps({
    title: String,
    message: String
})
</script>

<template>
    <section class="result-card">
        <h2 class="result-card__title">Your result</h2>
        <slot />
        <div class="result-card__description-footer">
            <h3 class="result-card__description-footer__title">{{ title }}</h3>
            <p class="result-card__description-footer__description">{{ message }}</p>
        </div>
    </section>
</template>

<style scoped>
.result-card {
    display: flex;
    align-items: center;
    flex-flow: column;
    justify-content: space-evenly;
    gap: 2rem;

    height: 100%;
    padding-block: 2rem;
    padding-inline: 2.6rem;

    --color: hsla(var(--lightroyalblue), 0.8);
    --color1:hsla(var(--lightroyalblue), 0.6);
    --color2: hsla(var(--lightslateblue ), 0.3);

    background: hsla(var(--violetblue), 0.7) linear-gradient(140deg,
    hsla(var(--lightslateblue), 0.5) 10%,
    hsla(var(--lightroyalblue), 0.6) 34%,
    hsla(var(--lightroyalblue), 0.8) 56%,
    hsla(var(--persianblue), 0.8) 80%,
    hsla(var(--lightslateblue), 1) 100%);

    background-size: 400% 400% ;
    animation: gradient 5s ease infinite;
}

.result-card__title {
    color: var(--lightlavander);
    text-transform: capitalize;
    font-weight: 700;
    font-size: 1.3rem;
}

.result-card__description-footer {
    text-align: center;
    margin-block-end: 1rem;

}

.result-card__description-footer__title {
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--white);
    margin-block-end: 1rem;
}

.result-card__description-footer__description {
    font-size: 1rem;
    font-weight: 500;
    color: var(--lightlavander);
    line-height: 1.3;
}

@media screen and (max-width: 800px) {
    .result-card {
        gap: 0.6rem;
        padding-block: 0;;
    }

    .result-card__title {
        font-size: 1.1rem;
    }
}
</style>
