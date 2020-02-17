<template>
  <section class="hero container-fluid center-inner-div capitalize" id="hero">
    <div class="container text-center">
      <h1 class="display-4">{{$t('hero.title')}}</h1>
      <p class="lead">{{$t('hero.lead')}}</p>
      <a
        name
        id
        class="btn btn-outline-light mr-2"
        href="#work"
        role="button"
      >{{$t('hero.view-my')+ ' '+$t('work.label')}}</a>
    </div>
  </section>
</template>

<script>
export default {
  name: "hero"
};
</script>

<style>
.hero {
  height: 100vh;
}
.hero .lead {
  color: rgba(255, 255, 255, 0.8);
}
</style>