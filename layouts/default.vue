<template>
  <LayoutDefaultHeader />

  <div class="content">
    <slot />
  </div>

  <div v-if="isOpen" class="modal-mask">
    <div class="modal-wrapper" @click.self="isOpen = false">
      <div class="modal-container">
        <div class="modal-title">
          Welcome to the <span>beta</span> version of our website!
        </div>
        <div class="modal-subtitle">
          We're continuing to refine our service. Currently, it's in beta, and
          we're actively implementing new features and improvements.
        </div>
        <div class="modal-subtitle2">Full Access Coming Soon!</div>
        <div class="modal-button">
          <BaseButton @click="isOpen = false" class="modal-button__button">
            Ok
          </BaseButton>
        </div>
      </div>
    </div>
  </div>

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

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(43, 43, 43, 0.3);
}
.modal-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.modal-container {
  width: 409px;
  padding: 42px;
  background-color: #fff;
  border-radius: 42px;
  box-shadow: 0px 10px 100px 0px rgba(83, 82, 90, 0.3);
}
.modal-title {
  font-size: 24px;
  font-weight: 700;
  text-align: center;
}
.modal-title span {
  color: rgba(79, 70, 229, 1);
}
.modal-subtitle,
.modal-subtitle2,
.modal-button {
  font-weight: 500;
  font-size: 14px;
  margin-top: 24px;
  text-align: center;
}

.modal-button {
  display: flex;
  justify-content: center;
}
</style>
