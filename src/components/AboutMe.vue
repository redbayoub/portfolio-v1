<template>
  <section class="container">
    <h1 class="text-center display-4 capitalize">{{$t('about.title')}}</h1>
    <div class="divder mx-auto my-4"></div>
    <div class="row no-gutters">
      <div class="col-12 offset-md-2 col-md-7">
        <div class="mx-4 mx-md-2">
          <p>{{$t('about.p1')}}</p>
          <p>{{$t('about.p2')}}</p>
          <p>{{$t('about.p3.title')}}</p>
          <ul>
            <li>{{$t('about.p3.i1')}}</li>
            <li>{{$t('about.p3.i2')}}</li>
            <li>{{$t('about.p3.i3')}}</li>
            <li>{{$t('about.p3.i4')}}</li>
          </ul>
          <p>{{$t('about.p4')}}</p>
          <ul>
            <li>Dart & Flutter</li>
            <li>Java & Android</li>
            <li>PHP & Laravel</li>
            <li>HTML & CSS & Bootstrap & VueJS</li>
          </ul>
          <p>{{$t('about.p5')}}</p>
          <p>{{$t('about.p6')}}</p>
        </div>
      </div>
      <div class="col-12 col-md-2 text-center">
        <figure>
          <img
            class="img-fluid rounded rounded-circle"
            src="@/assets/images/bayoub_reddah.jpg"
            alt="Bayoub Reddah"
          />
          <figcaption class="text-center">{{$t('full-name')}}</figcaption>
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