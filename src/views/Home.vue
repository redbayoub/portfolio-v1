<template>
  <div>
    <NavBar id="navbar" :currentSection="currentSection" />
    <Hero id="hero" class="scrollable" ref="hero" />

    <AboutMe class="scrollable" id="about" ref="about" data-step-no="1" />
    <Skills class="bg-light scrollable" id="skills" ref="skills" data-step-no="2" />
    <Work class="scrollable" id="work" ref="work" data-step-no="3" />
    <Contact class="bg-blue-dark  scrollable" id="contact" ref="contact" data-step-no="4" />

    <MyFooter class="bg-blue-dark"/>
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
import scrollspy from "@/js/scrollspy.js";
export default {
  name: "home",
  metaInfo: {
    title: "Bayoub Reddah - Portfolio",
    // override the parent template and just use the above title only
    titleTemplate: null,
    htmlAttrs: {
      lang: "en",
      dir: "ltr",
      amp: false
    },
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
    console.log(menu_links);
    scrollspy(window, menu_links, sections);
  }
};
</script>

<style>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css");
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
html {
  scroll-behavior: smooth;
}
html,
body {
  font-family: Montserrat, Arial, sans-serif;
  direction: ltr;
  color: #031E36;

}

.divder {
  border-radius: 10px;
  background-color:#2D83CF ;
  width: 80px;
  height: 5px;
}

.center-inner-div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.shadow {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.capitalize {
  text-transform: capitalize;
}


#about,
#skills,
#work,
#contact {
  padding: 4rem 0 4rem !important;
}

.hero {
  /*  background-color: #330055;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000'%3E%3Cg %3E%3Ccircle fill='%23330055' cx='50' cy='0' r='50'/%3E%3Cg fill='%233a015d' %3E%3Ccircle cx='0' cy='50' r='50'/%3E%3Ccircle cx='100' cy='50' r='50'/%3E%3C/g%3E%3Ccircle fill='%23410165' cx='50' cy='100' r='50'/%3E%3Cg fill='%2348026e' %3E%3Ccircle cx='0' cy='150' r='50'/%3E%3Ccircle cx='100' cy='150' r='50'/%3E%3C/g%3E%3Ccircle fill='%23500376' cx='50' cy='200' r='50'/%3E%3Cg fill='%2357047e' %3E%3Ccircle cx='0' cy='250' r='50'/%3E%3Ccircle cx='100' cy='250' r='50'/%3E%3C/g%3E%3Ccircle fill='%235f0587' cx='50' cy='300' r='50'/%3E%3Cg fill='%2367068f' %3E%3Ccircle cx='0' cy='350' r='50'/%3E%3Ccircle cx='100' cy='350' r='50'/%3E%3C/g%3E%3Ccircle fill='%236f0798' cx='50' cy='400' r='50'/%3E%3Cg fill='%237707a0' %3E%3Ccircle cx='0' cy='450' r='50'/%3E%3Ccircle cx='100' cy='450' r='50'/%3E%3C/g%3E%3Ccircle fill='%238008a9' cx='50' cy='500' r='50'/%3E%3Cg fill='%238909b1' %3E%3Ccircle cx='0' cy='550' r='50'/%3E%3Ccircle cx='100' cy='550' r='50'/%3E%3C/g%3E%3Ccircle fill='%239109ba' cx='50' cy='600' r='50'/%3E%3Cg fill='%239a09c3' %3E%3Ccircle cx='0' cy='650' r='50'/%3E%3Ccircle cx='100' cy='650' r='50'/%3E%3C/g%3E%3Ccircle fill='%23a309cb' cx='50' cy='700' r='50'/%3E%3Cg fill='%23ad09d4' %3E%3Ccircle cx='0' cy='750' r='50'/%3E%3Ccircle cx='100' cy='750' r='50'/%3E%3C/g%3E%3Ccircle fill='%23b608dc' cx='50' cy='800' r='50'/%3E%3Cg fill='%23c007e5' %3E%3Ccircle cx='0' cy='850' r='50'/%3E%3Ccircle cx='100' cy='850' r='50'/%3E%3C/g%3E%3Ccircle fill='%23c905ee' cx='50' cy='900' r='50'/%3E%3Cg fill='%23d303f6' %3E%3Ccircle cx='0' cy='950' r='50'/%3E%3Ccircle cx='100' cy='950' r='50'/%3E%3C/g%3E%3Ccircle fill='%23D0F' cx='50' cy='1000' r='50'/%3E%3C/g%3E%3C/svg%3E");
   */
  /* background-color: #072640;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23093253' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%230b3d67' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%230e497a' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%2310548e' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%231260a1' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
  */
  /* background-color: #072640;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%230e3c66' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%2314518c' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%231b67b3' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%23217cd9' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%232892ff' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
  */ 
 /*  background-color: #072640;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23093152' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%230b3c65' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%230d4677' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%230f518a' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%23115c9c' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
 */
 background-color: #0f4c81;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23155791' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%231b62a0' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23216db0' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%232778bf' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%232d83cf' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
  ;
  background-attachment: fixed;
  background-size: cover;
  width: 100%;
  /* background by SVGBackgrounds.com */
  color: white;
}

.bg-blue {
  background-color: #0f4c81 !important;
}
.bg-blue-light {
  background-color: #2D83CF !important;
}
.bg-blue-dark {
  background-color: #031E36 !important;
}/* .bg-blue-light {
  background-color: #87a5c0 !important;
}
.bg-blue-dark {
  background-color: #072640 !important;
} */

.text-blue * {
  color: #0f4c81 !important;
}
.text-blue-light {
  color: #2D83CF !important;
}
.text-white * {
  color: white !important;
}

/* Small devices sm (tablets, 768px and up) */
@media (min-width: 768px) {
  #skills,
  #about,
  #work,
  #contact {
    min-height: 100vh;
  }
}

/* typography */
html {
  font-size: 1rem;
}

</style>