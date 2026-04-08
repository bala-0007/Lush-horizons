import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Blog.css";
import bannerimage from "../assets/lush-horizons-banner.jpg";
import beginners from "../assets/beginners-guide.jpg";
import indoorgardening from "../assets/indoor-gardening.jpg";
import plantandcare from "../assets/plant&care-tips.jpg";
import sustainable from "../assets/sustainable-gardening.jpg";
import seasonal from "../assets/seasonal-gardening.jpg";

import decoration from "../assets/decoration.jpg";


function Blog(){
    return(
        <div>
    <div>
   
      <img src={bannerimage} style={{ width: '100%', objectFit: 'contain' }} alt="hjbcdj"></img>
      <div className="bg-success text-white text-center py-5">
     
        <h1>Embrace the Green Lifestyle</h1>
        <p className="lead">Discover tips, tricks, and inspiration to transform your space into a lush paradise.</p>
      </div>

     
      <section className="container my-5">
        <h2 className="text-center mb-4">Blog Categories</h2>
        <div className="row">
        {[
  {
    title: "Beginner's Guide to Gardening",
    description: "Discover the joys of gardening with this comprehensive beginner's guide. Learn the essential tools and techniques to start your gardening journey, from choosing the right soil and plants to basic maintenance. Whether you have a small balcony or a spacious yard, this guide will help you cultivate a thriving garden with confidence..",
    image: beginners,
  },
  {
    title: "Indoor Gardening",
    description: "Transform your living space into a lush, green sanctuary with our indoor gardening tips. Explore a variety of low-maintenance indoor plants, perfect for any home or office environment. Learn how to care for plants that purify the air, add aesthetic appeal, and bring the calming presence of nature indoors.",
    image: indoorgardening,
  },
  {
    title: "Sustainable Gardening",
    description: "Embrace eco-friendly gardening practices that contribute to a healthier planet. From composting kitchen waste to using organic fertilizers and sustainable watering techniques, this guide helps you grow a beautiful garden while reducing your environmental impact. Create a greener world, one plant at a time.",
    image: sustainable, 
  },
  {
    title: "Plant Care & Tips",
    description: "Keep your plants healthy and thriving with our expert plant care advice. Learn how to identify and treat common pests and diseases, ensure proper watering, and provide the ideal light and soil conditions for different plant types. Perfect for both beginners and experienced gardeners looking to refine their skills.",
    image: plantandcare,
  },
  {
    title: "Seasonal Gardening",
    description: "Adapt your gardening practices to the changing seasons with our seasonal gardening tips. Discover which plants thrive during spring, summer, autumn, and winter, and learn how to prepare your garden for each season. From planting vibrant blooms in spring to harvesting vegetables in autumn, we guide you through year-round gardening success.",
    image: seasonal, 
  },
].map((category, index) => (
  <div className="col-md-4 mb-4" key={index}>
    <div className="card shadow-sm">
      <img
        src={category.image}
        alt={category.title}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{category.title}</h5>
        <p className="card-text">{category.description}</p>
      </div>
    </div>
  </div>
))}

        </div>
      </section>

      
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Featured Blog Post</h2>
          <div className="row">
            <div className="col-md-6">
              <img
                src={decoration}
                alt="Featured Post"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h3>The Magic of Swiss Cheese Plants</h3>
              <p>
The Swiss Cheese Plant is one of the easiest indoor plants to grow. With its glossy leaves and low maintenance needs, it’s perfect for beginners and busy plant lovers. Discover why this resilient beauty is a must-have for every green space.
</p>

              <a 
  href="https://medium.com/@VinodhaTechJourney/the-magic-of-swiss-cheese-plant-plants-the-perfect-low-maintenance-green-companion-7a9111e7eb1e"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-success"
>
  Read Full Article
</a>

            </div>
          </div>
        </div>
      </section>

   
      <section className="text-center py-5 bg-success text-white">
        <h2>Join Our Gardening Community</h2>
        <p className="lead">Subscribe to our newsletter for weekly gardening tips and updates!</p>
        <button className="btn btn-light">Subscribe Now</button>
      </section>
    </div></div>
    )
}
export default Blog;





 

