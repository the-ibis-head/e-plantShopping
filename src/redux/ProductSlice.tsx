import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import plants from "@/data/plants";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    return plants;
  }
);

const initialState = {
  list: [],
  categories: ["Aromatic Plants", "Medicinal Plants", "Ornamental Plants"],
  loading: false,
  error: null,
};

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.list = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setProducts } = ProductSlice.actions;
export default ProductSlice.reducer;
