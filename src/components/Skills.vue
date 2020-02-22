<template>
  <section class="skills capitalize">
    <h1 class="text-center display-4">{{$t('skills.label')}}</h1>
    <div class="divder my-4 mx-auto"></div>
    <div class="container">
      <div class="row">
        <SkillCard
          :key="index"
          v-for="(skill,index) in skills"
          class="col-12 col-sm-4 my-2"
          :svg="skill.svg"
          :title="getSkillTitle(skill)"
          :content="skill.content"
        />
      </div>
    </div>
  </section>
</template>

<script>
import SkillCard from "@/components/SkillCard";
export default {
  name: "skills",
  components: {
    SkillCard
  },
  data() {
    return {
      skills: [
        {
          svg: "androidIcon",
          title_en: "Mobile Development",
          title_ar: "تطوير تطبيقات الهواتف",
          content: "Native Android, Flutter"
        },

        {
          svg: "serverIcon",
          title_en: "Back-end Development",
          title_ar: "تطوير المواقع Back-end",
          content: "PHP, Laravel, Firebase"
        },
        {
          svg: "jsIcon",
          title_en: "Front-end Development",
          title_ar: "تطوير المواقع Front-end",
          content: "HTML5, CSS, JavaScript, VueJS"
        },
        {
          svg: "laptopIcon",
          title_en: "Desktop Development",
          title_ar: "تطوير برامج الحاسوب",
          content: "Java, JavaFX"
        },
        {
          svg: "databaseIcon",
          title_en: "Databases",
          title_ar: "قواعد البيانات",
          content: "MySQL, mongoDB, firebase"
        },
        {
          svg: "codeForkIcon",
          title_en: "Version Control",
          title_ar: "نظم التحكم في النسخ",
          content: "Git, Github"
        }
      ]
    };
  },
  methods: {
    getSkillTitle: function(skill) {
      return this.$i18n.locale == "ar" ? skill.title_ar : skill.title_en;
    }
  }
};
</script>

<style>
</style>