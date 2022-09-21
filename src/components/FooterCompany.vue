<template>
<footer class="text-center text-lg-start text-muted">
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>

    <div>
      <a class="btn m-1" href="https://www.linkedin.com/in/%D0%BC%D0%B0%D0%BA%D1%81%D0%B8%D0%BC-%D0%B8%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2-4683b1213/" target="_blank" role="button"><fa :icon="['fab', 'linkedin']"/></a>
      <a class="btn m-1" href="http://t.me/IvanovMaksym" target="_blank" role="button"><fa :icon="['fab', 'telegram']"/></a>
      <a class="btn m-1" href="https://github.com/Makcim2011" target="_blank" role="button"><fa :icon="['fab', 'github']"/></a>
    </div>
  </section>

  <section class="">
    <div class="container text-center text-md-start mt-5">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            <fa :icon="['fas', 'laptop']"/> Company name
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" class="text-reset">Vue</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Vuetify</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Vuex</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Router</a>
          </p>
        </div>

        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" class="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Help</a>
          </p>
        </div>

        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p>
            <fa :icon="['fas', 'home']"/>
            Klekotyna, Vinnytsia 23525, UA
          </p>
          <p>
            <fa :icon="['fas', 'envelope']"/>
            info@example.com
          </p>
          <p>
            <fa :icon="['fas', 'phone']"/>
            + 38 066 70 23 841
          </p>
        </div>
      </div>
    </div>
  </section>

  <div class="text-center p-4">
    © 2021 Copyright:
    <a class="text-reset fw-bold" href="https://github.com/Makcim2011">github.com/Makcim2011</a>
  </div>
</footer>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>

</style>