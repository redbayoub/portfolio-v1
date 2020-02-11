<template>
  <section class="container work">
      <h1 class="text-center capitalize display-4" :class="isRtl">{{$t('work.label')}}</h1>
    <div class="divder my-4 mx-auto"></div>
    <div class="row justify-content-center no-gutters capitalize" :class="isRtl">
      <button
        type="button"
        class="project-type-btn btn capitalize"
        v-bind:class="getBtnColorClass('all')"
        @click="onProjectFilterClicked('all')"
      >{{$t('work.all')}}</button>
      <button
        type="button"
        class="project-type-btn btn capitalize"
        v-bind:class="getBtnColorClass('mob')"
        @click="onProjectFilterClicked('mob')"
      >{{$t('work.mobile')}}</button>
      <button
        type="button"
        class="project-type-btn btn capitalize"
        v-bind:class="getBtnColorClass('desk')"
        @click="onProjectFilterClicked('desk')"
      >{{$t('work.desktop')}}</button>
      <button
        type="button"
        class="project-type-btn btn capitalize"
        v-bind:class="getBtnColorClass('web')"
        @click="onProjectFilterClicked('web')"
      >{{$t('work.web')}}</button>
    </div>
    <!--  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4"> -->
    <!-- class="col-md-4  col-sm-6 col-6 col-offset " -->

    <!-- row no-gutters -->
    <!--  class="col-md-4 col-sm-6 pb-4 mx-3 mx-md-0 p-md-2  " -->
    <transition-group name="list" class="card-row" :class="isCRtl">
      <WorkCard
        class="card-col"
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
  </section>
</template>

<script>
import WorkCard from "@/components/WorkCard";
export default {
  name: "work",
  components: {
    WorkCard
  },
  created() {
    this.projects = this.orginal_projects.slice();
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
      projects: null
    };
  },
  computed: {
    isRtl: function() {
      return {
        rtl: this.$i18n.locale == "ar"
      };
    }, // added this to make diff btw rtl ( bootstrap rtl ) and custom rtl
    isCRtl: function() {
      return {
        "c-rtl": this.$i18n.locale == "ar"
      };
    }
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
  border-radius: 0px !important;
  margin: 0 10px 10px;
  width: 6rem;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

.card-row {
  margin: 8px -16px;
}

/* Add padding BETWEEN each column (if you want) */
.card-row,
.card-row > .card-col {
  padding: 8px;
}

/* Create four equal columns that floats next to each other */
.card-col {
  float: left;
  width: 33.33%;
}

.c-rtl .card-col {
  float: right;
}

/* Clear floats after rows */
.card-row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 900px) {
  .card-col {
    width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .card-row {
    margin: 0;
  }

  .card-row {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .card-col {
    width: 100%;
  }
}

/* 
.work-card{
  width: 300px;;
} */
</style>