<template>
  <CCButton v-bind="$attrs" v-on="$listeners">
    <i :class="getIconClasses" />
    <slot />
  </CCButton>
</template>

<script>
import CCButton from '~/components/atoms/CCButton'

export default {
  name: 'CCIconButton',
  components: { CCButton },
  inheritAttrs: false,
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  computed: {
    getIconClasses() {
      const result = ['fa']
      if (this.icon) result.push(`fa-${this.icon}`)
      return result
    }
  }
}
</script>
