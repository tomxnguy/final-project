import Carousel from '../Components/Carousel';
import './HomePage.css';

export default function HomePage() {
  const carouselImages = [
    '/images/hiking-carousel-1.jpeg',
    '/images/hiking-carousel-2.jpeg',
    '/images/hiking-carousel-3.jpeg',
    '/images/hiking-carousel-4.jpeg',
    '/images/hiking-carousel-5.jpeg',
  ];

  return (
    <div>
      <div>
        <Carousel carouselImages={carouselImages} />
      </div>
      <div className="w-screen grid grid-cols-3 gap-3 place-items-center bg-orange-100">
        <AdCard
          adPhoto="/images/GregoryBackpack.jpeg"
          adText="Shop all brands of backpacks!"
        />
        <AdCard
          adPhoto="/images/reitent.jpeg"
          adText="Get the newest model tents available!"
        />
        <AdCard
          adPhoto="/images/SalomonBoot.jpeg"
          adText="Brand new boot releases here!"
        />
        <AdCard adPhoto="/images/Poles.jpeg" adText="Best prices here!" />
        <AdCard
          adPhoto="/images/patagonia.jpeg"
          adText="Find the right fit for every adventure!"
        />
        <AdCard adPhoto="/images/cookware.jpg" adText="AND MORE!" />
      </div>
    </div>
  );
}

type AdCardProps = {
  adText: string;
  adPhoto: string;
};

function AdCard({ adText, adPhoto }: AdCardProps) {
  return (
    <div className="adcard flex-col rounded-lg bg-slate-300">
      <div className="adimage-div flex mt-2 ml-2 justify-center">
        <img className="adcard-img flex justify-center" src={`${adPhoto}`} />
      </div>
      <div className="ad-text-div">
        <p className="ad-text flex justify-center my-4">{adText}</p>
      </div>
    </div>
  );
}