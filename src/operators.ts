type Λ<T extends boolean> = (value: any) => T;

type AND = {
  <A extends boolean>
  (λA: Λ<A>): Λ<A>;

  <A extends boolean, B extends boolean>
  (λA: Λ<A>, λB: Λ<B>): Λ<A & B>;

  <A extends boolean, B extends boolean, C extends boolean>
  (λA: Λ<A>, λB: Λ<B>, λC: Λ<C>): Λ<A & B & C>;

  <A extends boolean, B extends boolean, C extends boolean, D extends boolean>
  (λA: Λ<A>, λB: Λ<B>, λC: Λ<C>, λD: Λ<D>): Λ<A & B & C & D>;

  <A extends boolean, B extends boolean, C extends boolean, D extends boolean, E extends boolean>
  (λA: Λ<A>, λB: Λ<B>, λC: Λ<C>, λD: Λ<D>, λE: Λ<E>): Λ<A & B & C & D & E>;

  (...λs: Λ<boolean>[]): Λ<boolean>;
};

export const AND: AND = (...λs: Λ<boolean>[]) => (value: any) => λs.every((λ) => λ(value));

type OR = {
  <A extends boolean>
  (λA: Λ<A>): Λ<A>;

  <A extends boolean, B extends boolean>
  (λA: Λ<A>, λB: Λ<B>): Λ<A | B>;

  <A extends boolean, B extends boolean, C extends boolean>
  (λA: Λ<A>, λB: Λ<B>, λC: Λ<C>): Λ<A | B | C>;

  <A extends boolean, B extends boolean, C extends boolean, D extends boolean>
  (λA: Λ<A>, λB: Λ<B>, λC: Λ<C>, λD: Λ<D>): Λ<A | B | C | D>;

  <A extends boolean, B extends boolean, C extends boolean, D extends boolean, E extends boolean>
  (λA: Λ<A>, λB: Λ<B>, λC: Λ<C>, λD: Λ<D>, λE: Λ<E>): Λ<A | B | C | D | E>;

  (...λs: Λ<boolean>[]): Λ<boolean>;
};

export const OR: OR = (...λs: Λ<boolean>[]) => (value: any) => λs.some((λ) => λ(value));
