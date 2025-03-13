import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name:'books',
    initialState:{
        allBooks:[],
        popularBooks:[],
        filteredBooks:[],
        genreList:[]
    },
    reducers:{
        addBook:(state,action)=>{
            state.allBooks = action.payload;
        },
        updatePopularBooks:(state,action)=>{
            state.popularBooks = action.payload;
        },
        updateFilteredBooks:(state,action)=>{
            state.filteredBooks = action.payload;
        },
        updateGenreList:(state,action)=>{
            state.genreList = action.payload;
        },
        updateBookList:(state,action)=>{
            state.allBooks.push(action.payload)
        }
    }
});


export const {addBook, updateFilteredBooks, updatePopularBooks, updateGenreList, updateBookList} = bookSlice.actions;

export default bookSlice.reducer;

