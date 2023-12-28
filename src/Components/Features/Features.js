import React from 'react';
import './Features.css'; // Make sure to create a corresponding CSS file

const Features = () => {
  return (
    <div className="features-container">
      <h1>Unlock the Power of DiGix</h1>
      <div className="feature-card">
        <h2>Smart Analytics</h2><br></br>
        <p>Gain insights with real-time analytics to understand your audience and optimize strategies.</p><br></br>
      </div>
      <div className="feature-card">
        <h2>Social Media Integration</h2><br></br>
        <p>Seamlessly manage and schedule posts across multiple social media platforms in one place.</p><br></br>
      </div>
      <div className="feature-card">
        <h2>SEO Magic</h2><br></br>
        <p>Boost your online visibility with advanced SEO tools and strategies for top search engine rankings.</p><br></br>
      </div>
      <div className="feature-card">
        <h2>Campaign Wizard</h2><br></br>
        <p>Create and launch effective marketing campaigns effortlessly with our intuitive campaign builder.</p><br></br>
      </div>
      <div className="feature-card">
        <h2>Engagement Tracking</h2><br></br>
        <p>Monitor audience engagement and measure the success of your campaigns with detailed tracking.</p><br></br>
      </div>
    </div>
  );
};

export default Features;
