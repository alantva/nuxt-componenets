<template>
  <div>
    <CCLabel typography="subtitle" color="primary">
      Manutenção de Contratos
    </CCLabel>
    <nuxt />
  </div>
</template>

<script>
import CCLabel from '~/components/atoms/CCLabel'

export default {
  name: 'ManutencaoDeContratos',
  components: { CCLabel }
}
</script>

<style scoped>
.cc__label__subtitle {
  position: relative;
  top: -10px;
  right: -40px;
}
</style>
