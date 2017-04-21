import { ExponentialStrengthPipe } from './exponential-strength.pipe';

describe('ExponentialStrengthPipe', () => {
  const pipe = new ExponentialStrengthPipe();

  it('should create', () => { expect(pipe).toBeTruthy(); });
  it('0^2 = 0', () => { expect(pipe.transform(0, '2')).toBe(0); });
  it('0^3 = 0', () => { expect(pipe.transform(0, '3')).toBe(0); });
  it('1^2 = 1', () => { expect(pipe.transform(1, '2')).toBe(1); });
  it('1^3 = 1', () => { expect(pipe.transform(1, '3')).toBe(1); });
  it('3^1 = 3', () => { expect(pipe.transform(3, '1')).toBe(3); });
  it('4^1 = 4', () => { expect(pipe.transform(4, '1')).toBe(4); });
  it('2^2 = 4', () => { expect(pipe.transform(2, '2')).toBe(4); });
  it('2^3 = 8', () => { expect(pipe.transform(2, '3')).toBe(8); });
  it('3^2 = 9', () => { expect(pipe.transform(3, '2')).toBe(9); });
  it('3^? = 9', () => { expect(pipe.transform(3, '?')).toBe(3); });
  it('4^5 = 1024', () => { expect(pipe.transform(4, '5')).toBe(1024); });
});
