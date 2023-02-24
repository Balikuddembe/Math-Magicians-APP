import operate from '../logic/operate';

describe('operate function', () => {
  test('adds two numbers', () => {
    expect(operate('1', '2', '+')).toBe('3');
  });
  it('subtracts two numbers', () => {
    expect(operate('5', '3', '-')).toBe('2');
  });

  it('multiplies two numbers', () => {
    expect(operate('2', '3', 'x')).toBe('6');
  });

  it('divides two numbers', () => {
    expect(operate('6', '3', '÷')).toBe('2');
  });

  it('returns an error message when trying to divide by 0', () => {
    expect(operate('6', '0', '÷')).toBe("Can't divide by 0.");
  });

  it('returns the modulo when performing a modulo operation', () => {
    expect(operate('7', '3', '%')).toBe('1');
  });

  it('returns an error message when trying to find modulo when dividing by 0', () => {
    expect(operate('6', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  it('throws an error for an unknown operation', () => {
    expect(() => operate('2', '3', 'unknown')).toThrow("Unknown operation 'unknown'");
  });
});
