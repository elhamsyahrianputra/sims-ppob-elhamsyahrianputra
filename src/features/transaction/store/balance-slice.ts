import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface BalanceState {
	balance: number;
	isLoading: boolean;
	error: string | null;
}

const initialState: BalanceState = {
	balance: 0,
	isLoading: false,
	error: null,
};

const balanceSlice = createSlice({
	name: "balance",
	initialState,
	reducers: {
		setBalance: (state, action: PayloadAction<number>) => {
			state.balance = action.payload;
			state.error = null;
		},
		updateBalance: (state, action: PayloadAction<number>) => {
			state.balance += action.payload;
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		setError: (state, action: PayloadAction<string>) => {
			state.error = action.payload;
		},
		resetBalance: (state) => {
			state.balance = 0;
			state.error = null;
		},
	},
});

export const { setBalance, updateBalance, setLoading, setError, resetBalance } =
	balanceSlice.actions;
export default balanceSlice.reducer;
