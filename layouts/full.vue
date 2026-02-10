<template>
  <div class="slidev-layout full px-14 py-10">
    <slot />
  </div>
</template>

<style scoped>
.full {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
