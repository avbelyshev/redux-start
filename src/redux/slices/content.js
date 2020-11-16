import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const ROOT_URL = "https://books-82c9.restdb.io/rest";
const API_KEY = "5fa39ed4863959728838502d";

const initialState = {
  isLoading: false,
  isError: false,
  error: null,
  entries: []
};

export const fetchChapters = createAsyncThunk(
  'content/fetchAll',
  async () => {
    const response = await axios({
      method: 'GET',
      url: `${ROOT_URL}/chapters`,
      headers: {
        "x-apikey": API_KEY
      }
    });

    return response.data;
  }
);

const findChapter = (chapters, id) => {
  return chapters.find((chapter, idx) => idx === id);
};

const chapterCompleted = (chapter) => {
  return chapter.subsections.length === chapter.subsections.filter(s => s.completed).length;
};

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    toggleSubsection(state, action) {
      const chapter = findChapter(state.entries, action.payload.pIdx);
      if (!chapter) return;

      const subsection = chapter.subsections.find((subsection, idx) => idx === action.payload.idx);
      if (subsection) subsection.completed = !subsection.completed;

      chapter.completed = chapterCompleted(chapter);
    },
    addChapter(state, action) {
      const chapter = { title: action.payload, subsections: [], completed: false };
      state.entries.push(chapter);
    },
    addSubsection(state, action) {
      const chapter = findChapter(state.entries, action.payload.pIdx);
      if (chapter) {
        chapter.subsections.push({ title: action.payload.title, completed: false });
        chapter.completed = chapterCompleted(chapter);
      }
    }
  },
  extraReducers: {
    [fetchChapters.pending]: (state, action) => ({
      ...state,
      isLoading: true
    }),
    [fetchChapters.fulfilled]: (state, action) => ({
      ...initialState,
      entries: action.payload
    }),
    [fetchChapters.rejected]: (state, action) => ({
      ...state,
      isLoading: false,
      isError: true,
      error: action.error
    })
  }
});

export const { toggleSubsection, addChapter, addSubsection } = contentSlice.actions;
export default contentSlice.reducer;
