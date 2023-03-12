export const recommendationsProduct1 = {
  recommendations: [
    {
      product_id: "PROD123",
      name: "Wireless Headphones",
      description:
        "Experience high-quality sound with these wireless headphones, featuring noise-cancelling technology and a long-lasting battery. Perfect for music lovers on-the-go.",
      price: 149.99,
      image_url: "https://example.com/wireless_headphones.jpg",
      average_rating: 4.8,
      reviews_count: 50,
      related_tags: ["electronics", "audio", "headphones", "wireless"],
      supplier: {
        name: "AudioTech",
        address: "123 Main St, Anytown, USA",
        phone: "555-123-4567",
        email: "sales@audiotech.com",
        website: "https://audiotech.com",
      },
      shipping: {
        estimated_delivery: "2023-03-12",
        delivery_method: "Express",
        delivery_cost: 12.99,
      },
    },
    {
      product_id: "PROD456",
      name: "Smart Watch",
      description:
        "Stay connected and track your fitness goals with this sleek and stylish smart watch. Featuring a large color display and advanced health monitoring capabilities.",
      price: 199.99,
      image_url: "https://example.com/smart_watch.jpg",
      average_rating: 4.5,
      reviews_count: 35,
      related_tags: ["electronics", "wearables", "smartwatch"],
      supplier: {
        name: "TechCo",
        address: "456 Oak St, Anytown, USA",
        phone: "555-234-5678",
        email: "sales@techco.com",
        website: "https://techco.com",
      },
      shipping: {
        estimated_delivery: "2023-03-15",
        delivery_method: "Standard",
        delivery_cost: 5.99,
      },
    },
    {
      product_id: "PROD789",
      name: "Organic Coffee",
      description:
        "Enjoy the rich, bold flavor of organic coffee, sustainably sourced from small farms around the world. Available in whole bean or ground.",
      price: 12.99,
      image_url: "https://example.com/organic_coffee.jpg",
      average_rating: 4.9,
      reviews_count: 25,
      related_tags: ["food", "coffee", "organic"],
      supplier: {
        name: "CoffeeCo",
        address: "789 Maple St, Anytown, USA",
        phone: "555-345-6789",
        email: "sales@coffeeco.com",
        website: "https://coffeeco.com",
      },
      shipping: {
        estimated_delivery: "2023-03-18",
        delivery_method: "Next Day",
        delivery_cost: 14.99,
      },
    },
  ],
  recommendation_count: 3,
  total_price: 362.96,
  recommended_product_ids: ["PROD123", "PROD456", "PROD789"],
};
