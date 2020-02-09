<template>
  <section class="skills capitalize">
    <h1 class="text-center display-4">{{$t('skills.label')}}</h1>
    <div class="divder my-4"></div>
    <div class="container">
      <div class="row">
        <SkillCard
          :key="index"
          v-for="(skill,index) in skills"
          class="col-12 col-sm-4 my-2"
          :svg="skill.svg"
          :title="skill.title"
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
          title: "Mobile Development",
          content: "Native Android, Flutter"
        },
        
        {
          svg: "serverIcon",
          title: "Back-end Development",
          content: "PHP, Laravel, Firebase"
        },
        {
          svg: "jsIcon",
          title: "Front-end Development",
          content: "HTML5, CSS, JavaScript, VueJS"
        },
        {
          svg: "laptopIcon",
          title: "Desktop Development",
          content: "Java, JavaFX"
        },
        {
          svg: "databaseIcon",
          title: "Databases",
          content: "MySQL, mongoDB, firebase"
        },
        {
          svg: "codeForkIcon",
          title: "Version Control",
          content: "Git, Github"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>