<template>
  <div id="faq">
    <div class="uk-section uk-section-muted">
      <div class="uk-container uk-container-small">
        <h2 class="uk-text-center">Frequently asked questions</h2>

        <div class="accordions">
          <ul class="uk-margin-medium-top uk-accordion" data-uk-accordion="multiple: true">
            <li v-for="(row, id) in rows" v-bind:key="id" v-bind:class="{'uk-open': row.open}">
              <dt class="uk-accordion-title uk-box-shadow-hover-small pointer" v-on:click="row.open = !row.open">{{ row.term }}</dt>
              <div class="uk-article-content uk-accordion-content link-primary" v-if="row.open" v-html="row.details">
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Categories',
  data () {
    return {
      rows: {
        q1: {
          term: 'Do you provide customer support?',
          details: '<p>Having support for your purchased item means that we will be available to you to iron out any potential issues you have in using the item.</p> <h4>The item support period</h4> <p>The item includes support for 6 months from the purchase date. If you’re about to purchase the item, you’ll have the option to purchase extended item support, increasing the item support period up to a maximum of 12 months from the date of purchase.</p> <h4>What else is included?</h4> <p>Answering questions about how to use the item Answering technical questions about the item (and included third party assets) Help with defects in the item or included third-party assets Item updates to ensure ongoing compatibility and to resolve security vulnerabilities Updates to ensure the item works as described and is protected against major security concerns Included version updates for all items</p> <h4>What’s not included in item support?</h4> <p>Item support does not include services to modify or extend the item beyond the original features, style and functionality described on the item page. For customization services that will help you tailor the item to your specific requirements, we recommend contacting us to see if we privately offer paid customization service.</p> <ul> <li>Installation of the item</li> <li>Hosting, server environment, or software</li> <li>Help from authors of included third-party assets</li> </ul> <h4>Contacting support</h4> <p>Support is provided Mon - Fri through item <a href="#">support</a> page.</p>',
          open: false
        },
        q2: {
          term: 'Are updates and bug fixes included in the cost of the item?',
          details: '<p>Regardless of whether you have support or not:</p> <ul> <li>When we release an update, it will be available for you to download for free</li> <li>You can report bugs</li> <li>You can expect us to keep the item in good working order, working as described and protected against major security issues</li> </ul>',
          open: false
        }
      }
    }
  }
}
</script>
