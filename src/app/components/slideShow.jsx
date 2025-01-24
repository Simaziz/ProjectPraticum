import { useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Slide from '../../../public/images/slide1.png';
import Slide2 from '../../../public/images/slide2.png';
import Slide3 from '../../../public/images/slide3.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/globals.css'; // Your custom styles (if any)

// Dynamically import Bootstrap JS with SSR disabled
const BootstrapJS = dynamic(() => import('bootstrap/dist/js/bootstrap.bundle.min.js'), {
  ssr: false,
});

export default function slide() {
  // Ensure Bootstrap JS is initialized
  useEffect(() => {
    if (typeof window !== 'undefined') {
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []);

  return (
    <header className="w-full">
      <div className="container-fluid px-0">
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {/* First Slide */}
            <div className="carousel-item active">
              <Image
                src={Slide}
                className="d-block w-100"
                alt="Slide 1"
                width={1200} // Set a consistent width
                height={600} // Set a consistent height
                priority // Ensure the first image loads quickly
              />
            </div>

            {/* Second Slide */}
            <div className="carousel-item">
              <Image
                src={Slide2}
                className="d-block w-100"
                alt="Slide 2"
                width={1200} // Set a consistent width
                height={600} // Set a consistent height
              />
            </div>

            {/* Third Slide */}
            <div className="carousel-item">
              <Image
                src={Slide3}
                className="d-block w-100"
                alt="Slide 3"
                width={1200} // Set a consistent width
                height={600} // Set a consistent height
              />
            </div>
          </div>

          {/* Previous Button */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          {/* Next Button */}
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </header>
  );
}