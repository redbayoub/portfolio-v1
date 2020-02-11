<template>
  <section class="container-fluid capitalize">
    <div class="container">
      <div class>
        <h1 class="display-4 text-center text-white">{{$t('contact.title')}}</h1>
        <div class="divder mx-auto my-4"></div>
      </div>
      <div class="row">
        <div class="col mx-auto col-md-6">
          <div class="text-center">
            <a
              name
              id
              class="btn mx-2"
              href="https://github.com/redayoub47"
              target="_blank"
              role="button"
            >
              <SvgIcon name="githubLogo" fill="#ffffff" />
            </a>
            <a
              name
              id
              class="btn mx-2"
              href="https://www.linkedin.com/in/bayoub-reddah/"
              target="_blank"
              role="button"
            >
              <SvgIcon name="linkdinLogo" fill="#ffffff" />
            </a>
          </div>
          <div class="divder mx-auto my-4" style="height:1px;"></div>

          <form method="post" action="#">
            <div class="form-group">
              <label for="name">
                <span class="text-white">{{$t('contact.form.name')}}</span>

                <sup style class="text-danger">*</sup>
              </label>
              <input
                type="text"
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
export default {
  name: "contact",
  components: {
    SvgIcon
  },
  computed: {
    /*  enter_name:this.$t('contact.form.enter')+$t('contact.form.name'),
    enter_email:this.$t('contact.form.enter')+$t('contact.form.email'), */
  }
};
</script>

<style>
.custom-form-input {
  background-color: rgb(159, 180, 197) !important;
  color: #0f4c81!important;
  border-color: #0f4c81 !important;
}
/*  ::placeholder { 
  color: #2D83CF;
  opacity: 1;
} */
</style>