import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {setQuery} from "../redux/features/searchSlice"

const SearchBar = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch(); 
    const SubmitHandler = (e) => {
        e.preventDefault();
        console.log("form submitted");
        dispatch(setQuery(text));
        setText("");
    };
    return (
        <div>
            <form
                onSubmit={(e) => {
                    SubmitHandler(e);
                }}
                className="flex bg-(--c1) gap-5 p-10"
            >
                <input
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                    required
                    className="w-full border-2 px-4 py-2 text-xl rounded-xl"
                    type="text"
                    placeholder="Search anything..."
                />
                <button className="active:scale-95 border-2 px-4 py-2 rounded-xl cursor-pointer">
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
