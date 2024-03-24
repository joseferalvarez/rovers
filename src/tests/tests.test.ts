import { sum } from "../utils/sum";
import { test, expect } from 'vitest';

test('suma de 2 numeros', () => {
    expect(sum(1, 2)).toBe(3);
})