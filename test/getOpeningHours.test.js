const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  const zooClosed = 'The zoo is closed';
  it('Não passando argumentos. Deverá retornar o objeto:', () => {
    expect(getOpeningHours()).toStrictEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });

  it('Para os argumentos Monday e 09:00-AM deve retornar a string:', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe(zooClosed);
  });

  it('Para os argumentos Tuesday e 09:00-AM deve retornar a string', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });

  it('Para os argumentos Wednesday e 09:00-PM deve retornar a string', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe(zooClosed);
  });

  it('Para os argumentos Saturday e C9:00-AM deve lançar uma exceção com a mensagem', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
  });

  it('Para os argumentos Friday e 09:00-ZM deve lançar uma exceção com a mensagem', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('Para os argumentos Sunday e 09:c0-AM deve lançar uma exceção com a mensagem:', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow('The minutes should represent a number');
  });

  it('Para os argumentos Friday e 10:00-AM deve retornar a string The zoo is open', () => {
    expect(getOpeningHours('Friday', '10:00-PM')).toBe('The zoo is closed');
  });

  it('Para os argumentos Monday e 13:00-AM lança uma exceção com a mensagem: The hour must be between 0 and 12', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
  });

  it('Retorna um erro se o dia da semana for invalido', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrowError('The day must be valid. Example: Monday');
  });

  it('Retorna um erro se o minuto não seja um número', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrowError('The minutes should represent a number');
  });

  it('Retorna um erro se hora nao seja um número', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrowError('The hour should represent a number');
  });

  it('Verificando erros no argumento de minutos', () => {
    const errorMinutes = '"The minutes must be between 0 and 59"';
    expect(() => getOpeningHours('Friday', '10:80-AM')).toThrow(errorMinutes);
    expect(() => getOpeningHours('Tuesday', '4:90-PM')).toThrow(errorMinutes);
    expect(() => getOpeningHours('Tuesday', '07:hh-AM')).toThrow(errorMinutes);
  });
});
