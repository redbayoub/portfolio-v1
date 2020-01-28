<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="this.icons[this.name].viewbox"
    :style="{fill:fill}"
  >
    <title>{{this.icons[this.name].title}}</title>
    <path :d="path" />
  </svg>
</template>

<script>
import const_icons from "@/icons.js";
export default {
  data() {
    return {
      icons: const_icons
    };
  },
  props: {
    name: {
      type: String,
      required: true
    },
    fill: {
      type: String,
      default: "#000000"
    },
    width: {
      type: String,
      default: "24"
    },
    height: {
      type: String,
      default: "24"
    }
  },
  computed: {
    path() {
      return this.icons[this.name].path;
    }
  }
};
</script>