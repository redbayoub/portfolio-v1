<template>
  <section class="container-fluid capitalize">
    <div class="container">
      <div class>
        <h1 class="display-4 text-center text-white">{{$t('contact.title')}}</h1>
        <div class="divder mx-auto my-4 bg-light"></div>
      </div>
      <div class="row justify-content-center">
        <div class="contact-links text-white">
          <a
            name
            id
            class="btn btn-outline-blue-light"
            href="mailto:redayoub47@gmail.com"
            target="_blank"
            role="button"
          >
            <SvgIcon name="email" fill="#ffffff" />
          </a>
          <a
            name
            id
            class="btn btn-outline-blue-light"
            href="https://www.facebook.com/redayoub47"
            target="_blank"
            role="button"
          >
            <SvgIcon name="facebookLogo" fill="#ffffff" />
          </a>
          <a
            name
            id
            class="btn btn-outline-blue-light"
            href="https://www.linkedin.com/in/bayoub-reddah/"
            target="_blank"
            role="button"
          >
            <SvgIcon name="linkdinLogo" fill="#ffffff" />
          </a>
          <a
            name
            id
            class="btn btn-outline-blue-light"
            href="https://github.com/redayoub47"
            target="_blank"
            role="button"
          >
            <SvgIcon name="githubLogo" fill="#ffffff" />
          </a>
          
        </div>

        <div class="col-12 mx-auto col-md-8 col-lg-6">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">
                <span class="text-white">{{$t('contact.form.name')}}</span>

                <sup style class="text-danger mx-1">*</sup>
              </label>
              <input
                type="text"
                name="name"
                v-model="name"
                :disabled="sending"
                class="form-control custom-form-input"
                id="name"
                autocomplete="off"
                minlength="3"
                :placeholder="$t('contact.form.enter')+' '+$t('contact.form.name')"
                required
              />
            </div>
            <div class="form-group">
              <label for="email">
                <span class="text-white">{{$t('contact.form.email')}}</span>
                <sup style class="text-danger mx-1">*</sup>
              </label>
              <input
                type="email"
                name="email"
                v-model="email"
                :disabled="sending"
                class="form-control custom-form-input"
                id="email"
                :placeholder="$t('contact.form.enter')+' '+$t('contact.form.email')"
                required
              />
            </div>
            <div class="form-group">
              <label for="subject">
                <span class="text-white">{{$t('contact.form.subject')}}</span>
                <sup style class="text-danger mx-1">*</sup>
              </label>
              <input
                type="text"
                name="subject"
                v-model="subject"
                :disabled="sending"
                class="form-control custom-form-input"
                id="subject"
                :placeholder="$t('contact.form.enter')+' '+$t('contact.form.subject')"
                required
                autocomplete="false"
              />
            </div>
            <div class="form-group">
              <label for="message">
                <span class="text-white">{{$t('contact.form.message')}}</span>
                <sup class="text-danger mx-1">*</sup>
              </label>
              <textarea
                class="form-control custom-form-input"
                autocomplete="off"
                minlength="3"
                v-model="message"
                :disabled="sending"
                id="message"
                name="message"
                rows="6"
                required
              ></textarea>
            </div>

            <small>
              <sup style class="text-danger mx-1">*</sup>
              <span class="text-white">{{$t('contact.form.required')}}</span>
            </small>

            <div class="mx-auto mt-2 text-right">
              <vue-recaptcha
                class
                theme="dark"
                @verify="onCaptchaVerified"
                ref="recaptcha"
                sitekey="6Leh6dkUAAAAAL2KFiSuCtfHHCB4ksMSd5nwms6P"
              ></vue-recaptcha>
              <CircularProgress v-if="sending" :content="$t('contact.form.sending')" />
              <button
                v-else
                type="submit"
                :disabled="recapToken==null"
                class="mt-2 btn btn-primary bg-blue-light border-0 text-right capitalize"
              >{{$t('contact.form.send')}}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Toast v-if="alert!=null" :content="alert.message" :type="alert.type" @closed="onAlertClosed" />
  </section>
</template>

<script>
import SvgIcon from "@/components/SvgPathIcon";
import CircularProgress from "@/components/CircularProgress";
import Toast from "@/components/Toast";
import VueRecaptcha from "vue-recaptcha";
import MyFooter from "@/components/MyFooter";
import axios from "axios";
export default {
  name: "contact",
  components: {
    SvgIcon,
    CircularProgress,
    Toast,
    VueRecaptcha,
    MyFooter
  },
  data() {
    return {
      recapToken: null,
      sending: false,
      alert:null,
      name: null,
      email: null,
      subject: null,
      message: null
    };
  },
  methods: {
    onAlertClosed() {
      this.alert = null;
    },
    onCaptchaVerified(response) {
      this.recapToken = response;
    },
    submitForm(e) {
      if (this.recapToken == null) return;
      const payload = {
        recapToken: this.recapToken,
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message
      };
      const self = this;
      this.sending = false;
      axios
        .post("/.netlify/functions/verifyRecaptchaAndSendEmail", payload)
        .then(function(response) {
          self.alert = {
            message: self.$t("contact.form.sending_success"),
            type: "success"
          };
          // clear inputs
          self.name = null;
          self.email = null;
          self.subject = null;
          self.message = null;
        })
        .catch(function(error) {
          self.alert = {
            message: self.$t("contact.form.sending_error"),
            type: "error"
          };
        })
        .finally(() => {
          // set sending to false
          self.sending = false;
          // reset captcha
          self.resetCaptcha();
        });
    },
    resetCaptcha() {
      var recaptcha = this.$refs.recaptcha;
      recaptcha.reset();
    }
  }
};
</script>

<style>
.custom-form-input {
  background-color: rgb(232, 240, 254) !important;
  color: #0f4c81 !important;
  border-color: #0f4c81 !important;
}
.contact-links-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.contact-links {
  float: left;
  display: flex;

  flex-direction: column;
  justify-content: center;
  border-right: solid 1px rgb(159, 180, 197);
  text-transform: lowercase;
}

.btn-outline-blue-light {
    border-color: #2d83cf !important;
}
.btn-outline-blue-light:not(:disabled):not(.disabled):active{
  color: #fff !important;
    background-color: #2d83cf !important;
    border-color: #2d83cf !important;
}

.rtl .contact-links {
  border: none;
  border-left: solid 1px rgb(159, 180, 197);
}
.contact-links a {
  width: 50px;
  margin: 10px 10px 10px;
}

@media screen and (max-width: 720px) {
  .rtl .contact-links {
    border: none;
    border-bottom: solid 1px white;
  }
  .contact-links {
    flex-direction: row;
    border: none;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: solid 1px white;
  }
}
</style>