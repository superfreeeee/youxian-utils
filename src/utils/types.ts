// ========================================
/**
 * Advanced array types
 */
// ========================================
// Extend array type
export type AsArray<T> = T extends any[] ? T : [T];
// Array with fixed length

/**
 * Array type with fixed length
 */
export type FixedSizeArray<T, L extends number> = L extends 0
  ? void[]
  : ReadonlyArray<T> & { length: L; 0: T }; // use 0 to compatible to literal array definition

/**
 * Transform T[] type into FixedSizeArray<T>
 *
 * For tuple type, it will be transform into union array
 * example:
 * [string, number] => Array<string | number> => SizeFreezeArray<Array<string | number>>
 */
export type SizeFreezeArray<T extends any[]> = T extends Array<infer U>
  ? FixedSizeArray<U, T['length']>
  : FixedSizeArray<any, T['length']>; // somehow ts can't infer U

// ========================================
/**
 * Advance Function types
 */
// ========================================
export type AsFunction<T> = T extends Function ? T : never;
