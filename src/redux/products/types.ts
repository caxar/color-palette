export enum Status {
  Pending = "pending",
  Succeeded = "succeeded",
  Failed = "failed",
}

// export type ProductsEntities = {
//   id: number;
//   name: string;
//   types?: [];
// };

export interface ProductSliceState {
  // entities: ProductsEntities[];
  status: Status;
}

export type fetchProductsType = {
  url: string | undefined;
};
