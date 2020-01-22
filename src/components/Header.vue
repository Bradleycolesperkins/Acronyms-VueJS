<template>
  <div id="header" >
    <header class="uk-background-primary uk-background-norepeat uk-background-cover uk-background-center-center uk-light"
            :style="{ backgroundImage: 'url(' + require('@/assets/images/header.jpg') + ')' }"
    >
      <nav class="uk-navbar-container">
        <div class="uk-container">
          <div data-uk-navbar class="uk-navbar">
            <div class="uk-navbar-left">
              <router-link to="/" class="uk-navbar-item uk-logo uk-visible@m" >ACRO<sub>ck</sub>NYM</router-link>
              <a class="uk-navbar-toggle uk-hidden@m" href="#offcanvas-docs" data-uk-toggle><span
                data-uk-navbar-toggle-icon></span> <span class="uk-margin-small-left">Articles</span></a>
            </div>
            <div class="uk-navbar-center uk-hidden@m">
              <router-link to="/" class="uk-navbar-item uk-logo" >ACRO<sub>ck</sub>NYM</router-link>
            </div>
            <div class="uk-navbar-right">
              <ul class="uk-navbar-nav uk-visible@m">
                <li v-if="isLoggedIn">
                  <div class="uk-navbar-item">
                    <router-link to="/Add-New-AcROCKnym" class="uk-button uk-button-small uk-button-primary">Add New</router-link>
                  </div>
                </li>
                <li class="uk-active">
                  <router-link to="/">Home</router-link>
                </li>
                <li>
                  <router-link to="/AcROCKnyms">All Acro<sub>ck</sub>nyms</router-link>
                </li>
                <li v-if="isLoggedIn">
                  <router-link to="/Register">Register</router-link>
                </li>
                <li v-if="!isLoggedIn">
                  <div class="uk-navbar-item">
                    <router-link to="/Login" class="uk-button uk-button-small uk-button-primary-outline" >Login</router-link>
                  </div>
                </li>
                <li v-if="isLoggedIn">
                <div class="uk-navbar-item">
                  <div v-on:click="logout()" class="uk-button uk-button-small uk-button-primary-outline" >Log Out</div>
                </div>
                </li>
              </ul>
              <a class="uk-navbar-toggle uk-hidden@m" href="#offcanvas" data-uk-toggle><span
                data-uk-navbar-toggle-icon></span> <span class="uk-margin-small-left">Menu</span></a>
            </div>
          </div>
        </div>
      </nav>
      <div class="uk-section uk-position-relative uk-position-z-index" data-uk-scrollspy="cls: uk-animation-slide-bottom-medium; repeat: true">
        <div class="uk-container">
          <h1 class="uk-text-center uk-margin-remove-top">Search For an Acro<sub>ck</sub>nym:</h1>
          <div class="hero-search uk-margin-medium-top">
            <form class="uk-search uk-search-default uk-width-1-1" name="search-hero" onsubmit="return false;">
              <span data-uk-search-icon="ratio: 1.2"></span>
              <input id="search-hero" class="uk-search-input uk-form-large uk-border-rounded" type="search"
                     placeholder="Search here"
                     autocomplete="off"
                     data-minchars="1"
                     v-model="search"
                     @input="onChange"
              >
              <div class="awesomplete">
                <ul role="listbox" id="awesomplete_list_1" v-show="isOpen" class="autocomplete-results">
                  <li role="option" aria-selected="true" id="awesomplete_list_1_item_0" v-for="(result, i) in results"
                      :key="i"
                      class="autocomplete-result"
                      @click="closeSearch">
                    <router-link
                      v-bind:to="'/AcROCKnym/' + result.id"
                      class="uk-link uk-link-hover2"
                    >
                      <span class="uk-text-bold">{{ result.acronym }}</span> - {{result.expansion}}
                    </router-link>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      search: '',
      isOpen: false,
      results: []
    }
  },
  props: {
    items: {
      type: Array,
      required: false,
      default: () => ['a', ' b', 'c']
    }
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn
    }
  },
  methods: {
    logout: function () {
      this.$store.dispatch('logout')
    },
    onChange: function () {
      this.isOpen = true
      this.filterResults()
    },
    closeSearch: function () {
      this.isOpen = false
      this.search = ''
    },
    filterResults: function () {
      this.$http({method: 'GET', url: '/api/acronyms/search?q=' + this.search}).then(
        result => {
          // console.log('get acronym', result.data)
          this.results = result.data
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
