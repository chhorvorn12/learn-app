<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <b-button v-b-modal.modal-1>Launch demo modal</b-button>

      <b-modal id="modal-1" title="BootstrapVue">
        <p class="my-4">Hello from modal!</p>
      </b-modal>
    </div>
  </div>
</template>


<script>
import { BModal } from 'bootstrap-vue-3';
export default {
  directives: {
    BModal
  },
  components:{
    BModal
  }
}
</script>

<style>

</style>
