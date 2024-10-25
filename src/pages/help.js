import React from "react";
import styles from "../styles/about.module.css";

function Help() {
  return (
    <div className={`${styles.aboutBody} ${styles.helpAdditionalStyles}`}>
      <h1>Help & Support</h1>
      <p>
        At Shopify, your shopping experience is our top priority. We are here to
        assist you every step of the way, whether you&apos;re making a purchase,
        tracking an order, or looking for product details. Our Help page is
        designed to answer common questions and provide guidance on using our
        platform. If you can`t find what you&apos;re looking for, feel free to
        reach out to our customer support team for further assistance.
      </p>
      <h2 style={{ textAlign: "start", fontWeight: 600 }}>
        Frequently Asked Questions (FAQs) :-
      </h2>
      <h3>1. How do I create an account?</h3>
      <p>
        Creating an account is simple! Click on the `&quot;Sign Up`&quot; button
        at the top of the page and fill in the required details. Once
        registered, you’ll be able to save your favorite items, track orders,
        and receive personalized recommendations.
      </p>
      <h3>2. How do I place an order?</h3>
      <p>
        Browse our categories or use the search bar to find the product
        you&apos;re interested in. Select the size, color, or any other options
        if available, then click `&quot;Add to Cart.`&quot; Once you&apos;re
        ready, click on the shopping cart icon and follow the prompts to
        checkout securely.
      </p>
      <h3>3. What payment methods do you accept?</h3>
      <p>
        We accept various payment methods to ensure convenience, including major
        credit and debit cards (Visa, Mastercard, American Express), PayPal, and
        mobile payment options. For more details, visit our Payments section.
      </p>
      <h3>4. How can I track my order?</h3>
      <p>
        After placing an order, you will receive an email with a tracking
        number. You can also log into your account, go to `&quot;My
        Orders,`&quot; and check the status of your shipment.
      </p>
      <h3>5. Can I modify or cancel my order?</h3>
      <p>
        If you need to make changes to your order or cancel it, please contact
        our customer service team as soon as possible. Modifications and
        cancellations are only possible before the order has been shipped.
      </p>
      <h3>6. What is your return and refund policy?</h3>
      <p>
        We want you to be completely satisfied with your purchase. If
        you&apos;re not happy with your order, you can return it within 30 days
        of delivery. Items must be in their original condition, with tags
        intact. Refunds will be processed to your original payment method. For
        more information, visit our Returns & Refunds page.
      </p>
      <h3>7. How do I contact customer service?</h3>
      <p>
        You can reach our customer service team by emailing us at
        support@shopify.com, calling us at 1-800-123-SHOP, or using our live
        chat feature for instant assistance. Our support hours are Monday to
        Friday, 9 AM to 6 PM.
      </p>
    </div>
  );
}

export default Help;
