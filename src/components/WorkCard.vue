<template>
  <div>
    <div class="card work-card">
      <img class="card-img img-fluid" :src="img" alt />
      <div class="card-img-overlay d-flex flex-column">
        <div class="work-card-content p-3">
          <h3 class="card-title text-light">{{title}}</h3>
          <p>
            <span
              class="badge badge-pill mb-1 text-light border border-outline-light mr-1"
              v-for="(stack,index) in stacks"
              :key="index"
            >{{stack}}</span>
          </p>
          <p class="card-text text-light">{{subtitle}}</p>
        </div>
        <div class="container no-gutters mt-auto">
          <div class="row">
            <a
              name
              id
              class="btn border-light card-btn col mx-1"
              :href="link"
              target="_blank"
              role="button"
              v-if="link!=null && link.length!=0"
            >
              <SvgIcon name="link" fill="#ffffff" />
            </a>
            <a
              name
              id
              class="btn border-light card-btn col mx-1"
              :href="source"
              target="_blank"
              role="button"
              v-if="source!=null && source.length!=0"
            >
              <SvgIcon name="sourceCode" fill="#ffffff" />
            </a>
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
  props: ["title", "id", "subtitle", "stacks", "link", "source", "img"],
  components: {
    SvgIcon
  }
};
</script>

<style scoped>
.work-card {
  cursor: pointer;
  border: none;
}

.work-card img {
  border-radius: 0px;
}
.card-img-overlay:hover {
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 1;
}
.card-img-overlay:hover a {
  transform: translate(0%);
  transition-delay: 100ms;
}
.card-img-overlay {
  opacity: 0;
  cursor: pointer;
}
.card-img-overlay a {
  cursor: pointer;
  transform: translate(100000000%); /* only to make out of the frame */
  transition: transform 0s;
}

.card-btn {
  margin: auto 0 0;
}
</style>