// Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Gerando_um_n%FAmero_inteiro_aleat%F3rio_entre_dois_valores
export const getRandomInt = ( min, max ) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
