
import "./Carousel.scss";

const Carousel = () => {
  return (
    <>   
    <div className="carousel-inage">
      <div className="container carousel-inage-container">
        <div className="carousel-img-left">
          <img src="https://sorobindu.com/wp-content/uploads/revslider/secondary-slider/Software-Slider.jpg" alt="" />
        </div>
        <div className="carousel-img-right">
             <h3> হ্যান্ড হোল্ডিং সাপোর্ট </h3>
             <p> লাইভ ক্লাস, প্রতিদিনের গোল ধরে ধরে প্র্যাকটিস করানো, গ্রুপ স্টাডি, প্রতিটা ক্লাসে কুইজ, এসাইনমেন্ট, আপনি কেমন করছেন না করছেন এর জন্য ফুল ট্র্যাকিং সফটওয়্যার, লাইফ টাইম সাপোর্ট থেকে শুরু করে এমন কি নাই… </p>
             <button className="another-btn"> Learn more about admission </button>
        </div>
      </div>
     </div>
    </>
  )
}

export default Carousel
