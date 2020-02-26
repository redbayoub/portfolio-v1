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
    <div class="card-row" :class="isCRtl">
      <WorkCard
        class="card-col"
        :class="isDisplayed(project)"
        v-for="project in projects"
        v-bind:key="project.id"
        v-bind:id="project.id"
        v-bind:title="getProjectTitle(project)"
        v-bind:subtitle="getProjectSubtitle(project)"
        v-bind:img="project.img"
        v-bind:link="project.link"
        v-bind:source="project.source"
        v-bind:stacks="project.stacks"
      />
    </div>
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
      // projects-types= Enum[ web , desk , mob]
      orginal_projects: [
        {
          id: 0,
          title_en: "otlob tawa",
          title_ar: "أطلب توا",
          type: "mob",
          subtitle_en: "ordring services from the admin",
          subtitle_ar: "طلب خدمات من الأدمين",
          link:
            "https://play.google.com/store/apps/details?id=com.libyataza.otlob_tawa_client",
          stacks: ["Flutter", "Android", "Firebase"],
          img: "/assets/images/projects/otlob-tawa.jpg"
        },
        {
          id: 1,
          title_en: "Gas Libya",
          title_ar: "غاز ليبيا",
          type: "mob",
          subtitle_en: "order gas containers from your home",
          subtitle_ar: "أطلب قارورات الغاز من منزلك",
          link:
            "https://play.google.com/store/apps/details?id=com.libyataza.gas_app_client",
          stacks: ["Flutter", "Android", "Firebase"],
          img: "/assets/images/projects/gas-order.jpg"
        },
        {
          id: 2,
          title_en: "Simple Text editor",
          title_ar: "محرر نصوص بسيط",
          type: "desk",
          subtitle_en: "",
          subtitle_ar: "",
          source: "https://github.com/redayoub47/javafx_text_editor",
          stacks: ["JavaFX", "Java"],
          img: "/assets/images/projects/text-editor.jpg"
        },
        {
          id: 3,
          title_en: "Media Player",
          title_ar: "قارئ الوسائط",
          type: "desk",
          subtitle_en:
            "Supports all the extension that are officialy supported in Java ( mp4 , mp3 , wav , ...)",
          subtitle_ar:
            "يدعم الصيغ المدعومة رسميا في الجافا منها mp4 , mp3 , wav",
          stacks: ["JavaFX", "Java"],
          source: "https://github.com/redayoub47/javafx_media_player",
          img: "/assets/images/projects/media-player.jpg"
        },
        {
          id: 4,
          title_en: "Chat API + Desktop Client",
          title_ar: "شات API + واجهة عميل للحاسوب",
          type: "desk",
          subtitle_en:
            "َAllow the users to comunicate via mesagges ( text, audio , video , file ) and allow them to create and join groups",
          subtitle_ar:
            "برنامج يسمح للمسخدمين من التواصل فيما بينهم عن طريق الرسائل ( كتابية . صوت . فيديو . ملف ) وكذلك يمكن انشاء مجموعات والتواصل في مجموعات",
          stacks: ["JavaFX", "MySQL", "Spring Boot"],
          source: "https://github.com/redayoub47/javafx_chat_client",
          img: "/assets/images/projects/chat.jpg"
        },
        {
          id: 5,
          title_en: "Personal Website",
          title_ar: "موقعى الشخصي",
          type: "web",
          subtitle_en: "The website that your browsing now",
          subtitle_ar: "الموقع الذي تتصفحه الآن",
          stacks: ["VueJS", "Bootstrap", "HTML", "CSS", "JavaScript"],
          img: "/assets/images/projects/portfolio_ar.jpg"
        },
        {
          id: 6,
          title_en: "Doctor Appointment App",
          title_ar: "تطبيق حجز مواعيد",
          type: "mob",
          subtitle_en:
            "App that allows users to take a doctors appointment in 'one click' from their home",
          subtitle_ar:
            "تطبيق لحجز مواعيد لدى الأطباء حيث يمكن للمسخدمين طلب اضافتهم كدكاترة داخل التطبيق كما يمكن لهم الغاء المواعيد",
          stacks: ["Android", "Java", "Spring Boot", "Firebase", "MySQL"],
          source: "https://github.com/redayoub47/doctor_appointment_app",
          img: "/assets/images/projects/doctor.jpg"
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
    },

    // added this to make diff btw rtl ( bootstrap rtl ) and custom rtl
    isCRtl: function() {
      return {
        "c-rtl": this.$i18n.locale == "ar"
      };
    }
  },
  methods: {
    isDisplayed: function(project) {
      return {
        hide: this.project_type !== "all" && this.project_type !== project.type
      };
    },
    getProjectTitle: function(project) {
      return this.$i18n.locale == "ar" ? project.title_ar : project.title_en;
    },
    getProjectSubtitle: function(project) {
      return this.$i18n.locale == "ar"
        ? project.subtitle_ar
        : project.subtitle_en;
    },
    onProjectFilterClicked(selected_project_type) {
      this.project_type = selected_project_type;
    },
    getBtnColorClass(selected_project_type) {
      if (selected_project_type != this.project_type) {
        return "btn-light";
      }
      // selected_project_type == this.project_type
      switch (selected_project_type) {
        case "all":
          return "btn-primary bg-blue-light";
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
  display: block;
}

.card-col.hide{
  display: none;
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
</style>