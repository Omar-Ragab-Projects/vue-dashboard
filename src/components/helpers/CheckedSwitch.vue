<template>
  <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" role="switch" checked />
    <label class="form-check-label">{{ text }}</label>
  </div>
</template>
<script setup>
defineProps(["text"]);
</script>
