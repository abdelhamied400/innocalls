<template>
  <div
    class="
      stats-details-card
      bg-white
      shadow-md
      rounded-lg
      text-center
      px-8
      py-6
    "
  >
    <div class="content flex gap-4">
      <slot name="icon" />
      <div class="head flex-1">
        <slot name="head" />
      </div>
    </div>
    <hr />
    <div class="total">
      <slot name="total" />
    </div>
  </div>
</template>

<script>

</script>
