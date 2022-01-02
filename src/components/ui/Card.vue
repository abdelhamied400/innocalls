<template>
  <div
    class="
      card
      bg-white
      shadow-md
      rounded-lg
      px-8
      py-6
      flex
      text-center
    "
  >
    <slot />
  </div>
</template>

<style scoped>
.card{
  min-height: 200px;
}
</style>
