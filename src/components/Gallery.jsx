import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          'https://api.unsplash.com/search/photos?query=university&per_page=10',
          {
            headers: {
              Authorization: 'wFxie94suFFqw5nHyZelsOhjKODnVod-tBNIFQ3xsgw',
            },
          }
        );
        const data = await response.json();
        setImages(data.results);
      } catch (error) {
        console.error('Error fetching images from Unsplash', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h2>University Images</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <div key={image.id} style={{ margin: '10px' }}>
            <img
              src={image.urls.small}
              alt={image.alt_description}
              style={{ width: '300px', height: '200px', objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;