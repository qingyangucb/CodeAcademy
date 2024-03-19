import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
  name: "topics",
  initialState: { topics: {} },
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = { id, name, icon, quizIds: [] };
      return state;
    },
    addQuizId: (state, action) => {
      const { topicId, quizId } = action.payload;
      state.topics[topicId].quizIds.push(quizId);
      return state;
    },
  },
});

export const selectTopics = (state) => state.topics.topics;
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
