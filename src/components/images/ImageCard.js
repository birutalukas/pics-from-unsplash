import { useRef, useEffect, useState } from "react";

const ImageCard = ({ urls, description }) => {
    const imageRef = useRef();

    const [span, setSpan] = useState(0);

    useEffect(() => {
        imageRef.current.addEventListener("load", () => {
            const height = imageRef.current.clientHeight;

            const spans = Math.ceil(height / 10);

            setSpan(spans);
        });
    }, [span]);

    return (
        <div style={{ gridRowEnd: `span ${span}` }}>
            <img ref={imageRef} src={urls.regular} alt={description} />
        </div>
    );
};

export default ImageCard;
