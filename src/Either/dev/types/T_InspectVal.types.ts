/** @since 1.0.5 */
export type T_InspectVal<T extends 'Left' | 'Right'> = `${T}(${string})`;
