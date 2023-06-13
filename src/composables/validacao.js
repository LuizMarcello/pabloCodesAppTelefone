import {
  ref,
  computed,
  watch,
  readonly
} from 'vue'

export const useValidaTelefone = (texxxto) => {
  const mensagemErro = ref("");
  const REGEX_TELEFONE =
    "^((1[1-9])|([2-9][0-9]))((3[0-9{3}[0-9]{4})|(9[0-9]{3}[0-9]{5}))$";

  const verificaCampo = () => {
    if (texxxto.value === "") {
      mensagemErro.value = "Campo Obrigatório";
      return;
    }

    const validador = new RegExp(REGEX_TELEFONE);

    mensagemErro.value = validador.test(texxxto.value) ?
      "" :
      "Digite um telefone válido";
  };


  const validaCampo = (telefone) => {
    if (telefone === "") {
      return "Campoo Obrigatório";
      return;
    }

    const validador = new RegExp(REGEX_TELEFONE);

    return validador.test(texxxto.value) ?
      "" :
      "Digite um telefonee válido";
  };

  /* Propriedade computada */
  const erroMensagem = computed(() => validaCampo(texxxto.value))

  /* watch: 1º parâmetro: o que vai ouvir
            2º parâmetro: A ação, no caso, uma arrow-function
            invocando "verificaCampo()". */
  watch(texxxto, () => verificaCampo())

  /* Para este "composable" ser usado no componente */
  return {
    mensagemErro: readonly(mensagemErro),
    verificaCampo,
    erroMensagem: readonly(erroMensagem)
  }
};