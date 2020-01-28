<template>
  <section class="container work">
    <h1 class="text-center display-4">Work</h1>
    <div class="divder my-4"></div>
    <div class="row justify-content-center">
      <button
        type="button"
        class="project-type-btn btn"
        v-bind:class="getBtnColorClass('all')"
        @click="onProjectFilterClicked('all')"
      >All</button>
      <button
        type="button"
        class="project-type-btn btn"
        v-bind:class="getBtnColorClass('mob')"
        @click="onProjectFilterClicked('mob')"
      >Mobile</button>
      <button
        type="button"
        class="project-type-btn btn"
        v-bind:class="getBtnColorClass('desk')"
        @click="onProjectFilterClicked('desk')"
      >Desktop</button>
      <button
        type="button"
        class="project-type-btn btn"
        v-bind:class="getBtnColorClass('web')"
        @click="onProjectFilterClicked('web')"
      >Web</button>
    </div>
    <!--  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4"> -->
    <!-- class="col-md-4  col-sm-6 col-6 col-offset " -->
    <transition-group name="list" class="row">
      <WorkCard
        class="col-md-4 col-sm-6 mb-4 "
        v-for="project in projects"
        v-bind:key="project.id"
        v-bind:id="project.id"
        v-bind:title="project.title"
        v-bind:subtitle="project.subtitle"
        v-bind:body="project.body"
        v-bind:img="project.img"
        v-bind:link="project.link"
        v-bind:source="project.source"
        v-bind:stacks="project.stacks"
      />
    </transition-group>
    <!--  </div> -->
  </section>
</template>

<script>
import WorkCard from "@/components/WorkCard";
export default {
  name: "work",
  components: {
    WorkCard
  },
  created(){
    this.projects=this.orginal_projects.slice();
  },
  data() {
    return {
      project_type: "all",
      orginal_projects: [
        {
          id: 1,
          title: "Woops",
          type: "web",
          subtitle: "ordring app",
          body: "VueJS, Firebase",
          link: "#",
          source: "#",
          stacks: ["VueJS", "Firebase"],
          img: "https://via.placeholder.com/200"
        },
        {
          id: 2,
          title: "Woops",
          type: "mob",
          subtitle: "ordring app",
          body: "VueJS, Firebase",
          link: "#",
          source: "#",
          stacks: ["Android", "Firebase"],
          img: "https://via.placeholder.com/200"
        },
        {
          id: 3,
          title: "Woops",
          type: "desk",
          subtitle: "ordring app",
          body: "VueJS, Firebase",
          link: "#",
          stacks: ["Java", "MySql"],
          source: "#",
          img: "https://via.placeholder.com/200"
        },
        {
          id: 4,
          title: "Woops",
          type: "web",
          subtitle: "ordring app",
          body: "VueJS, Firebase",
          link: "#",
          stacks: ["VueJS", "Firebase"],
          source: "#",
          img: "https://via.placeholder.com/200"
        }
      ],
      projects: null,
    };
  },
  methods: {
    onProjectFilterClicked(selected_project_type) {
      this.project_type = selected_project_type;
      if (selected_project_type == "all") {
        this.projects = this.orginal_projects;
      } else {
        this.projects = this.orginal_projects.filter(
          project => project.type == selected_project_type
        );
      }
    },
    getBtnColorClass(selected_project_type) {
      if (selected_project_type != this.project_type) {
        return "btn-light";
      }
      // selected_project_type == this.project_type
      switch (selected_project_type) {
        case "all":
          return "btn-primary";
        case "mob":
          return "btn-success";
        case "desk":
          return "btn-dark";
        case "web":
          return "btn-secondary";
      }
    }
  }
};
</script>

<style>
.project-type-btn {
  border: none;
  border-radius: 0px;
  margin: 0 10px 10px;
  width: 5rem;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>