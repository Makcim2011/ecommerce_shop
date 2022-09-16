<template>
  <div class="container">
    <div class="cart">
      <span class="navbar-brand mb-0">Cart (0)</span>
      <ul class="list-group">
        <li class="list-group-item">
          <div class="d-flex">
            <div class="flex-shrink-0">
              <img src="#" alt="...">
            </div>
            <div class="flex-grow-1 ms-3">
              <ul class="list-group">
                <li class="list-group-item d-flex flex-column">
                  <div class="d-flex flex-row justify-content-between align-items-center">
                    <span class="flex-grow-1 text-left">A list item</span>
                    <button
                      type="button"
                      class="btn-amount btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="d-flex flex-row justify-content-center align-items-center">
                    <button class="btn-amount btn btn-sm m-2">-</button>
                    x 1
                    <button class="btn-amount btn btn-sm m-2">+</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProductCart',
    components: {}
  }
</script>

<style lang="scss" scoped>
.btn-amount {
  border: none;
  color: black;
  background-color: transparent;
}
</style>