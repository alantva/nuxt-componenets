<template>
  <div>
    <CCLabel typography="subtitle" color="primary">
      Log de Alterações
    </CCLabel>
    <CCDataTableLogs v-model="tableVal" />
  </div>
</template>

<script>
import CCLabel from '~/components/atoms/CCLabel'
import CCDataTableLogs from '~/components/templates/CCDataTable/Logs'

export default {
  name: 'LogDeAlteracoes',
  components: { CCDataTableLogs, CCLabel },
  data: () => ({
    tableVal: []
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
