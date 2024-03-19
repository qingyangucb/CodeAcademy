import { createSlice } from "@reduxjs/toolkit";

export const quzzesSlice = createSlice({
  name: "quizzes",
  initialState: { quizzes: {} },
  reducers: {
    addQuiz: (state, action) => {
      const { id, name, topicId, cardIds } = action.payload;
      state.quizzes[id] = { id, name, topicId, cardIds };
      return state;
    },
  },
});

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quzzesSlice.actions;
export default quzzesSlice.reducer;
