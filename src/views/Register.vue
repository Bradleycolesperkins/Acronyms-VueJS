<template>
  <div id="register">
    <div class="uk-section uk-section-muted">
      <div class="uk-container">
        <div class="uk-background-default uk-border-rounded uk-box-shadow-small">
          <div class="uk-container uk-container-xsmall uk-padding-large">
            <article class="uk-article">
              <h1 class="uk-article-title">Register</h1>
              <div class="uk-article-content">
                <p class="uk-text-lead uk-text-muted">To register, please enter your name, email and password.</p>
                <form class="uk-form-stacked uk-margin-medium-top">
                  <div class="uk-margin-bottom">
                    <label class="uk-form-label" for="name">Name</label>
                    <div class="uk-form-controls">
                      <input id="name" class="uk-input uk-border-rounded" name="name" type="text" required="" v-model="input.name" placeholder="Name">
                    </div>
                  </div>
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
                    <button type="button" v-on:click="register()" class="uk-button uk-button-primary uk-border-rounded">Register</button>
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
  name: 'Register',
  data () {
    return {
      input: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    register () {
      if (this.input.name !== '' && this.input.email !== '' && this.input.password !== '') {
        let name = this.input.name
        let email = this.input.email
        let password = this.input.password
        this.$store.dispatch('register', { name, email, password })
          .then(() => this.$router.push('/'))
          .catch(err => console.log(err))
        // this.$http({
        //   method: 'POST',
        //   url: '/api/register',
        //   data: {
        //     name: this.input.name,
        //     email: this.input.email,
        //     password: this.input.password
        //   }
        // }).then(
        //   result => {
        //     // if successful set to logged in
        //   },
        //   // eslint-disable-next-line handle-callback-err
        //   error => {
        //     console.log('Error Registering')
        //   }
        // )
      } else {
        console.log('A Name, Email Address and Password must be present')
      }
    }
  }
}
</script>

<style scoped>
  #login {
    width: 500px;
    border: 1px solid #CCCCCC;
    background-color: #FFFFFF;
    margin: auto;
    margin-top: 20px;
    padding: 20px;
  }
</style>
