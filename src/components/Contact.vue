<template>
  <section class="container-fluid bg-blue-dark text-light capitalize" >
    <div class="container">
      <div class="text-center mb-4">
        <h1 class="display-4 ">{{$t('contact.title')}}</h1>
        <div class="divder my-4 bg-light"></div>
        <a
          name
          id
          class="btn bg-blue-light mx-2"
          href="https://github.com/redayoub47"
          target="_blank"
          role="button"
        >
          <SvgIcon name="githubLogo" fill="#ffffff" />
        </a>
        <a
          name
          id
          class="btn  bg-blue-light mx-2"
          href="https://www.linkedin.com/in/bayoub-reddah/"
          target="_blank"
          role="button"
        >
          <SvgIcon name="linkdinLogo" fill="#ffffff" />
        </a>
      </div>
      <div class="row">
        <div class="col mx-auto col-md-6">
          <form method="post" action="#">
            <div class="form-group">
              <label for="name">
                {{$t('contact.form.name')}}
                <sup style="font-size: .8rem;" class="text-danger">*</sup>
              </label>
              <input
                type="text"
                class="form-control custom-form-input text-white"
                id="name"
                autocomplete="off"
                aria-describedby="emailHelp"
                :placeholder="$t('contact.form.enter')+' '+$t('contact.form.name')"
                required
              />
            </div>
            <div class="form-group">
              <label for="email">
                {{$t('contact.form.email')}}
                <sup style="font-size: .8rem;" class="text-danger">*</sup>
              </label>
              <input
                type="email"
                class="form-control custom-form-input text-white"
                id="email"
                aria-describedby="emailHelp"
                :placeholder="$t('contact.form.enter')+' '+$t('contact.form.email')"
                required
              />
            </div>
            <div class="form-group">
              <label for="message">
                {{$t('contact.form.message')}}
                <sup style="font-size: .8rem;" class="text-danger">*</sup>
              </label>
              <textarea class="form-control custom-form-input text-white" autocomplete="off" id="message" rows="6" required></textarea>
            </div>
            <small>
              <sup style="font-size: .8rem;" class="text-danger">*</sup>
              {{$t('contact.form.required')}}
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
  components:{
    SvgIcon
  },
  computed:{
   /*  enter_name:this.$t('contact.form.enter')+$t('contact.form.name'),
    enter_email:this.$t('contact.form.enter')+$t('contact.form.email'), */
  },
};
</script>

<style>
.custom-form-input {
  background-color: rgb(0, 52, 97) !important;
  color: white;
  border-color: #2D83CF !important;
}
/*  ::placeholder { 
  color: #2D83CF;
  opacity: 1;
} */

</style>