import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface lessonState {
	lessonId: number;
}

const initialState: lessonState = {
	lessonId: 1,
};

const lessonSlice = createSlice({
	name: "activeLesson",
	initialState,
	reducers: {
		setLessonId(state, action: PayloadAction<number>) {
			state.lessonId = action.payload;
		}
	}
});

export const { setLessonId } = lessonSlice.actions;

export default lessonSlice.reducer;
