import React, { useEffect, useState } from 'react';
import '../../../index.scss';
import { useParams } from 'react-router-dom';
import { OneCollection } from '../../../http/getImages.jsx';

const ImagePage = () => {
    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const data = await OneCollection(id);
            console.log(data);
            setImage(data);
            setIsLoading(false);
        };

        fetchData();
    }, [id]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <p>WORKING</p>
            <div>
                {image && image.length > 0 ? (
                    image.map((imageId) => (
                        <div key={imageId._id}>
                            {imageId.title}
                        </div>
                    ))
                ) : (
                    <div>There are no Images :(</div>
                )}
            </div>
        </div>
    );
};

export default ImagePage;
