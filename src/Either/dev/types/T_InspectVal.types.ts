/**
 * @since 1.0.6
 */
export type T_InspectVal<T extends 'Left' | 'Right'> = `${T}(${string})`;
