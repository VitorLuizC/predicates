declare type P<T extends boolean> = (value: any) => T;
export declare const AND: {
    <A extends boolean>(pA: P<A>): P<A>;
    <A extends boolean, B extends boolean>(pA: P<A>, pB: P<B>): P<A & B>;
    <A extends boolean, B extends boolean, C extends boolean>(pA: P<A>, pB: P<B>, pC: P<C>): P<A & B & C>;
    <A extends boolean, B extends boolean, C extends boolean, D extends boolean>(pA: P<A>, pB: P<B>, pC: P<C>, pD: P<D>): P<A & B & C & D>;
    <A extends boolean, B extends boolean, C extends boolean, D extends boolean, E extends boolean>(pA: P<A>, pB: P<B>, pC: P<C>, pD: P<D>, pE: P<E>): P<A & B & C & D & E>;
    (...ps: P<boolean>[]): P<boolean>;
};
export declare const OR: {
    <A extends boolean>(pA: P<A>): P<A>;
    <A extends boolean, B extends boolean>(pA: P<A>, pB: P<B>): P<A | B>;
    <A extends boolean, B extends boolean, C extends boolean>(pA: P<A>, pB: P<B>, pC: P<C>): P<A | B | C>;
    <A extends boolean, B extends boolean, C extends boolean, D extends boolean>(pA: P<A>, pB: P<B>, pC: P<C>, pD: P<D>): P<A | B | C | D>;
    <A extends boolean, B extends boolean, C extends boolean, D extends boolean, E extends boolean>(pA: P<A>, pB: P<B>, pC: P<C>, pD: P<D>, pE: P<E>): P<A | B | C | D | E>;
    (...ps: P<boolean>[]): P<boolean>;
};
export {};
