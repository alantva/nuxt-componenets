<template>
  <div>
    <CCLabel typography="title" @click="navBack">
      Central de Cadastros
    </CCLabel>
    <nuxt />
  </div>
</template>

<script>
import CCLabel from '~/components/atoms/CCLabel'

export default {
  name: 'CentralDeCadastros',
  components: { CCLabel },
  methods: {
    navBack() {
      this.$router.push('/central-de-cadastros')
    }
  }
}
</script>
