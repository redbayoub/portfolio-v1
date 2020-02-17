<template>
  <div class="card bg-transparent border-0 skill-card" >
    <SvgIcon  class="card-img-top " width="100" height="100" :name="svg" fill="#2D83CF" />
    <div class="card-body text-center skill-card-body">
      <h5 class="skill-title">{{title}}</h5>
      <p
        class="card-text"
      >{{content}}</p>
    </div>
  </div>
</template>

<script>
import SvgIcon from "@/components/SvgPathIcon";
export default {
  name: "skill-card",
  props: {
    svg: String,
    title: String,
    content: String
  },
  components:{
      SvgIcon
  }
};
</script>

<style>
.skill-card{
    color: #031e36;
}
.skill-title{
    margin: 0;
    margin-bottom: 5px;
}
.skill-card-body{
  padding-top: 10px !important;
}
</style>