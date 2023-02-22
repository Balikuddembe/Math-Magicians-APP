import calculate from "../logic/calculate";

describe('calculate', () => {
    it('should clear the calculator data object when button name is AC', () => {
      const result = calculate({ total: '10', next: '20', operation: '+' }, 'AC');
      expect(result).toEqual({ total: null, next: null, operation: null });
    });
  
    it('should append a digit to next when button name is a number', () => {
      const result = calculate({ total: '10', next: '2', operation: '+' }, '3');
      expect(result).toEqual({ total: '10', next: '23', operation: '+' });
    });
  
    it('should update next and clear the value if there is no operation', () => {
      const result = calculate({ total: null, next: '2', operation: null }, '5');
      expect(result).toEqual({ total: null, next: '25' });
    });
  
    it('should append a decimal point to next when button name is "."', () => {
      const result = calculate({ total: null, next: '2', operation: null }, '.');
      expect(result).toEqual({ total: null, next: '2.', operation: null });
    });
  
    it('should perform the operation when button name is "="', () => {
      const result = calculate({ total: '10', next: '2', operation: '+' }, '=');
      expect(result).toEqual({ total: '12', next: null, operation: null });
    });
  
    it('should toggle the sign of the current value when button name is "+/-"', () => {
      const result = calculate({ total: '10', next: '2', operation: null }, '+/-');
      expect(result).toEqual({ total: '10', next: '-2', operation: null });
    });
  
    it('should update the operation when button name is an operation', () => {
      const result = calculate({ total: '10', next: '2', operation: '+' }, '-');
      expect(result).toEqual({ total: '12', next: null, operation: '-' });
    });
  });