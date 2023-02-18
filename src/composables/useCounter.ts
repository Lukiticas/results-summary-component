import { onMounted, ref } from "vue";

export default (target: number, className: string) => {
  const counter = ref(0);
  const counterDelay = new Promise((resolve) => {
    setTimeout(resolve, 500);
  });

  onMounted(async () => {
    await counterDelay;
    counter.value = target;

    const el = document.getElementsByClassName(className)[0] as HTMLElement;
    el.style.setProperty("--num", counter.value.toString());
  });
};
