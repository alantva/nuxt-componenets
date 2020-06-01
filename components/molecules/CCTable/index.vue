<template>
  <div class="cc__table__wrapper">
    <table class="cc__table" cellspacing="0" cellpadding="0">
      <thead>
        <slot name="thead" />
      </thead>
      <tbody>
        <slot name="tbody" />
      </tbody>
    </table>
    <div class="cc__table__no-results">
      <slot v-if="notHasResults" name="no-results">
        <CCLabel>Não existem dados para serem exibidos.</CCLabel>
      </slot>
    </div>
  </div>
</template>

<script>
import CCLabel from '~/components/atoms/CCLabel'

export default {
  name: 'CCTable',
  components: { CCLabel },
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    notHasResults() {
      return this.value.length === 0
    }
  }
}
</script>

<style lang="scss" scoped>
.cc__table {
  white-space: nowrap;
  min-width: 100%;
  font-size: 0.8em;

  &__wrapper {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    position: relative;
    margin: 0 auto !important;
    text-align: left;
    font-size: 1em;
    width: 90vw;
    min-height: 50vh;
  }

  &__no-results {
    position: absolute;
    width: 90vw;
    text-align: center;
    top: 50px;
  }
}
</style>
