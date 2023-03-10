import React, { useState, useEffect } from "react";

const InfiniteScrolls = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`
    );
    const data = await response.json();
    setPhotos([...photos, ...data]);
    setPage(page + 1);
  };

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;

    if (windowHeight + scrollTop >= documentHeight) {
      fetchPhotos();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="photo-list">
      {photos.map((photo) => (
        <div key={photo.id} className="photo">
          <img src={photo.thumbnailUrl} alt={photo.title} />
          <p>{photo.title}</p>
        </div>
      ))}
    </div>
  );
};

export default InfiniteScrolls;
