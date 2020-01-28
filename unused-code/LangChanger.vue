<template>
  <div class="select">
    <select class="select-text" required>
      <option value="1">English</option>
      <option value="2">العربية</option>
    </select>
    <span class="select-highlight"></span>
    <span class="select-bar"></span>
  </div>
</template>

<script>
export default {
  name: "langChanger"
};
</script>

<style>
.select {
  position: relative;
  width: 100px;
  color: white;
}

.select-text {
  position: relative;
  font-family: inherit;
  background-color: transparent;
  color: white;
  width: 100px;
  padding: 10px 10px 10px 0;
  font-size: 18px;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

/* Remove focus */
.select-text:focus {
  outline: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0);
}

/* Use custom arrow */
.select .select-text {
  appearance: none;
  -webkit-appearance: none;
}

.select:after {
  position: absolute;
  top: 18px;
  right: 10px;
  /* Styling the down arrow */
  width: 0;
  height: 0;
  padding: 0;
  content: "";
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid rgba(0, 0, 0, 0.12);
  pointer-events: none;
}

/* active state */
.select-text:focus ~ .select-label,
.select-text:valid ~ .select-label {
  color: #2f80ed;
  top: -20px;
  transition: 0.2s ease all;
  font-size: 14px;
}

/* BOTTOM BARS ================================= */
.select-bar {
  position: relative;
  display: block;
  width: 100px;
}

.select-bar:before,
.select-bar:after {
  content: "";
  height: 2px;
  width: 0;
  bottom: 2px;
  position: absolute;
  background: #2f80ed;
  transition: 0.2s ease all;
}

.select-bar:before {
  left: 50%;
}

.select-bar:after {
  right: 50%;
}

/* active state */
.select-text:focus ~ .select-bar:before,
.select-text:focus ~ .select-bar:after {
  width: 50%;
}

/* HIGHLIGHTER ================================== */
.select-highlight {
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}
</style>