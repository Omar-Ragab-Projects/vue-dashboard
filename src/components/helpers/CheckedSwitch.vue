<template>
  <div class="form-check form-switch">
    <input
      class="form-check-input"
      type="checkbox"
      role="switch"
      id="flexSwitchCheckChecked"
      checked
    />
    <label class="form-check-label" for="flexSwitchCheckChecked">{{
      text
    }}</label>
  </div>
</template>
<script setup>
defineProps(["text"]);
</script>
