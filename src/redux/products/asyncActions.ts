import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchProductsType } from "./types";

export const fetchProductsAction = createAsyncThunk(
  "products/fetchProducts",
  async (url: fetchProductsType) => {
    const coloConversions = await axios.get(
      `https://www.thecolorapi.com/id?hex=${url}`
    );
    const colorScheme = await axios.get(
      `https://www.thecolorapi.com/scheme?hex=${url}`
    );

    // Promise.all([response, test])
    //   .then((values) => {
    //     const responseData = values[0].data;
    //     const testData = values[1].data;
    //     console.log("response data", responseData);
    //     console.log("test data", testData);
    //   })
    //   .catch(function (error) {
    //     // Handle any errors that may occur during the requests
    //     console.error(error);
    //   });

    const coloConversionsData = coloConversions?.data;
    const colorSchemeData = colorScheme?.data?.colors;

    const hex = coloConversionsData?.hex;
    const rgb = coloConversionsData?.rgb;
    const hsl = coloConversionsData?.hsl;
    const hsv = coloConversionsData?.hsv;
    const cmyk = coloConversionsData?.cmyk;
    const xyz = coloConversionsData?.XYZ;
    const contrast = coloConversionsData?.contrast;

    return {
      hex,
      rgb,
      hsl,
      hsv,
      cmyk,
      xyz,
      contrast,
      colorSchemeData,
    };
  }
);
