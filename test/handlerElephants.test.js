const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toStrictEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });

  it('retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toStrictEqual('NW');
  });

  it('retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBeLessThanOrEqual(5);
  });

  it('retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toStrictEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });

  it('Não passando argumentos a função deve retornar undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('Ao passar um argumento desconhecido, retorna null', () => {
    expect(handlerElephants('age')).toBe(null);
  });

  it('Retorna um erro se o argumento nao for uma string', () => {
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
    expect(typeof handlerElephants({})).toBe('string');
  });
});
