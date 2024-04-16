import React from "react";
import Slider from "../../Components/Slider/Slider";
import Services from "../../Components/Services/Services";
import Heading from "../../Components/Heading-Title/Heading";
import BookSlider from "../../Components/Book-Slider/BookSlider";

function HomePage({ books }) {
  return (
    <div className="home-page">
      <Slider />
      <Services />
      <Heading title="Most Gifted" />
      <BookSlider data={books} />
      <Heading title="Best Seller" />
      <BookSlider data={books} />
      <Heading title="Most Wished for" />
      <BookSlider data={books} />
    </div>
  );
}

export default HomePage;
