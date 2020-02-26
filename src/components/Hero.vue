<template>
  <div>
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
    <a href="#about" class="arrow-btn">
      <span></span>
      <pre style="width:40px;display:inline-block;"></pre>
    </a>
  </div>
</template>

<script scoped>
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
.center-inner-div {
  display: flex;
  justify-content: center;
  align-items: center;
}

a.arrow-btn {
  padding-top: 50px;
  position: absolute;
  bottom: 5%;
  left: 50%;
  z-index: 2;
  display: inline-block;

  -webkit-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
  color: #fff;
  letter-spacing: 0.1em;
  text-decoration: none;
  transition: opacity 0.3s;
  cursor: pointer !important;
}
a.arrow-btn:hover {
  text-decoration: none;
  color: rgb(255, 255, 255);
  cursor: pointer;
}

a.arrow-btn span {
  position: absolute;
  top: 0;
  left: 50%;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: sdb04 2s infinite;
  animation: sdb04 2s infinite;
  box-sizing: border-box;
}
a.arrow-btn span:hover {
  -webkit-animation-play-state: paused;
  animation-play-state: paused;
}
@-webkit-keyframes sdb04 {
  0% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
  }
  20% {
    -webkit-transform: rotate(-45deg) translate(-10px, 10px);
  }
  40% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
  }
}
@keyframes sdb04 {
  0% {
    transform: rotate(-45deg) translate(0, 0);
  }
  20% {
    transform: rotate(-45deg) translate(-10px, 10px);
  }
  40% {
    transform: rotate(-45deg) translate(0, 0);
  }
}
</style>