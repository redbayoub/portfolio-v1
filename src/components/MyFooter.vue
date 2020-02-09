<template>
  <footer class="bg-blue-dark text-white p-2 capitalize ">
    <div class="d-flex">
      <div class="align-self-center mx-auto">
          {{$t('copyrights')}}
      <a href class="text-decoration-none">redayoub47</a>
      </div>
       <a name="" id="" class="btn border-light" href="#hero" role="button"> <SvgIcon name="angleUpIcon" fill="#ffffff" /></a>
    </div>
    
     
    
  </footer>
</template>

<script>
import SvgIcon from "@/components/SvgPathIcon";
export default {
  name: "my_footer"
  ,components:{
    SvgIcon
  }
};
</script>

<style>
</style>