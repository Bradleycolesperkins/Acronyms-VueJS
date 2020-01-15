<template>
  <div id="login">
    <div class="uk-section uk-section-muted">
      <div class="uk-container">
        <div class="uk-background-default uk-border-rounded uk-box-shadow-small">
          <div class="uk-container uk-container-xsmall uk-padding-large">
            <article class="uk-article">
              <h1 class="uk-article-title">Login</h1>
              <div class="uk-article-content">
                <p class="uk-text-lead uk-text-muted">To publish to ACROckNYM, simply login with the form below.</p>
                <form class="uk-form-stacked uk-margin-medium-top">
                  <div class="uk-margin-bottom">
                    <label class="uk-form-label" for="email_address">Email</label>
                    <div class="uk-form-controls">
                      <input id="email_address" class="uk-input uk-border-rounded" name="email" type="email" required=""  v-model="input.email" placeholder="Email Address">
                    </div>
                  </div>
                  <div class="uk-margin-bottom">
                    <label class="uk-form-label" for="password">Password</label>
                    <div class="uk-form-controls">
                      <input id="password" class="uk-input uk-border-rounded" name="password" type="password"  v-model="input.password" placeholder="Password" />
                    </div>
                  </div>
                  <div class="uk-text-center">
                    <button type="button" v-on:click="login()" class="uk-button uk-button-primary uk-border-rounded">Login</button>
                  </div>
                </form>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      input: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      if (this.input.email !== '' && this.input.password !== '') {
        console.log('in here we need to use the store file')
        let email = this.input.email
        let password = this.input.password
        this.$store.dispatch('login', { email, password })
          .then(() => this.$router.push('/'))
          .catch(err => console.log(err))
      } else {
        console.log('A email and password must be present')
      }
    }
  }
}
</script>

<style scoped>

</style>
