<template>
  <nav
    ref="navbar"
    dir="ltr"
    class="navbar fixed-top navbar-expand-md navbar-dark bg-blue capitalize"
  >
    <div class="container-fluid">
      <a class="navbar-brand m-0" dir="ltr" href="#">
        <Logo class />
        <span class="mr-2">Red Bayoub</span>
      </a>
      <button
        @click.stop="toggleNavbar($event)"
        class="navbar-toggler bt-menu-trigger border-0"
        :class="bindMenuTogglerAddClasses"
        type="button"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        :aria-expanded="isToogled"
        aria-label="Toggle navigation"
      >
        <span></span>
      </button>

      <div
        :dir="[is_mobile && is_rtl ? 'rtl' : 'ltr']"
        class="collapse"
        :class="collapseClasses"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav" :class="bindNavNavbarClasses">
          <li class="nav-item menu-link active">
            <a data-page="home" class="nav-link" href="#home">{{$t('home')}}</a>
          </li>
          <li class="nav-item menu-link">
            <a data-page="about" class="nav-link" href="#about">{{$t('about.label')}}</a>
          </li>
          <li class="nav-item menu-link">
            <a data-page="skills" class="nav-link" href="#skills">{{$t('skills.label')}}</a>
          </li>
          <li class="nav-item menu-link">
            <a data-page="work" class="nav-link" href="#work">{{$t('work.label')}}</a>
          </li>
          <li class="nav-item menu-link">
            <a data-page="contact" class="nav-link" href="#contact">{{$t('contact.label')}}</a>
          </li>

          <LangChanger
            :dir="[is_rtl&&is_mobile?'rtl':'ltr']"
            class="nav-item mr-2"
            style="padding:2px;"
            id="langChanger"
          />
          <li class="nav-item">
            <a
              name
              id
              class="btn btn-outline-light"
              style="margin:1px;"
              href="#contact"
              role="button"
            >{{$t('contact.title')}}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from "@/components/Logo";
import SvgIcon from "@/components/SvgPathIcon";
import LangChanger from "@/components/LangChanger";
export default {
  name: "navBar",
  components: {
    Logo,
    SvgIcon,
    LangChanger
  },
  computed: {
    bindMenuTogglerAddClasses: function() {
      return {
        /* "c-rtl": this.$i18n.locale === "ar", */
        /* "rtl":this.is_mobile && this.$i18n.locale === "ar", */
        "bt-menu-open": this.isToogled
      };
    },
    bindNavNavbarClasses: function() {
      return {
        "ml-auto": !this.isRtl(),
        "mr-auto": this.isRtl(),
        rtl: this.is_mobile && this.isRtl(),
        /* "c-rtl": this.$i18n.locale === "ar", */
        /* "rtl":this.is_mobile && this.$i18n.locale === "ar", */
        "bt-menu-open": this.isToogled
      };
    },
    is_mobile: function() {
      // media query md 768px
      const isMobile = window.matchMedia("(max-width: 768px)");
      return isMobile.matches ? true : false;
    },
    // added only for lang changer and for navbar nav
    is_rtl: function() {
      return this.isRtl();
    }
  },
  data() {
    return {
      isToogled: false,
      collapseClasses: {
        "navbar-collapse": true,
        collapse: true,
        collapsing: false,
        show: false //initial state
      }
    };
  },
  mounted() {},

  methods: {
    isRtl() {
      console.log("isRtl");
      return this.$i18n.locale === "ar";
    },
    toggleNavbar(e) {
      e.stopPropagation(); // this will stop propagation of this event to upper level
      let curr = this.collapseClasses;
      this.collapseClasses = {
        ...curr,
        ...{
          collapsing: true,
          collapse: false,
          show: false
        }
      };
      this.isToogled = !this.isToogled;
      setTimeout(() => {
        this.collapseClasses = {
          ...curr,
          ...{
            collapsing: false,
            collapse: true,
            show: !curr.show
          }
        };
      }, 10);

      if (this.isToogled) {
        window.addEventListener("click", this.toggleNavbar);
      } else {
        window.removeEventListener("click", this.toggleNavbar);
      }
    }
  }
};
</script>

<style>
.bt-menu-trigger {
  font-size: 30px;
  position: relative;
  display: inline-block;
  width: 1.5em;
  height: 2em;
  cursor: pointer;
}
.bt-menu-trigger:focus {
  outline: none;
}

.bt-menu-trigger span {
  position: absolute;
  top: 50%;
  left: 0;
  display: block;
  width: 100%;
  height: 0.15em;
  margin-top: -0.1em;
  background-color: rgba(255, 255, 255, 0.9);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: background-color 0.3s;
  transition: background-color 0.3s;
}

.bt-menu-trigger span:after,
.bt-menu-trigger span:before {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  content: "";
  -webkit-transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
}

.bt-menu-trigger span:before {
  -webkit-transform: translateY(-0.5em);
  transform: translateY(-0.5em);
}

.bt-menu-trigger span:after {
  -webkit-transform: translateY(0.5em);
  transform: translateY(0.5em);
}

.bt-menu-trigger.bt-menu-open span:before {
  -webkit-transform: translateY(-0.36em) translateX(0.65em) rotate(45deg)
    scaleX(0.6);
  transform: translateY(-0.3em) translateX(0.45em) rotate(45deg) scaleX(0.6);
}

.bt-menu-trigger.bt-menu-open span:after {
  -webkit-transform: translateY(0.36em) translateX(0.65em) rotate(-45deg)
    scaleX(0.6);
  transform: translateY(0.3em) translateX(0.45em) rotate(-45deg) scaleX(0.6);
}

/* md devices  (desktop, 1024px and up) */
/* @media (min-width: 720px) {
  .navbar .active {
    border-bottom: 2px solid #2d83cf;
  }
} */
</style>