<template>
  <div>
    <NavBar id="navbar" :currentSection="currentSection" class="rtl" />
    <header>
      <Hero id="hero" ref="hero" class="rtl" />
    </header>
    <AboutMe id="about" ref="about" class="rtl" />
    <Skills class="bg-light" id="skills" ref="skills" />
    <Work id="work" ref="work"  />
    <Contact id="contact" ref="contact" class="rtl" />
    <MyFooter class="rtl" />
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

export default {
  name: "home",
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
    const options = {
      threshold: 0.7
    };
    const self = this;
    var navCheck = function([entry]) {
      if (entry && entry.isIntersecting) {
        self.currentSection = entry.target.id;
      }
    };
    self.observer = new IntersectionObserver(navCheck, options);
    Object.values(self.$refs).forEach(ref => {
      self.observer.observe(ref.$el);
    });
  },
  methods: {
    isRtl: function() {
      return {
        rtl: this.$i18n.locale == "ar"
      };
    }
  }
};
</script>

<style>
@import url("../static/css/bootstrap-rtl.min.css");


html {
  scroll-behavior: smooth;
}
html,
body {
  font-family:Helvetica,Arial, sans-serif;
  
  direction: rtl;
}

.divder {
  border-radius: 10px;
  background-color: black;
  width: 80px;
  height: 5px;
  margin: 0 auto 0;
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

#about {
  height: 100vh;
}
#about,
#skills,
#work,
#contact {
  padding: 4rem 0 4rem !important;
}

header {
  background-color: #330055;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000'%3E%3Cg %3E%3Ccircle fill='%23330055' cx='50' cy='0' r='50'/%3E%3Cg fill='%233a015d' %3E%3Ccircle cx='0' cy='50' r='50'/%3E%3Ccircle cx='100' cy='50' r='50'/%3E%3C/g%3E%3Ccircle fill='%23410165' cx='50' cy='100' r='50'/%3E%3Cg fill='%2348026e' %3E%3Ccircle cx='0' cy='150' r='50'/%3E%3Ccircle cx='100' cy='150' r='50'/%3E%3C/g%3E%3Ccircle fill='%23500376' cx='50' cy='200' r='50'/%3E%3Cg fill='%2357047e' %3E%3Ccircle cx='0' cy='250' r='50'/%3E%3Ccircle cx='100' cy='250' r='50'/%3E%3C/g%3E%3Ccircle fill='%235f0587' cx='50' cy='300' r='50'/%3E%3Cg fill='%2367068f' %3E%3Ccircle cx='0' cy='350' r='50'/%3E%3Ccircle cx='100' cy='350' r='50'/%3E%3C/g%3E%3Ccircle fill='%236f0798' cx='50' cy='400' r='50'/%3E%3Cg fill='%237707a0' %3E%3Ccircle cx='0' cy='450' r='50'/%3E%3Ccircle cx='100' cy='450' r='50'/%3E%3C/g%3E%3Ccircle fill='%238008a9' cx='50' cy='500' r='50'/%3E%3Cg fill='%238909b1' %3E%3Ccircle cx='0' cy='550' r='50'/%3E%3Ccircle cx='100' cy='550' r='50'/%3E%3C/g%3E%3Ccircle fill='%239109ba' cx='50' cy='600' r='50'/%3E%3Cg fill='%239a09c3' %3E%3Ccircle cx='0' cy='650' r='50'/%3E%3Ccircle cx='100' cy='650' r='50'/%3E%3C/g%3E%3Ccircle fill='%23a309cb' cx='50' cy='700' r='50'/%3E%3Cg fill='%23ad09d4' %3E%3Ccircle cx='0' cy='750' r='50'/%3E%3Ccircle cx='100' cy='750' r='50'/%3E%3C/g%3E%3Ccircle fill='%23b608dc' cx='50' cy='800' r='50'/%3E%3Cg fill='%23c007e5' %3E%3Ccircle cx='0' cy='850' r='50'/%3E%3Ccircle cx='100' cy='850' r='50'/%3E%3C/g%3E%3Ccircle fill='%23c905ee' cx='50' cy='900' r='50'/%3E%3Cg fill='%23d303f6' %3E%3Ccircle cx='0' cy='950' r='50'/%3E%3Ccircle cx='100' cy='950' r='50'/%3E%3C/g%3E%3Ccircle fill='%23D0F' cx='50' cy='1000' r='50'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: contain;
  width: 100%;
  /* background by SVGBackgrounds.com */
  color: white;
}

/* Small devices sm (tablets, 768px and up) */
@media (min-width: 768px) {
  #skills {
    min-height: 100vh;
  }
}
</style>