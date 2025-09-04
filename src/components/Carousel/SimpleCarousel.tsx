import React, { useEffect, useRef } from 'react';
import Flickity from 'flickity';
import 'flickity/dist/flickity.min.css';

interface SimpleCarouselProps {
  children: React.ReactNode;
  options?: any;
}

const SimpleCarousel: React.FC<SimpleCarouselProps> = ({ children, options = {} }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const flickityRef = useRef<Flickity | null>(null);

  useEffect(() => {
    if (carouselRef.current) {
      // Initialize Flickity
      flickityRef.current = new Flickity(carouselRef.current, {
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        prevNextButtons: true,
        pageDots: false,
        ...options
      });
    }

    // Cleanup function
    return () => {
      if (flickityRef.current) {
        try {
          flickityRef.current.destroy();
          flickityRef.current = null;
        } catch (error) {
          console.warn('Error destroying Flickity:', error);
        }
      }
    };
  }, []);

  // Update Flickity when children change
  useEffect(() => {
    if (flickityRef.current) {
      try {
        flickityRef.current.reloadCells();
        flickityRef.current.resize();
      } catch (error) {
        console.warn('Error updating Flickity:', error);
      }
    }
  }, [children]);

  return (
    <div ref={carouselRef} className="carousel">
      {children}
    </div>
  );
};

export default SimpleCarousel;