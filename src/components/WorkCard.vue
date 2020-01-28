<template>
  <div>
    <div class="card work-card">
      <img class="card-img img-fluid" :src="img" alt />
      <div class="card-img-overlay d-flex flex-column">
        <div class="work-card-content">
          <h4 class="card-title text-light">{{title}}</h4>
          <p class="card-text text-light">{{subtitle}}</p>
          <p>
            <span
              class="badge badge-pill badge-light mr-1"
              v-for="(stack,index) in stacks"
              :key="index"
            >{{stack}}</span>
          </p>
        </div>
        <div class="container no-gutters mt-auto">
          <div class="row">
            <button
              type="button"
              class="btn border-light card-btn col mx-1"
              v-if="link!=null && link.length!=0"
            >
              <SvgIcon name="link"  fill="#ffffff"  /> 
            </button>
            <button
              type="button"
              class="btn border-light card-btn col mx-1"
              v-if="source!=null && source.length!=0"
            >
              <SvgIcon name="sourceCode"  fill="#ffffff" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "@/components/SvgPathIcon";
export default {
  name: "workCard",
  props: ["title", "id", "subtitle", "body", "stacks", "link", "source", "img"],
  components:{
    SvgIcon
  }
};
</script>

<style>
.work-card {
  cursor: pointer;
  /* width: 18rem; */
  /*  border-radius: 0px; */
  border: none;
}
.work-card img {
  border-radius: 0px;
}
.card-img-overlay:hover {
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 1;
}
.card-img-overlay {
  opacity: 0;
  cursor: pointer;
}
.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
}
.card-btn {
  margin: auto 0 0;
}
</style>