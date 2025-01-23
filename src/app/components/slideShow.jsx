import Image from "next/image"
import Slide from "../../../public/images/slide1.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/globals.css'; // Your custom styles (if any)

export default function slide(){
    return(
        <header className="">
            <div>
            <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <Image src={Slide} className="d-block w-[900px] " alt="..."/>
    </div>
    <div className="carousel-item">
      <Image src={Slide} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <Image src={Slide} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
            </div>

            
        </header>
    )
}