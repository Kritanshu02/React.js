import React, { useState, useEffect } from "react";
const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchImages = async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const res = await fetch(
        `https://api.unsplash.com/photos/random?client_id=OnFowurjavxdY-PbQEwvShc3eANhnx73FAIZus_1-xM&count=10`
      );
      const data = await res.json();

      if (data.length === 0) {
        setHasMore(false);
      } else {
        setImages((prev) => [...prev, ...data]);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =document.documentElement;
      
    //   const element = document.documentElement;
    //   const scrollTop = element.scrollTop;
    //   const scrollHeight = element.scrollHeight;
    //   const clientHeight = element.clientHeight;

      if (clientHeight + scrollTop >= scrollHeight - 1 && !loading && hasMore) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  return (
    <div>
      <h1>Infinite Image Gallery</h1>

      {images.map((img) => (
        <img
          key={img.id}
          src={img.urls.raw}
          alt={img.alt_description || "Random Image"}
          width="200"
          height="200"
        />
      ))}

      {loading && <p>Loading...</p>}

      {!hasMore && <p>No more images!</p>}
    </div>
  );
};

export default ImageGallery;
