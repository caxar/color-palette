export enum Status {
  Pending = "pending",
  Succeeded = "succeeded",
  Failed = "failed",
}

export type ColorProps = {
  cmyk: {
    value: string;
  };
  hex: {
    value: string;
  };
  hsl: {
    value: string;
  };
  rgb: {
    value: string;
  };
  xyz: {
    value: string;
  };
  contrast: {
    value: string;
  };
};

export interface ProductSliceState {
  entities: [];
  infoColors: ColorProps[];
  status: Status;
}

export type fetchProductsType = {
  url: string;
};
