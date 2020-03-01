<template>
  <div class="dropdown" v-bind:class="bindDropdownClasses">
    <a
      class="nav-link custom-dropdown dropdown-toggle"
      href="#"
      id="langsBtn"
      role="button"
      aria-haspopup="true"
      @click="toogleDropedown"
      v-bind:aria-expanded="isOpen"
    >
      <span class="lang-name capitalize">{{$t('langs')}}</span>
    </a>
    <div
      class="dropdown-menu custom-dropdown-menu bg-blue"
      v-bind:class="{'show':isOpen}"
      id="langsMenu"
      aria-labelledby="langsBtn"
    >
      <a
        class="dropdown-item c-dropdown-item"
        v-bind:class="isActive('en')"
        @click.prevent="changeLang('en')"
      >English</a>
      <a
        class="dropdown-item c-dropdown-item"
        v-bind:class="isActive('ar')"
        @click.prevent="changeLang('ar')"
        dir="rtl"
      >العربية</a>
    </div>
  </div>
</template>

<script>
import SvgIcon from "@/components/SvgPathIcon";
export default {
  name: "langChanger",
  components: {
    SvgIcon
  },
  data() {
    return {
      curr_lang: "",
      isOpen: false
    };
  },
  created() {
    this.curr_lang = this.$i18n.locale;
  },
  computed: {
    bindDropdownClasses: function() {
      return {
        rtl: this.isRtl(),
        show: this.isOpen
      };
    }
  },

  methods: {
    isRtl() {
      return this.$i18n.locale === "ar";
    },
    isActive(lang) {
      return {
        selected: this.curr_lang == lang
      };
    },
    changeLang(lang) {
      if (this.curr_lang == lang) return;
      this.$router.replace("/" + lang + "/", () =>
        this.trackChangeLanguage(lang)
      );
    },
    trackChangeLanguage(lang) {
      this.$gtag.event("changeLanguage to "+lang, {
        event_category: "click"
      });
    },
    toogleDropedown(e) {
      e.preventDefault();
      e.stopPropagation(); // this will stop propagation of this event to upper level
      this.isOpen = !this.isOpen;

      if (this.isOpen) {
        window.addEventListener("click", this.toogleDropedown);
      } else {
        window.removeEventListener("click", this.toogleDropedown);
      }
    }
  }
};
</script>

<style scoped>
.custom-dropdown {
  border: 0 !important;
  border-radius: 0;
  padding: 6px 0 6px !important;
  margin-right: 10px;
  color: rgba(255, 255, 255, 0.5) !important;
}
.custom-dropdown-menu {
  cursor: pointer;
  max-width: 100px !important;
  padding: 0 !important;
  min-width: 0px !important;
  border-radius: 0 0 5px 5px !important;
  border: 0 !important;

  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
.c-dropdown-item {
  padding: 0.25rem 1rem !important;
  border-radius: 0 !important;
  color: rgba(255, 255, 255, 0.5) !important;
}
.c-dropdown-item.selected {
  color: white !important;
}
.c-dropdown-item.selected::before {
  box-sizing: border-box;
  display: inline-block;

  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0.3em solid transparent;
  border-bottom: 0.3em solid transparent;
  border-left: 0.3em solid;
}
.rtl .c-dropdown-item.selected::before {
  border-right: 0.3em solid;
  border-left: 0.3em solid transparent;
}

.c-dropdown-item:hover {
  color: white !important;
  background-color: #031e36 !important;
}

.c-dropdown-item:last-child {
  border-radius: 0 0 5px 5px !important;
}

.rtl .dropdown-toggle::after {
  display: none;
}
.rtl .dropdown-toggle::before {
  display: inline-block;
  margin-right: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-left: 0.3em solid transparent;
  border-bottom: 0;
  border-right: 0.3em solid transparent;
}
.rtl .custom-dropdown-menu {
  margin-right: 20px;
  right: -12px;
}
@media screen and (max-width: 768px) {
  .rtl .custom-dropdown-menu {
    float: right;
    right: 0;
  }

  .custom-dropdown {
    margin-right: 0;
  }
  .custom-dropdown-menu {
    box-shadow: none;
    margin-bottom: 10px;
  }
}
</style>