<template>
  <LayoutDefaultHeader />

  <div class="content">
    <slot />
  </div>

  <BaseModal :isOpen="isOpen" @close="isOpen = false">
    <div class="modal">
      <div class="modal__title">
        Welcome to the <span class="modal__beta">beta</span> version of our
        website!
      </div>
      <div class="modal__subtitle">
        We're continuing to refine our service. Currently, it's in beta, and
        we're actively implementing new features and improvements.
      </div>
      <div class="modal__subtitle2">Full Access Coming Soon!</div>
      <div class="modal__button">
        <BaseButton @click="isOpen = false" class="modal-button__button">
          Ok
        </BaseButton>
      </div>
    </div>
  </BaseModal>

  <LayoutDefaultFooter />
</template>

<script setup lang="ts">
const isOpen = defineModel({ default: true });

useHead({
  title: "ST Vault",
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
});
</script>

<style scoped lang="scss">
@use "/assets/scss/layouts/default.scss";
</style>
