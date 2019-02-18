export const AND = (...ps) => (value) => ps.every((p) => p(value));
export const OR = (...ps) => (value) => ps.some((p) => p(value));
