<template>
  <div>
    <CCLabel typography="subtitle" color="primary">
      Manutenção de Cadastros
    </CCLabel>
    <CCDataTableRegister v-model="tableVal" />
  </div>
</template>

<script>
import data from './data'
import CCLabel from '~/components/atoms/CCLabel'
import CCDataTableRegister from '~/components/templates/CCDataTable/Register'

export default {
  name: 'ManutencaoDeCadastros',
  components: { CCDataTableRegister, CCLabel },
  data: () => ({
    tableVal: [] || data
  })
}
</script>

<style scoped>
.cc__label__subtitle {
  position: relative;
  top: -10px;
  right: -40px;
}
</style>
