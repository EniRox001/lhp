import Image from "next/image"

export default function Carousel() {
  return (
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
    <div class="carousel-inner" style={{'padding':'1em'}}>
      <div class="carousel-item active">
        <img src='/assets/images/carousel-1.png' class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src='/assets/images/carousel-2.png' class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src='/assets/images/carousel-3.png' class="d-block w-100" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
)
}