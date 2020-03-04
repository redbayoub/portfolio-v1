<template>
  <div>
    <NavBar id="navbar" />
    <Hero id="hero" class="scrollable rtl" ref="hero" />
    <AboutMe class="scrollable rtl" id="about" ref="about" />
    <Skills class="scrollable" id="skills" ref="skills" />
    <Work class="scrollable" id="work" ref="work" />
    <Contact class="bg-blue-dark scrollable rtl" id="contact" ref="contact" />
    <MyFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import MyFooter from "@/components/MyFooter";
import scrollspy from "@/assets/js/scrollspy.js";
import {
  initScrollHandler,
  addScrollCallback
} from "@/assets/js/scrollhandler.js";

export default {
  name: "home",
  metaInfo() {
    return {
      title: "بايوب رداح | مطور برامج",
      // override the parent template and just use the above title only
      titleTemplate: null,
      htmlAttrs: {
        lang: "ar",
        dir: "rtl",
        amp: false
      },
      meta: [
        {
          name: "description",
          content:
            "بايوب رداح مطور خبير في تصميم و برمجة تطبقات الموبايل و مواقع الويب و  برامج الحواسيب"
        },
        {
          name: "keywords",
          content:
            "جافا , مواقع , php , java , javascript , php , flutter , andorid , html , ويب , تطبيقات , تطوير , جافاسكريبت , أندرويد , تصميم , فلاتر , برمجة , مطور , مبرمج"
        }
      ],
      link: [
        {
          rel: "stylesheet",
          href: this.getBootstrapCSSUrl()
        },
        {
          rel: "stylesheet",
          href: "/assets/css/global.css"
        },
        {
          rel: "stylesheet",
          href: "/assets/css/ar.css"
        }
      ]
    };
  },
  components: {
    NavBar,
    Hero,
    AboutMe,
    Skills,
    Work,
    Contact,
    MyFooter
  },
  data() {
    return {
      observer: null,
      currentSection: null
    };
  },
  mounted() {
    const sections = document.querySelectorAll(".scrollable");
    const menu_links = document.querySelectorAll(".menu-link");
    initScrollHandler(window);
    addScrollCallback(() => scrollspy(window, menu_links, sections));
  },
  methods: {
    getBootstrapCSSUrl: function() {
      if (process.env.NODE_ENV == "development")
        return "https://cdn.rtlcss.com/bootstrap/v4.2.1/css/bootstrap.min.css";
      else return "/assets/css/bootstrap-v4-2-1-rtl.css";
    }
  }
};
</script>

<style>
</style>