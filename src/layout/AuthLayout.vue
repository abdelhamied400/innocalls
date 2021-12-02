<template>
  <div class>
    <div class="flex flex-1 justify-center h-screen">
      <slot />
    </div>
    <div class="banner flex-1 hidden 2xl:flex h-screen">
      <img class="w-2/5 m-auto" src="../assets/logo-vert.svg" alt />
    </div>
  </div>
</template>

<style>
.banner {
  background: linear-gradient(to bottom right, #008ecf, #0d4d80);
}
</style>
