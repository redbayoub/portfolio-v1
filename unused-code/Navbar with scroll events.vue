<template>
  <nav ref="navbar" class="navbar fixed-top navbar-expand-sm navbar-dark capitalize">
    <a class="navbar-brand m-0" href="#">
      <Logo class />
      {{$t('full-name')}}
    </a>
    <LangChanger class="d-sm-none pr-2 ml-auto" />
    <button
      @click.stop="toogleNavbar"
      class="navbar-toggler p-0 border-0 m-2"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a
            data-page="about"
            class="nav-link"
            v-bind:class="isCurrentSection('about')"
            href="#about"
          >{{$t('about.label')}}</a>
        </li>
        <li class="nav-item">
          <a
            data-page="skills"
            v-bind:class="isCurrentSection('skills')"
            class="nav-link"
            href="#skills"
          >{{$t('skills.label')}}</a>
        </li>
        <li class="nav-item">
          <a
            data-page="work"
            v-bind:class="isCurrentSection('work')"
            class="nav-link"
            href="#work"
          >{{$t('work.label')}}</a>
        </li>
        <li class="nav-item">
          <a
            data-page="contact"
            v-bind:class="isCurrentSection('contact')"
            class="nav-link"
            href="#contact"
          >{{$t('contact.label')}}</a>
        </li>
        <div class="nav-item d-none d-sm-block">
          <LangChanger class="mr-2" style="padding:2px;" />
        </div>
        <li class="nav-item">
          <!-- mt-2 mt-md-0 -->
          <a
            name
            id
            class="btn btn-primary"
            style="margin:1px;"
            href="#contact"
            role="button"
          >{{ $t('hire-me') }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import Logo from "@/components/Logo";
import SvgIcon from "@/components/SvgPathIcon";
import LangChanger from "@/components/LangChanger";
export default {
  name: "navBar",
  props: ["currentSection"],
  components: {
    Logo,
    SvgIcon,
    LangChanger
  },
  data() {
    return {
      isToogled: false,
      scrollPassedThershold: false
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  mounted() {
    this.handleScroll();
  },
  beforeUpdate() {},

  methods: {
    isCurrentSection: function(section) {
      return {
        active: this.currentSection == section
      };
    },
    handleScroll(e) {
      // Any code to be executed when the window is scrolled
      if (window.scrollY > 100) {
        this.scrollPassedThershold = true;
        this.$refs["navbar"].classList.add("nav-bg");
      } else {
        this.scrollPassedThershold = false;
        if (!this.isToogled) this.$refs["navbar"].classList.remove("nav-bg");
      }
    },
    toogleNavbar() {
      this.isToogled = !this.isToogled;
      console.log("toogleNavbar");
      if (this.isToogled) {
        this.$refs["navbar"].classList.add("nav-bg");
      } else {
        if (!this.scrollPassedThershold)
          this.$refs["navbar"].classList.remove("nav-bg");
      }
    }
  }
};
</script>

<style>
/* .navbar{
  height: 60px;
} */
/* .navbar {
  height: 60px;
  z-index: 1000;
  position: sticky;
  background-color: transparent !important;
  border-bottom: 3px #007bff solid;
} */
/* .icon-btn {
  background-color: transparent;
  border: 0px solid transparent;
  padding: 0 10px 0 5px;
} */
.rtl .navbar-nav .nav-item + .nav-item,
[dir="rtl"] .navbar-nav .nav-item + .nav-item {
  margin-right: 0 !important;
}
.nav-bg {
  background-color: rgba(51, 04, 65, 0.7) !important;
}

.bg-purple {
  /* background-color: #330055 !important; */
  background-color: #510465 !important;
}
.icon-btn :hover {
  fill: #007bff;
}

/* large devices lg (desktop, 1024px and up) */
@media (min-width: 1024px) {
  .navbar .active {
    border-bottom: 2px solid #007bff;
    border-radius: 5px;
  }
}
</style>