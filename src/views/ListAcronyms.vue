<template>
  <div class="listAcronyms">
    <div class="uk-section uk-section-muted">
      <div class="uk-container">
        <ul class="uk-breadcrumb">
          <li><router-link to="/">Home</router-link></li>
          <li><span>All</span></li>
        </ul>
        <div class="uk-grid-small uk-grid" data-uk-grid="">
          <div class="uk-width-auto uk-text-primary uk-first-column">
            <span class="uk-margin-xsmall-top uk-icon" data-uk-icon="icon: cog; ratio: 2.6"><svg width="52" height="52" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="cog"><circle fill="none" stroke="#000" cx="9.997" cy="10" r="3.31"></circle><path fill="none" stroke="#000" d="M18.488,12.285 L16.205,16.237 C15.322,15.496 14.185,15.281 13.303,15.791 C12.428,16.289 12.047,17.373 12.246,18.5 L7.735,18.5 C7.938,17.374 7.553,16.299 6.684,15.791 C5.801,15.27 4.655,15.492 3.773,16.237 L1.5,12.285 C2.573,11.871 3.317,10.999 3.317,9.991 C3.305,8.98 2.573,8.121 1.5,7.716 L3.765,3.784 C4.645,4.516 5.794,4.738 6.687,4.232 C7.555,3.722 7.939,2.637 7.735,1.5 L12.263,1.5 C12.072,2.637 12.441,3.71 13.314,4.22 C14.206,4.73 15.343,4.516 16.225,3.794 L18.487,7.714 C17.404,8.117 16.661,8.988 16.67,10.009 C16.672,11.018 17.415,11.88 18.488,12.285 L18.488,12.285 Z"></path></svg></span>
          </div>
          <div class="uk-width-expand">
            <h1 class="uk-article-title uk-margin-remove">All Acro<sub>ck</sub>nyms</h1>
            <p class="uk-text-lead uk-text-muted uk-margin-small-top">At ROCK acronyms are used to form words from the initial letters or groups of letters of words in a set phrase
              or series of words and pronounced as a separate word. Often used to speed up references to certain work processes.</p>
          </div>
        </div>
        <div class="uk-margin-medium-top">
          <div
            v-for="(acronym) in acronyms" v-bind:key="acronym.id" v-bind:acronym="acronym.acronym" v-bind:description="acronym.description"
            class="uk-card uk-card-category uk-card-default uk-card-hover uk-card-body uk-inline uk-border-rounded uk-width-1-1">
            <router-link v-bind:to="'/AcROCKnym/' + acronym.id" class="uk-position-cover" ></router-link>
            <h3 class="uk-card-title uk-margin-remove uk-text-primary">{{acronym.acronym}}</h3>
            <p class="uk-margin-small-top">{{acronym.expansion}}</p>
            <div class="uk-article-meta uk-flex uk-flex-middle">
              <img class="uk-border-circle uk-avatar-small" alt="icon" src="@/assets/images/unknown_user.png">
              <div>
                Written by {{acronym.user.name}}
                <time class="uk-margin-small-right" datetime="2019-10-05">{{acronym.created_at}}</time>
<!--                <br>-->
<!--                Updated <time datetime="2019-12-30">December 30 2019</time>-->
              </div>
            </div>
          </div>
        </div>
<!--        <div class="uk-text-center uk-margin-medium-top">-->
<!--          <a href="#"><div class="uk-margin-small-right uk-text-normal uk-icon uk-spinner" data-uk-spinner="ratio: 0.6"><svg width="18" height="18" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" data-svg="spinner"><circle fill="none" stroke="#000" cx="15" cy="15" r="14" style="stroke-width: 1.66667px;"></circle></svg></div>Load more</a>-->
<!--        </div>-->
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ListAcronyms',
  data () {
    return {
      msg: 'Not Logged in',
      acronyms: []
    }
  },
  mounted () {
    this.getAcronyms()
    console.log(process.env.ROOT_API)
  },
  methods: {
    getAcronyms () {
      this.$http({method: 'GET', url: '/api/acronyms'}).then(
        result => {
          console.log('get acronyms', result.data)
          this.acronyms = result.data
        },
        // eslint-disable-next-line handle-callback-err
        error => {
          console.log('Error getting acronyms')
        }
      )
    }
  }
}
</script>
