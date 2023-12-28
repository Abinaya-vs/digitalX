import React from 'react';
import p1 from '../../Components/Products/p1.jpg';
import p2 from '../../Components/Products/p2.jpg';
import p3 from '../../Components/Products/p3.jpg';
import './Products.css';

const Products = () => {
  return (
    <div className="products-container">
      <h1>Our Products</h1>

      <div className="product-card">
        <img src={p1} alt="Product 1" />
        <h2>Social Media Management Tool</h2>
        <p>"Our Social Media Management Tool empowers you to schedule posts, analyze engagement, and manage multiple social media accounts from a single, intuitive dashboard. Enhance your social media presence and streamline your content strategy."</p>
      </div>

      <div className="product-card">
        <img src={p2} alt="Product 2" />
        <h2> SEO Optimization Service</h2>
        <p>"Boost your online visibility with our SEO Optimization Service. Our experts employ industry-leading strategies to optimize your website, improve keyword rankings, and drive organic traffic. Stay ahead of the competition with our tailored SEO solutions."</p>
      </div>

      <div className="product-card">
        <img src={p3} alt="Product 3" />
        <h2> Email Marketing Platform</h2>
        <p>"Transform your email marketing with our advanced Email Marketing Platform. Create visually appealing campaigns, segment your audience, and track performance effortlessly. Drive engagement and build lasting relationships with your customers."</p>
      </div>
    </div>
  );
};

export default Products;
