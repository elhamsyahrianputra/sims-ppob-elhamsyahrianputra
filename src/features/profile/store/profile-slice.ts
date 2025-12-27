import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ProfileState {
	email: string;
	first_name: string;
	last_name: string;
	profile_image: string;
	isLoading: boolean;
	error: string | null;
}

const initialState: ProfileState = {
	email: "",
	first_name: "",
	last_name: "",
	profile_image: "",
	isLoading: false,
	error: null,
};

const profileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {
		setProfile: (
			state,
			action: PayloadAction<Omit<ProfileState, "isLoading" | "error">>,
		) => {
			state.email = action.payload.email;
			state.first_name = action.payload.first_name;
			state.last_name = action.payload.last_name;
			state.profile_image = action.payload.profile_image;
			state.error = null;
		},
		updateProfileImage: (state, action: PayloadAction<string>) => {
			state.profile_image = action.payload;
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		setError: (state, action: PayloadAction<string>) => {
			state.error = action.payload;
		},
		resetProfile: () => initialState,
	},
});

export const {
	setProfile,
	updateProfileImage,
	setLoading,
	setError,
	resetProfile,
} = profileSlice.actions;
export default profileSlice.reducer;
