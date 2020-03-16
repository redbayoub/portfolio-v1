<template>
  <section class="container-fluid capitalize">
    <div class="container">
      <div class>
        <h1 class="display-4 text-center text-white">{{$t('contact.title')}}</h1>
        <div class="divder mx-auto my-4 bg-light"></div>
      </div>
      <div class="row justify-content-center">
        <div class="contact-links pb-4 mb-4 text-white">
          <a
            v-for="(contact,index) in otherContacts"
            :key="index"
            name
            id
            class="btn btn-outline-blue-light"
            :href="contact.href"
            target="_blank"
            role="button"
            @click="onContactLinkClicked(contact.type)"
          >
            <SvgIcon :name="contact.iconName" fill="#ffffff" />
          </a>
        </div>
      </div>

      <div class="row justify-content-center">
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
                :placeholder="$t('contact.form.enter')+' '+$t('contact.form.message')"
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
                @expired="onCaptchaExpired"
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
      otherContacts: [
        {
          iconName: "email",
          type: "email",
          href: "mailto:contact@redbayoub.com"
        },
        {
          iconName: "facebookLogo",
          type: "facebook",
          href: "https://www.facebook.com/redbayoub"
        },
        {
          iconName: "linkdinLogo",
          type: "linkdin",
          href: "https://www.linkedin.com/in/redbayoub/"
        },
        {
          iconName: "githubLogo",
          type: "github",
          href: "https://github.com/redbayoub"
        }
      ],
      recapToken: null,
      sending: false,
      alert: null,
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
    onContactLinkClicked(contactType) {
      this.$gtag.event("opened " + contactType, {
        event_category: "open_link"
      });
    },
    onCaptchaVerified(response) {
      this.recapToken = response;
    },
    onCaptchaExpired() {
      this.resetCaptcha();
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
          this.trackContactSucceeded();
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
    trackContactSucceeded() {
      this.$gtag.event("contact", {
        event_label: "contact succeeded",
        event_category: "click"
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
  display: flex;
  justify-content: center;
  text-transform: lowercase;
  flex-direction: row;
  border-bottom: solid 1px white;
}

.btn-outline-blue-light {
  border-color: #2d83cf !important;
}
.btn-outline-blue-light:hover {
  border-color: #2d83cf !important;
  background-color: #2d83cf !important;
  color: #fff !important;
}
.btn-outline-blue-light:not(:disabled):not(.disabled):active {
  color: #fff !important;
  background-color: #2d83cf !important;
  border-color: #2d83cf !important;
}
.contact-links a {
  width: 50px;
  margin: 0 10px 0;
}
</style>