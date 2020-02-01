<template>
  <section class="skills capitalize">
    <h1 class="text-center display-4">{{$t('skills.label')}}</h1>
    <div class="divder my-4"></div>
    <div class="container-fluid d-flex justify-content-center">
      <div class="card-deck">
        <div class="card  skill-card">
          <div class="card-body">
            <h5 class="card-title text-center">{{$t('skills.languages')}}</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Java</li>
              <li class="list-group-item">JavaScript</li>
              <li class="list-group-item">PHP</li>
              <li class="list-group-item">Dart</li>
            </ul>
          </div>
        </div>
        <div class="card skill-card">
          <div class="card-body">
            <h5 class="card-title text-center">{{$t('skills.frameworks')}}</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Android</li>
              <li class="list-group-item">Flutter</li>
              <li class="list-group-item">Laravel</li>
              <li class="list-group-item">VueJs</li>
            </ul>
          </div>
        </div>
        <div class="card skill-card">
          <div class="card-body">
            <h5 class="card-title text-center">{{$t('skills.tools')}}</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Git</li>
              <li class="list-group-item">Postman</li>
              <li class="list-group-item">Bash</li>
              <li class="list-group-item">Adobe XD & Photoshop</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.skill-card {
  width: 20rem;
 /*  padding: 5px; */
}
/* xs sm md devices lg (desktop, 1024px and up) */
@media (max-width: 1023px) {
  .skill-card {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
}
/* large devices lg (desktop, 1024px and up) */
@media (min-width: 1024px) {
  .skill-card:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
}

.list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.list-item {
  padding: 10px 0 10px;
}
.list-item:nth-child(2) {
  border-top: 1px #eeeeee solid;
}
.list-item img {
  max-width: 50px;
  max-height: 50px;
}
.list-item span {
  padding: 0 1rem 0;
}
</style>