<template>
  <div class="field">
    <label for="field">{{ labeeel }}</label>
    <input
      type="text"
      id="field"
      :placeholder="placeholllder"
      v-model="texxxto"
    />
    <span v-if="mensagemErro.length">{{ mensagemErro }}</span>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import { useValidaTelefone } from "../composables/validacao";
const texxxto = ref("");

const props = defineProps(["labeeel", "placeholllder"]);
const { labeeel, placeholllder } = props;

/* Desestruturação */
/* Enviando o parâmetro lá para o composable */
const { mensagemErro } = useValidaTelefone(texxxto);
</script>

<style lang="scss" scoped></style>
