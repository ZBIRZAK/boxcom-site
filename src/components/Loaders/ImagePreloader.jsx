"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function ImagePreloader({ imageUrls = [], children }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (imageUrls.length === 0) {
      setLoaded(true);
    }

    let loadedCount = 0;

    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = handleLoad;
      img.onerror = handleLoad; // count errors as loaded so it won’t block forever
    });

    function handleLoad() {
      loadedCount += 1;
      if (loadedCount === imageUrls.length) {
        setLoaded(true);
      }
    }
  }, [imageUrls]);

  if (!loaded) {
    return <Loader />;
  }

  return <>{children}</>;
}
