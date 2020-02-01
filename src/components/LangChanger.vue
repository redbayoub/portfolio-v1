<template>
  <div class="dropdown" v-bind:class="{'show':isOpen}" >
    <button
      class="btn custom-dropdown bg-transparent  dropdown-toggle"
      type="button"
      id="dropdownMenuButton"
   
      @click="toogleDropedown"
    
      aria-haspopup="true"
      
      v-bind:aria-expanded="{isOpen}"
    ><!--  data-toggle="dropdown" -->
      <SvgIcon
        class="lang-icon"
        name="changeLangIcon"
        width="18"
        hieght="18"
        fill="rgba(255, 255, 255, 0.5)"
      />
      <span class="lang-name">  {{currr_lang_name}}</span>
    </button>
    <div class="dropdown-menu custom-dropdown-menu bg-purple" v-bind:class="{'show':isOpen}"  aria-labelledby="dropdownMenuButton">
      <router-link class="dropdown-item c-dropdown-item" v-bind:class="isActive('en')" to="/en/">English</router-link> 
      <router-link class="dropdown-item c-dropdown-item" v-bind:class="isActive('ar')" to="/ar/">العربية</router-link> 
      <!-- <a
        class="dropdown-item"
        @click="changeLang('en',$event)"
        v-bind:class="isActive('en')"
      >English</a>
      <a
        class="dropdown-item"
        @click="changeLang('ar',$event)"
        v-bind:class="isActive('ar')"
      >العربية</a> -->
    </div>
  </div>
</template>

<script>
import SvgIcon from "@/components/SvgPathIcon";
export default {
  name: "langChanger",
  components: {
    SvgIcon
  },
  data() {
    return {
      curr_lang: "",
      isOpen:false,
    };
  },
  created() {
    this.curr_lang = this.$i18n.locale;
  },
  computed: {
    currr_lang_name: function() {
      if (this.curr_lang == "en") {
        return "En";
      } else {
        return "ع";
      }
    }
  },
  methods: {
    
    isActive(lang) {
      return {
        active: this.curr_lang == lang
      };
    },
    toogleDropedown( e) {
      e.preventDefault();
      this.isOpen=!this.isOpen;

    }
  }
};
</script>

<style>
.show .custom-dropdown {
  border-bottom: 2px solid #2f80ed !important;
}
.custom-dropdown {
  border: 0 !important;
  border-radius: 0;
  padding: 6px 0 6px !important;
  color: rgba(255, 255, 255, 0.5) !important;
}
.custom-dropdown-menu {
  cursor: pointer;
  max-width: 80px !important;
  padding: 0 !important;
  min-width: 0px !important;
  border-radius: 0 0 5px 5px !important;
  border: 0 !important;
  /* border-bottom: 1px solid #9c9c9c !important; */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
.c-dropdown-item {
  padding: 0.25rem 1rem !important;
  border-radius: 0 !important;
  color: rgba(255, 255, 255, 0.5) !important;
}
.c-dropdown-item.active {
  color: white !important;
}

.c-dropdown-item:hover {
  color: white !important;
  background-color: #8906aa !important;
}

.c-dropdown-item:last-child {
  border-radius: 0 0 5px 5px !important;
}/* .custom-dropdown-menu a {
  padding: 0.25rem 1rem !important;
  border-radius: 0 !important;
  color: rgba(255, 255, 255, 0.5) !important;
}
.custom-dropdown-menu a.active {
  color: white !important;
}

.custom-dropdown-menu a:hover {
  color: white;
  background-color: #8906aa;
}

.custom-dropdown-menu a:last-child {
  border-radius: 0 0 5px 5px !important;
} */

</style>