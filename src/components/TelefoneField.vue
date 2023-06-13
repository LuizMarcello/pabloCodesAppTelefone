<template>
  <h2>Telefone Field</h2>
  <div class="field">
    <label for="field">Telefone</label>
    <input
      type="text"
      id="field"
      placeholder="Digite somente números"
      v-model="texxxto"
    />
    <span v-if="erroMensagem.length">{{ erroMensagem }}</span>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import { useValidaTelefone } from "../composables/validacao";
const texxxto = ref("");

/* Desestruturação */
/* Enviando o parâmetro lá para o composable "validacao.js" */
const { erroMensagem } = useValidaTelefone(texxxto);
</script>

<style lang="scss" scoped></style>
