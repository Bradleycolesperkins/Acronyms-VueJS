<template>
  <div>
    <categories></categories>
    <faq></faq>
    <team></team>
  </div>
</template>

<script>
import Categories from '@/components/Categories'
import Faq from '@/components/Faq'
import Team from '@/components/Team'
export default {
  name: 'Index',
  components: {
    'categories': Categories,
    'faq': Faq,
    'team': Team
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
