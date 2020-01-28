<template>
  <div class="dropdown">
    <button
      class="btn custom-dropdown bg-transparent dropdown-toggle"
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >English</button>
    <div class="dropdown-menu custom-dropdown-menu bg-purple" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item active" href="#">English</a>
      <a class="dropdown-item" href="#">العربية</a>
    </div>
  </div>

  <!-- <form class="form-inline  ">
      <select class="form-control text-light border-primary border-top-0 border-right-0 border-left-0 rounded-0 bg-transparent">
        <option class="text-dark rounded-bottom">English</option>
        <option class="text-dark rounded-bottom">العربية</option>
      </select>
  </form>-->
</template>

<script>
export default {
  name: "langChanger"
};
</script>

<style>
.show .custom-dropdown {
  border-bottom: 2px solid #2f80ed !important;
}
.custom-dropdown {
  border: 0 !important;
  border-radius: 0;
  padding: 6px 0 6px !important;
  color: rgba(255, 255, 255, 0.5) !important;
}
.custom-dropdown-menu {
  max-width: 80px !important;
  padding: 0 !important;
  min-width: 0px !important;
  border-radius: 0 0 5px 5px !important;
  border: 0 !important;
  /* border-bottom: 1px solid #9c9c9c !important; */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
.custom-dropdown-menu a {
  padding: 0.25rem 1rem !important;
  border-radius: 0 !important;
  color: rgba(255, 255, 255, 0.5);
}
.custom-dropdown-menu a:hover {
  color: white;
  background-color: #8906aa;
}

.custom-dropdown-menu a:last-child {
  border-radius: 0 0 5px 5px !important;
}
</style>