<template>
  <label :class="getLabelClasses" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </label>
</template>

<script>
import PropsValidators from '~/utils/props-validators'

export default {
  name: 'Label',
  props: {
    color: {
      type: String,
      default: null,
      validator: PropsValidators.colors
    },
    typography: {
      type: String,
      default: null,
      validator: PropsValidators.typography
    }
  },
  computed: {
    getLabelClasses() {
      const result = ['cc__label']
      if (this.color) result.push(`cc__label__${this.color}`)
      if (this.typography) result.push(`cc__label__${this.typography}`)
      return result
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin CCLabelColor($color-name) {
  $color: t($theme, $color-name);

  &__#{$color-name} {
    color: $color;
  }
}

@mixin CCLabelColors() {
  @each $color-name in $component-colors {
    @include CCLabelColor($color-name);
  }
}

.cc__label {
  @include CCLabelColors();
  text-decoration: none;

  &[for] {
    display: flex;
    font-size: 0.8rem;
    font-weight: 900;
    cursor: pointer;
    user-select: none;
  }

  &__title {
    font-size: 2rem;
    font-weight: 900;
  }

  &__subtitle {
    font-size: 1.2rem;
    font-weight: 900;
  }

  &__caption {
    font-size: 0.8rem;
  }
}
</style>
