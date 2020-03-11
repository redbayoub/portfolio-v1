<template>
  <a href @click.prevent="changeLang()" dir="ltr">
    <img :src="new_lang_image" class width="24px" alt />
    {{new_lang_name}}
  </a>
</template>

<script>
export default {
  name: "langChanger",

  data() {
    return {
      new_lang: null
    };
  },
  created() {
    this.new_lang = this.$i18n.locale == "ar" ? "en" : "ar";
  },
  computed: {
    new_lang_image: function() {
      if (this.new_lang == "ar") return "/assets/images/flags/ar_flag.png";
      else return "/assets/images/flags/en_flag.png";
    },
    new_lang_name: function() {
      if (this.new_lang == "ar") {
        return "العربية";
      } else {
        return "English";
      }
    }
  },

  methods: {
    changeLang() {
      this.trackChangeLanguage(this.new_lang);
      location.replace("/" + this.new_lang + "/");
    },
    trackChangeLanguage(lang) {
      this.$gtag.event("changeLanguage to " + lang, {
        event_category: "click"
      });
    }
  }
};
</script>

<style scoped>
a:hover {
  text-decoration: none;
}
a img {
  margin: 0 10px 0 0;
}
</style>