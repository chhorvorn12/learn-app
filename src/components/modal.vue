<template>
    <div class="modal fade show"
    id="exampleModal" tabindex="-1" aria-labelledby="" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>
          <button type="button" class="btn-close" @click="onClose()"></button>
        </div>
        <div class="modal-body">
          <slot name="body" />
        </div>
        <div class="modal-footer">
          <slot name="footer" />
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>              
        </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
    props:{
        show:false,
        title:"",
    },
    methods:{
        onClose(){
            this.show=hide;
        }
    }
}
</script>

