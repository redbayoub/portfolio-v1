<template>
  <section class="hero container-fluid center-inner-div  " id="hero">
    <div class="container text-center">
      <h1 class="display-4 capitalize">{{$t('hero.title')}}</h1>
      <p class="lead">{{$t('hero.lead')}}</p>
      <a name id class="btn btn-primary mr-2" href="#contact" role="button">{{$t('hire-me')}}</a>
    </div>
  </section>
</template>

<script>

export default {
  name: "hero",
  components: {
  }
};
</script>

<style>
.hero{
  /* height: calc(100vh - 58px); */
  /* margin-top: -65px; */
  height: 100vh;
}
.hero .lead {
  color: rgba(255, 255, 255, 0.8);
}
</style>