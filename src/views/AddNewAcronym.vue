<template>
  <div class="AddNewAcronym">
    <div class="uk-section uk-section-muted">
      <div class="uk-container">
        <ul class="uk-breadcrumb uk-margin-medium-top-">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/AcROCKnyms">All Acronyms</router-link></li>
          <li><span>Add New</span></li>
        </ul>

        <div class="uk-background-default uk-border-rounded uk-box-shadow-small">
          <div class="uk-container uk-container-xsmall uk-padding-large">
            <article class="uk-article">
              <h1 class="uk-article-title">Create A New AcROCKnym</h1>
              <div class="uk-article-content">
                <p class="uk-text-lead uk-text-muted">If you can't find an acROCKymn on the site, feel free to add your own! Simply fill out the details below.</p>
                <form class="uk-form-stacked uk-margin-medium-top"
                  id="submitForm"
                 @submit.prevent="checkForm"
                >
                  <div v-if="errors.length">
                    <b>Please correct the following error(s):</b>
                    <ul>
                      <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                    </ul>
                  </div>

                  <div class="uk-margin-bottom">
                    <label class="uk-form-label" for="acronym">Abbreviation:</label>
                    <div class="uk-form-controls">
                      <input id="acronym" class="uk-input uk-border-rounded" v-model="acronym" name="acronym" type="text" required="required">
                    </div>
                  </div>
                  <div class="uk-margin-bottom">
                    <label class="uk-form-label" for="expansion">Full Version:</label>
                    <div class="uk-form-controls">
                      <input id="expansion" class="uk-input uk-border-rounded" v-model="expansion" name="expansion" type="text" required="required">
                    </div>
                  </div>
                  <div class="uk-margin-bottom">
                    <label class="uk-form-label" for="definition">Description / Explanation / Definition:</label>
                    <div class="uk-form-controls">
                      <textarea id="definition" class="uk-textarea uk-border-rounded" v-model="definition" name="definition" rows="5" minlength="10" required=""></textarea>
                    </div>
                  </div>
                  <div class="uk-text-center">
                    <input class="uk-button uk-button-primary uk-border-rounded" type="submit" value="Save Acronym">
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
  name: 'AddNewAcronym',
  data () {
    return {
      errors: [],
      acronym: null,
      expansion: null,
      definition: null
    }
  },
  mounted () {},
  methods: {
    checkForm: function (e) {
      if (this.acronym && this.expansion && this.definition) {
        this.$http({
          method: 'POST',
          url: '/api/acronym',
          data: {
            acronym: this.acronym,
            expansion: this.expansion,
            definition: this.definition
          },
          headers: {
            'Authorization': 'Bearer ' + this.$store.getters.token
          }
        }).then(
          result => {
            this.$router.push('/AcROCKnym/' + result.data.id)
            // if successful set to logged in
          },
          // eslint-disable-next-line handle-callback-err
          error => {
            console.log('Error Registering')
          }
        )
      }
      this.errors = []
      if (!this.acronym) {
        this.errors.push('Abbreviation required.')
      }
      if (!this.expansion) {
        this.errors.push('Full Version required.')
      }
      if (!this.definition) {
        this.errors.push('Description required.')
      }

      e.preventDefault()
    }
  }
}
</script>
