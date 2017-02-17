// define
var MyComponent = Vue.extend({
  props: { name: String, height: {default: 'auto'}, theme: {default: false} },
  data: function () {
    return {
      styleObject: {
        height: this.height
      }
    }
  },
  template: '<div class="_test-bg"><span>{{ name }}</span>'
          + '     <div class="_test-cont" v-bind:style="styleObject"><slot></slot></div>'
          + '     <div v-if="theme" class="_test-cont -theme--dark" v-bind:style="styleObject"><slot></slot></div>'
          + '  </div>'
})

// register
Vue.component('cdx-test', MyComponent)

// create a root instance
new Vue({
  el: '#body'
})
