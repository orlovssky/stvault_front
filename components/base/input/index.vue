<template>
  <div class="input-field">
    <div v-if="Boolean(props.prependIcon)" class="prepend">
      <component :is="props.prependIcon" class="prepend__icon" />
    </div>

    <input
      ref="inputRef"
      type="text"
      class="input-field__input"
      :placeholder="props.placeholder"
      :class="{
        'input-field__input--prepend': Boolean(props.prependIcon),
      }"
      :value="props.modelValue"
      @input="handleInput"
      @keydown.enter="emit('enter')"
      @blur="emit('blur')"
    />
  </div>
</template>

<script setup lang="ts">
import type { DefineComponent } from "vue";

interface Props {
  modelValue?: string;
  placeholder?: string;
  prependIcon?: DefineComponent;
}
interface Emits {
  (e: "update:modelValue", value: string): void;
  (e: "enter"): void;
  (e: "blur"): void;
}
interface Expose {
  blur: () => void;
}

const inputRef = ref<HTMLInputElement>();
const props = defineProps<Props>();
const emit = defineEmits<Emits>();
defineExpose<Expose>({
  blur: () => {
    inputRef.value?.blur();
  },
});

const handleInput = (event: Event) => {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
};
</script>

<style scoped lang="scss">
@use "/assets/scss/components/base/input/index.scss";
</style>
