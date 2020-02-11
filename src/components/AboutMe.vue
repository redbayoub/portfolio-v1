<template>
  <section class="container">
    <h1 class="text-center display-4 capitalize">{{$t('about.title')}}</h1>
    <div class="divder mx-auto my-4"></div>
    <div class="row no-gutters">
      <div class="col-12 offset-md-2 col-md-7">
        <p
          class="mx-3"
        >Hello! I'm Bayoub, currently working as a freelance software devloper based in Ghardaia, DZ who enjoys building apps that help people around the world with efficient and highliy secured backends.</p>
      </div>
      <div class="col-12 col-md-2  text-center">
        <figure>
          <img
            class="img-fluid rounded rounded-circle"
            src="@/static/images/bayoub_reddah.jpg"
            alt="Bayoub Reddah"
          />
          <figcaption class="text-center">Bayoub Reddah</figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "aboutMe"
};
</script>

<style>
</style>