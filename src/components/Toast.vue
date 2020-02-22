<template>
  <div class="toast" @click="closeAlert" ref="snackbar" :class="getBackgroundColorClass"><pre style="
    margin-bottom: 0px;
">{{content}}</pre></div>
</template>

<script>
export default {
  name: "toast",
  props: {
    type: {
      type: String
    },
    content: {
      type: String,
      required: true
    },
    timeout: {
      type: Number,
      default: 3000
    }
  },
  data() {
    return {
      alertClosingTimer: null
    };
  },
  mounted() {
    this.$refs.snackbar.classList.add("show");
    this.alertClosingTimer = setTimeout(this.closeAlert, this.timeout);
  },
  computed: {
    getBackgroundColorClass: function() {
      let bg_class = null;
      switch (this.type) {
        case "success": {
          bg_class = "bg-success";
          break;
        }
        case "error": {
          bg_class = "bg-danger";
          break;
        }
      }
      var res = new Object();
      if (bg_class != null) res[bg_class] = true;
      return res;
    }
  },
  methods: {
    closeAlert() {
      this.$refs.snackbar.classList.remove("show");
      clearTimeout(this.alertClosingTimer);
      this.$emit("closed");
    }
  }
};
</script>

<style scoped>
/* The snackbar - position it at the bottom and in the middle of the screen */
.toast {
  visibility: hidden; /* Hidden by default. Visible on click */
  min-width: 250px; /* Set a default minimum width */
  background-color: #333; /* Black background color */
  color: #fff; /* White text color */
  text-align: center; /* Centered text */
  border-radius: 2px; /* Rounded borders */
  padding: 16px; /* Padding */
  position: fixed; /* Sit on top of the screen */
  z-index: 1; /* Add a z-index if needed */
  left: 50%; /* Center the snackbar */
  bottom: 30px; /* 30px from the bottom */
  transform: translate(-50%, 0);
}

.toast pre{
    color: #fff; /* White text color */
}

/* Show the snackbar when clicking on a button (class added with JavaScript) */
.toast.show {
  visibility: visible; /* Show the snackbar */
  /* Add animation: Take 0.5 seconds to fade in and out the snackbar.
  However, delay the fade out process for 2.5 seconds */
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

/* Animations to fade the snackbar in and out */
@-webkit-keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@-webkit-keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}
</style>