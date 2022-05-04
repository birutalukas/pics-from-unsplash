import React, { useState } from "react";
import Card from "./UI/Card";
const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        props.onSubmit(searchValue);
    };
    return (
        <Card>
            <form className="ui form" onSubmit={onSubmitHandler}>
                <div className="field">
                    <label>Image Search</label>
                    <div className="ui action input">
                        <input
                            value={searchValue}
                            type="text"
                            onChange={(e) => {
                                setSearchValue(e.target.value);
                            }}
                        />
                        <button className="ui button" type="submit">
                            Search!
                        </button>
                    </div>
                </div>
            </form>
        </Card>
    );
};

export default SearchBar;
