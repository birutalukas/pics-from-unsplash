import classes from "./ImageList.module.css";
import ImageCard from "../images/ImageCard";
import Card from "../UI/Card";
const ImageList = ({ images, isLoading }) => {
    const renderedImages = images.map((image) => {
        return (
            <ImageCard
                key={image.id}
                urls={image.urls}
                description={image.description}
            />
        );
    });

    return (
        <Card>
            <div className={classes["image-list"]}>
                {isLoading ? "Loading..." : renderedImages}
            </div>
        </Card>
    );
};

export default ImageList;
