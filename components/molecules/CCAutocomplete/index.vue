<template>
  <div class="cc__autocomplete" @click.stop>
    <CCInput
      :value="inputVal"
      v-bind="$attrs"
      class="cc__autocomplete__input"
      @input="searchAction"
      @keydown="controlEvents"
      @click="openAction"
      @focus="focusAction"
    />
    <i :class="getStatusIconClasses" />
    <i
      v-if="value"
      class="fa fa-times cc__autocomplete__icon-clear"
      @click="clearAction"
    />
    <div v-if="isOpenToType" class="cc__autocomplete__options">
      <div class="cc__autocomplete__list">
        <div
          v-for="(option, i) in getOptions"
          :key="i"
          class="cc__autocomplete__option"
          :selected="isSelected(option)"
          @click="selectedAction(option)"
        >
          <slot v-bind="option" name="option">
            {{ option.description }}
          </slot>
        </div>
        <div v-if="search && noResultsFound" class="cc__autocomplete__no">
          <slot name="no-results">
            Não foram encontrados resultados para sua pesquisa...
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PropsValidators from '~/utils/props-validators'
import CCInput from '~/components/atoms/CCInput'

export default {
  name: 'CCAutocomplete',
  components: { CCInput },
  inheritAttrs: false,
  props: {
    value: {
      type: Object,
      default: null
    },
    options: {
      type: Array,
      default: () => [],
      validator: PropsValidators.autocompleteOptions
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    search: '',
    open: false
  }),
  computed: {
    inputVal() {
      if (this.open) return this.search
      if (this.value) return this.value.description
      return ''
    },
    getStatusIconClasses() {
      const result = ['fa', 'cc__autocomplete__icon-status']
      if (!this.isOpenToType && !this.isLoading) result.push('fa-search')
      if (this.isOpenToType) result.push('fa-keyboard-o')
      if (this.isLoading) result.push('fa-spinner fa-spin')
      return result
    },
    getOptions() {
      return this.search ? this.findSuggestions() : this.options
    },
    isOpenToType() {
      return !this.isLoading && this.open
    },
    isLoading() {
      return this.loading
    },
    noResultsFound() {
      return !this.isLoading && this.getOptions.length === 0
    }
  },
  mounted() {
    document.body.addEventListener('click', this.closeAction, true)
  },
  beforeDestroy() {
    document.body.removeEventListener('click', this.closeAction)
  },
  methods: {
    capitalize(string) {
      return string.charAt(0) + string.slice(1)
    },
    lowercase(string) {
      return string.toLowerCase()
    },
    escapeAction(e) {
      e.preventDefault()
      this.clearSearch()
    },
    tabAction() {
      this.closeAction()
      this.clearSearch()
    },
    controlEvents(e) {
      const lowerCode = this.lowercase(e.code)
      const fnName = this.capitalize(lowerCode + 'Action')
      const fn = this[fnName]
      if (typeof fn === 'function') {
        fn(e)
      }
    },
    isSelected(option) {
      return this.value && this.value.id === option.id
    },
    selectedAction(option) {
      this.closeAction()
      this.clearSearch()
      this.$emit('input', option)
    },
    searchAction(text) {
      this.search = text
      this.emitSearch()
    },
    focusAction() {
      this.openAction()
      this.emitFocus()
    },
    openAction() {
      this.open = true
      this.clearSearch()
    },
    clearAction() {
      this.clearSearch()
      this.$emit('input', null)
    },
    closeAction() {
      this.open = false
    },
    clearSearch() {
      this.search = ''
    },
    findSuggestions() {
      const searchLower = this.search.toLowerCase()
      return this.options.filter((option) => {
        const textLower = this.lowercase(option.description)
        return textLower.includes(searchLower)
      })
    },
    emitFocus() {
      this.$emit('focus', this.search)
    },
    emitSearch() {
      this.$emit('search', this.search)
    }
  }
}
</script>

<style lang="scss" scoped>
%CCAutocompleteIcon {
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  height: 30px;
  width: 30px;
  position: absolute;
  user-select: none;
  transition: transform 0.2s ease-in;
}

@mixin CCAutocompleteColors() {
  &__options {
    box-shadow: 0 0 3px t($theme, 'text');
    background-color: t($theme, 'on-text');
  }

  &__option {
    &:hover,
    &[selected] {
      color: t($theme, 'on-primary');
    }
    &:hover {
      background-color: lighten(t($theme, 'primary'), 10%);
    }
    &[selected] {
      background-color: t($theme, 'primary');
    }
  }

  &__icon {
    &-status,
    &-clear {
      color: t($theme, 'text');
    }
  }
}

.cc__autocomplete {
  @include CCAutocompleteColors();
  width: 100%;
  position: relative;
  display: inline-block;

  &__input {
    padding-right: 60px !important;
  }

  &__list {
    position: relative;
  }

  &__options {
    border-radius: 4px;
    max-height: 200px;
    min-width: 100%;
    position: absolute;
    overflow-x: hidden;
    z-index: 20;
    text-align: left;
  }

  &__option {
    padding: 5px 10px;
    white-space: nowrap;
    cursor: pointer;
    transition: background-color 0.1s ease-in, color 0.1s ease-in;
  }

  &__no {
    padding: 10px;
  }

  &__icon {
    &-status {
      @extend %CCAutocompleteIcon;
      right: 3px;
      pointer-events: none;
    }

    &-clear {
      @extend %CCAutocompleteIcon;
      right: 28px;
      cursor: pointer;
    }
  }
}
</style>
