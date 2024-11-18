import React from "react";

const About = () => {
  return (
    <div className="about-page container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-4">
        Welcome to Gadget Heaven! We are dedicated to bringing you the latest
        and greatest gadgets to enhance your life. Our mission is to provide
        high-quality, innovative products that meet the needs of our customers.
      </p>
      <h2 className="text-2xl font-bold mb-2">Our Story</h2>
      <p className="mb-4">
        Gadget Heaven was founded with a passion for technology and a desire to
        make the latest gadgets accessible to everyone. Our journey began with a
        small team of tech enthusiasts who wanted to share their love for
        gadgets with the world. Today, we have grown into a trusted brand known
        for our commitment to quality and customer satisfaction.
      </p>
      <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
      <p className="mb-4">
        Our mission is to provide our customers with the best gadgets that
        enhance their daily lives. We strive to offer a wide range of products
        that cater to different needs and preferences. Whether you're looking
        for the latest smartphone, a powerful laptop, or innovative accessories,
        we have something for everyone.
      </p>
      <h2 className="text-2xl font-bold mb-2">Our Values</h2>
      <ul className="list-disc list-inside mb-4">
        <li className="mb-2">
          <strong>Quality:</strong> We are committed to offering products that
          meet the highest standards of quality and performance.
        </li>
        <li className="mb-2">
          <strong>Innovation:</strong> We believe in the power of innovation to
          transform lives and are always on the lookout for the latest
          advancements in technology.
        </li>
        <li className="mb-2">
          <strong>Customer Satisfaction:</strong> Our customers are at the heart
          of everything we do. We strive to provide exceptional service and
          support to ensure a positive shopping experience.
        </li>
        <li className="mb-2">
          <strong>Integrity:</strong> We conduct our business with honesty and
          integrity, building trust with our customers and partners.
        </li>
      </ul>
      <p className="mb-4">
        Thank you for choosing Gadget Heaven. We look forward to serving you and
        helping you discover the best gadgets to enhance your life.
      </p>
    </div>
  );
};

export default About;
