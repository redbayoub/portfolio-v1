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
            class="btn btn-outline-primary"
            href="https://github.com/redayoub47"
            target="_blank"
            role="button"
          >
            <SvgIcon name="githubLogo" fill="#ffffff" />
          </a>
          <a
            name
            id
            class="btn btn-outline-primary"
            href="https://www.linkedin.com/in/bayoub-reddah/"
            target="_blank"
            role="button"
          >
            <SvgIcon name="linkdinLogo" fill="#ffffff" />
          </a>
        </div>

        <div class="col-12 mx-auto col-md-6">
          <form name="contact" netlify-honeypot="bot-field" data-netlify="true">
            <p class="hidden" style="display:none;">
              <label class="text-light">
                Don’t fill this out if you're human:
                <input name="bot-field" />
              </label>
            </p>
            <div class="form-group">
              <label for="name">
                <span class="text-white">{{$t('contact.form.name')}}</span>

                <sup style class="text-danger">*</sup>
              </label>
              <input
                type="text"
                name="name"
                class="form-control custom-form-input"
                id="name"
                autocomplete="off"
                aria-describedby="emailHelp"
                :placeholder="$t('contact.form.enter')+' '+$t('contact.form.name')"
                required
              />
            </div>
            <div class="form-group">
              <label for="email">
                <span class="text-white">{{$t('contact.form.email')}}</span>
                <sup style class="text-danger">*</sup>
              </label>
              <input
                type="email"
                name="email"
                class="form-control custom-form-input"
                id="email"
                aria-describedby="emailHelp"
                :placeholder="$t('contact.form.enter')+' '+$t('contact.form.email')"
                required
              />
            </div>
            <div class="form-group">
              <label for="message">
                <span class="text-white">{{$t('contact.form.message')}}</span>
                <sup class="text-danger">*</sup>
              </label>
              <textarea
                class="form-control custom-form-input"
                autocomplete="off"
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
            <div class="mx-auto mt-2">
              <button
                type="submit"
                class="btn btn-primary bg-blue-light border-0 text-right capitalize"
              >{{$t('contact.form.send')}}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SvgIcon from "@/components/SvgPathIcon";
import MyFooter from "@/components/MyFooter";
export default {
  name: "contact",
  components: {
    SvgIcon,
    MyFooter
  }
};
</script>

<style>
.custom-form-input {
  background-color: rgb(159, 180, 197) !important;
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