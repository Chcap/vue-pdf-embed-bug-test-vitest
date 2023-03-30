<template>
  <div>
    <h2>My Pdf</h2>
    <VuePdfEmbed :source="source" width="600"/>
  </div>
</template>

<script setup lang="ts">
import VuePdfEmbed from 'vue-pdf-embed'

const source = 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf';
</script>



