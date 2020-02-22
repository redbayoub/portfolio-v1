<template>
  <div class="text-blue-light ">
      <span class="text">{{content}}</span>
    <span class="icon">
      <svg class="circular">
        <circle
          class="path"
          cx="50"
          cy="50"
          r="20"
          fill="none"
          stroke-width="3"
          stroke-miterlimit="10"
        />
      </svg>
    </span>
    
  </div>
</template>

<script>
export default {
  name: "circular-progress"
  ,props:{
      "content":String
  }
};
</script>

<style scoped>
.icon,
.text {
  vertical-align: middle;
  display: inline-block;
}

.circular {
  animation: rotate 2s linear infinite;
  height: 100px;
  position: relative;
  width: 100px;
}

.path {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: dash 1.5s ease-in-out infinite;
  stroke-linecap: round;
  stroke: #2d83cf;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124;
  }
}
</style>