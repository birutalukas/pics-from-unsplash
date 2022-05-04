import React, { useState } from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./images/ImageList";

const App = () => {
    const [fetchedImages, setFetchedImages] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const onSearchSubmit = async (searchValue) => {
        setIsLoading(true);

        const response = await unsplash.get("/search/photos", {
            params: {
                query: searchValue,
            },
        });
        setIsLoading(false);
        setFetchedImages(response.data.results);
    };

    return (
        <div className="ui container" style={{ marginTop: "10px" }}>
            <SearchBar onSubmit={onSearchSubmit} />
            {fetchedImages.length > 0
                ? `Found ${fetchedImages.length} images.`
                : "Let's search some images!"}
            {fetchedImages.length !== 0 ? (
                <ImageList images={fetchedImages} isLoading={isLoading} />
            ) : null}
        </div>
    );
};

export default App;
