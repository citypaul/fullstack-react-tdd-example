export const recommendationsProduct2 = {
  recommendations: [
    {
      product_id: "ABC123",
      name: "Smartphone X",
      description:
        "Stay connected with the new Smartphone X, featuring a stunning 6.2 inch OLED display and powerful 5G capabilities. Take amazing photos with the triple camera system and enjoy all-day battery life.",
      price: 799.99,
      image_url: "https://example.com/smartphone_x.jpg",
      average_rating: 4.5,
      reviews_count: 50,
      related_tags: ["electronics", "smartphones", "accessories"],
      supplier: {
        name: "Tech Co.",
        address: "123 Main St, Anytown, USA",
        phone: "555-123-4567",
        email: "sales@techco.com",
        website: "https://techco.com",
      },
      shipping: {
        estimated_delivery: "2023-03-12",
        delivery_method: "Express",
        delivery_cost: 12.99,
      },
    },
    {
      product_id: "EFG456",
      name: "Throw Pillow Set",
      description:
        "Add some color and comfort to your living room or bedroom with this set of 4 throw pillows. Made with high-quality materials and available in a variety of vibrant colors.",
      price: 39.99,
      image_url: "https://example.com/throw_pillow_set.jpg",
      average_rating: 4.7,
      reviews_count: 35,
      related_tags: ["home", "decor", "furniture"],
      supplier: {
        name: "Home Co.",
        address: "456 Oak St, Anytown, USA",
        phone: "555-234-5678",
        email: "sales@homeco.com",
        website: "https://homeco.com",
      },
      shipping: {
        estimated_delivery: "2023-03-15",
        delivery_method: "Standard",
        delivery_cost: 5.99,
      },
    },
    {
      product_id: "HIJ012",
      name: "Men's Leather Jacket",
      description:
        "Stay stylish and warm with this classic leather jacket for men. Made with high-quality materials and available in a variety of sizes.",
      price: 249.99,
      image_url: "https://example.com/mens_leather_jacket.jpg",
      average_rating: 4.2,
      reviews_count: 25,
      related_tags: ["clothing", "men", "jackets"],
      supplier: {
        name: "Fashion Co.",
        address: "789 Maple St, Anytown, USA",
        phone: "555-345-6789",
        email: "sales@fashionco.com",
        website: "https://fashionco.com",
      },
      shipping: {
        estimated_delivery: "2023-03-18",
        delivery_method: "Next Day",
        delivery_cost: 14.99,
      },
    },
  ],
  recommendation_count: 3,
  total_price: 1089.97,
  recommended_product_ids: ["ABC123", "EFG456", "HIJ012"],
};
