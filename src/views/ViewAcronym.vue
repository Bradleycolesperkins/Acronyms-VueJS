<template>
  <div class="listAcronyms">
    <div class="uk-section uk-section-muted">
      <div class="uk-container">
        <ul class="uk-breadcrumb uk-margin-medium-top-">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/AcROCKnyms">All</router-link></li>
          <li><span>{{acronym.acronym}}</span></li>
        </ul>
        <div class="uk-background-default uk-border-rounded uk-box-shadow-small">
          <div class="uk-container uk-container-xsmall uk-padding-large">
            <article class="uk-article">
              <h1 class="uk-article-title">{{acronym.acronym}}</h1>
              <p class="uk-text-lead uk-text-muted">{{acronym.expansion}}</p>
              <div class="uk-article-content">
                <p>{{acronym.definition}}</p>
                <div class="uk-article-meta uk-margin uk-flex uk-flex-middle">
                  <img class="uk-border-circle uk-avatar-small" src="@/assets/images/unknown_user.png" alt="Sara Galen">
                  <div>
                    Written by {{acronym.user.name}}
                    <time class="uk-margin-small-right" datetime="2019-10-05">{{acronym.created_at}}</time><br>
                    Updated <time datetime="2019-12-30">December 30 2019</time>
                  </div>
                </div>
                <div class="share uk-text-center uk-margin-large-top">
                  <p>Did this Acro<sub>ck</sub>nym answer what you were looking for?</p>
                  <a href="#" title="Dislike"><span class="uk-icon-button uk-text-primary" data-uk-icon="icon: close; ratio: 1.2"><i class="fa fa-times"></i></span></a>
                  <a class="uk-margin-small-left"
                     href="#" title="Like"><span class="uk-icon-button uk-text-primary" data-uk-icon="icon: check; ratio: 1.2"><i class="fa fa-check"></i></span></a>
                </div>
              </div>
              <div class="uk-margin-large-top paginate-post">
                <div class="uk-child-width-expand@s uk-grid-large uk-grid" data-uk-grid>
                  <div v-if="acronym.previous">
                    <h5>{{acronym.previous.acronym}}</h5>
                    <div>
<!--                      <div v-on:click="goTo(acronym.previous.id)">asdasd</div>-->

                      <router-link :to="{ name: 'ViewAcronym', params: { id: acronym.previous.id }}" class="uk-remove-underline hvr-back">
                        <i class="fa fa-arrow-left"></i>&nbsp;Previous
                      </router-link>
                    </div>
                  </div>
                  <div class="uk-text-right" v-if="acronym.next">
                    <h5>{{acronym.next.acronym}}</h5>
                    <div>
                      <router-link :to="{ name: 'ViewAcronym', params: { id: acronym.next.id }}" class="uk-remove-underline hvr-forward">
                        Next&nbsp;<i class="fa fa-arrow-right"></i>
                      </router-link>
                    </div>
                  </div>
                </div>
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
  name: 'ListAcronym',
  data () {
    return {
      msg: 'Not Logged in',
      acronym: {
        user: {
        }
      },
      previous: null,
      next: null
    }
  },
  mounted () {
    this.getAcronym(this.$route.params.id)
  },
  methods: {
    getAcronym (id) {
      this.$http({method: 'GET', url: '/api/acronym/' + id}).then(
        result => {
          // console.log('get acronym', result.data)
          this.acronym = result.data
        },
        // eslint-disable-next-line handle-callback-err
        error => {
          console.log('Error getting acronyms')
        }
      )
    }
  },
  watch: {
    '$route.params.id': {
      handler: function (response) {
        this.getAcronym(response)
      }
    }
  }
}
</script>
