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

const procSubsection = (chapter, action) => {
  const Chapter = {
    ...chapter,
    subsections: chapter.subsections.map((subsection, idx) => (
      idx === action.payload.idx
        ? { ...subsection, completed: !chapter.completed }
        : subsection
    ))
  };
  Chapter.completed = Chapter.subsections.length === Chapter.subsections.filter(s => s.completed).length;
  return Chapter;
};

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    toggleSubsection(state, action) {
      return {
        ...state,
        entries: state.entries.map(
          (chapter, idx) => (
            idx === action.payload.pIdx
              ? procSubsection(chapter, action)
              : chapter
          )
        )
      };
    },
    addChapter(state, action) {
      return {
        ...state,
        entries: state.entries.concat({ title: action.payload, subsections: [], completed: false })
      };
    },
    addSubsection(state, action) {
      return {
        ...state,
        entries: state.entries.map(
          (chapter, idx) => (
            idx === action.payload.pIdx
              ? { ...chapter, subsections: [...chapter.subsections, { title: action.payload.title, completed: false}], completed: false }
              : chapter
          )
        )
      };
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
        error: action.payload.error
      })
    }
  }
});

export const { toggleSubsection, addChapter, addSubsection } = contentSlice.actions;
export default contentSlice.reducer;
