<template>
  <div class="cc__link-wrapper">
    <CCLabel class="cc__link" @click="navRegistrationsMaintenance">
      Manutenção de Cadastros
    </CCLabel>
    <CCLabel class="cc__link" @click="navContractsMaintenance">
      Manutenção de Contratos
    </CCLabel>
    <CCLabel class="cc__link" @click="navChangeLog">
      Log de Alterações
    </CCLabel>
  </div>
</template>

<script>
import CCLabel from '~/components/atoms/CCLabel'

export default {
  name: 'CentralDeCadastros',
  components: { CCLabel },
  methods: {
    navChangeLog() {
      this.$router.push('/central-de-cadastros/log-de-alteracoes')
    },
    navContractsMaintenance() {
      this.$router.push('/central-de-cadastros/manutencao-de-contratos')
    },
    navRegistrationsMaintenance() {
      this.$router.push('/central-de-cadastros/manutencao-de-cadastros')
    }
  }
}
</script>

<style lang="scss" scoped>
.cc__link-wrapper {
  display: flex;
  flex-flow: row wrap;

  .cc__link {
    padding: 0 5px;
  }
}
</style>
