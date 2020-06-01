<template>
  <button
    type="button"
    :class="getButtonClasses"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
import PropsValidators from '~/utils/props-validators'

export default {
  name: 'CCButton',
  props: {
    color: {
      type: String,
      default: 'default',
      validator: PropsValidators.colors
    }
  },
  computed: {
    getButtonClasses() {
      const result = ['cc__button']
      if (this.color) result.push(`cc__button__${this.color}`)
      return result
    }
  }
}
</script>

<style lang="scss" scoped>
%CCButtonShape {
  border-radius: 3px;
  border-top-width: 0px;
  border-right-width: 2px;
  border-bottom-width: 2px;
  border-left-width: 0px;
  border-style: solid;

  &:active {
    border-top-width: 2px;
    border-right-width: 0px;
    border-bottom-width: 0px;
    border-left-width: 2px;
  }
}

%CCButtonSize {
  font-size: 14px;
  padding: 8px 20px;
  height: 32px;
  line-height: 14px;
}

%CCButtonTransition {
  transition: background-color 0.15s ease-out;
}

%CCButtonCursor {
  &:disabled {
    cursor: not-allowed;
  }
  &:not(:disabled) {
    cursor: pointer;
  }
}

@mixin CCButtonColor($color-name) {
  $color: t($theme, $color-name);
  $on-color: t($theme, 'on-' + $color-name);

  &__#{$color-name} {
    color: $on-color;

    &:not(:disabled) {
      border-color: darken($color, 20%);
      background-color: $color;

      &:hover {
        background-color: darken($color, 10%);
      }
    }
  }
}

@mixin CCButtonColors() {
  @each $color-name in $component-colors {
    @include CCButtonColor($color-name);
  }
}

.cc__button {
  @extend %CCButtonShape;
  @extend %CCButtonSize;
  @extend %CCButtonTransition;
  @extend %CCButtonCursor;
  @include CCButtonColors();
  /* Misc */
  outline: none;
}
</style>
