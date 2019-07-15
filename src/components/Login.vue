<template>
  <main class="login">
    <h1>Please login to continue</h1>
    <form>
      <FormInput
        name="username"
        :value="username"
        v-model="username"
        placeholder="Username" />
    </form>
  </main>
</template>

<script>
export default {
  data () {
    return {
      username: '',
    }
  },
}
</script>
