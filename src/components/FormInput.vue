<template>
  <div class="row">
    <component
      :is="element"
      class="input"
      :class="inputClass"
      :name="name"
      :type="type"
      :value="text"
      :placeholder="placeholder"
      @input="update"
      v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
    type: {
      type: String,
      default: 'text',
    },
    // value: {
    text: {
      required: true,
    },
    placeholder: {
      type: String,
    },
    invalid: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    inputClass () {
      return {
        'invalid': this.invalid,
      }
    },

    element () {
      return this.type === 'textarea' ? this.type : 'input'
    },
  },

  methods: {
    update (event) {
      // console.log(event.currentTarget.value)
      // this.$emit('input', event.currentTarget.value)
      this.$emit('update', event.currentTarget.value)
    },
  },

  model: {
    prop: 'text',
    event: 'update',
  }
}
</script>

