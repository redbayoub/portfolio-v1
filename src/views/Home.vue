<template>
  <div>
    <NavBar id="navbar" />
    <Hero id="hero" class="scrollable" ref="hero" />
    <AboutMe class="scrollable" id="about" ref="about" />
    <Skills class="scrollable" id="skills" ref="skills" />
    <Work class="scrollable" id="work" ref="work" />
    <Contact class="bg-blue-dark scrollable" id="contact" ref="contact" />
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
export default {
  name: "home",
  metaInfo() {
    return {
      title: "Bayoub Reddah | Software Developer",
      // override the parent template and just use the above title only
      titleTemplate: null,
      htmlAttrs: {
        lang: "en",
        dir: "ltr",
        amp: false
      },
      link: [
        {
          rel: "stylesheet",
          href: this.getBootstrapCSSUrl()
        },
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css?family=Montserrat&display=swap"
        },
        {
          rel: "stylesheet",
          href: "/assets/css/global.css"
        },
        {
          rel: "stylesheet",
          href: "/assets/css/en.css"
        }
      ],
      meta: [
        {
          name: "description",
          content:
            "Bayoub Reddah a freelancer and a software developer with huge experience in developing websites and mobile apps and desktop programs"
        },
        {
          name: "keywords",
          content:
            "freelancer , software , developer , websites , mobile , desktop , java , javascript , php , flutter , andorid , html"
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
    scrollspy(window, menu_links, sections);
  },
  methods: {
    getBootstrapCSSUrl: function() {
      if (process.env.NODE_ENV == "development")
        return "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css";
      else return "/assets/css/bootstrap-v4-2-1.css";
    }
  }
};
</script>

<style >
</style>