<script lang="ts" setup>
import useCounter from "../composables/useCounter";

const props = defineProps<{
  icon: string;
  title: string;
  score: number;
  target: string;
  color: "red" | "yellow" | "green" | "blue";
}>();

const costumIdentifier = Math.floor(Math.random() * 1000 + 1);
useCounter(props.score, `number-[${costumIdentifier}]`);
</script>

<template>
  <article class="summary__list--item">
    <div class="summary__list--item__name" :class="color">
      <img class="summary_list--icon" :src="icon" alt="" width="20" height="20" />
      <span>{{ title }}</span>
    </div>
    <div class="section-item__score">
      <span
        class="section-item__score counter"
        :class="`number-[${costumIdentifier}]`"
      ></span>
      / {{ target }}
    </div>
  </article>
</template>

<style scoped>
.summary__list--item {
  display: flex;
  align-items: center;
  font-size: 1rem;
  justify-content: space-between;
    cursor: pointer;
    transition: all 100ms ease-in;

  animation: appearLeft 400ms ease-in;
  animation-delay: 100ms;
  animation-fill-mode: backwards;
}

.summary__list--item:hover {
    scale: 1.1
}

.summary__list--item:hover .summary_list--icon {
    scale: 1.2;
}

.summary__list--item__name {
  display: flex;
  align-items: center;
  font-weight: 600;
  gap: 0.5rem;
}

.section-item__score {
  color: grey;
  font-weight: 700;
}

.section-item__score > span {
  color: var(--darkgrayblue);
  font-weight: 800;
}
</style>
