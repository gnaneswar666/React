const products = [
  {
    id: 1,
    title: "Laptop",
    gender: "Women",
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    price: 50000,
    description: "High Performance Laptop"
  },
  {
    id: 2,
    title: "Mobile",
    gender: "Men",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    price: 20000,
    description: "Smartphone with good camera"
  },
  {
    id: 3,
    title: "HeadPhone",
    gender: "Men",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    price: 3000,
    description: "Noise cancelling headphone"
  },
  {
    id: 4,
    title: "Men's Shirt",
    gender: "Men",
    img: "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab",
    price: 2000,
    description: "Sharp and sophisticated shirts"
  },
  {
    id: 5,
    title: "Women's Dress",
    gender: "Women",
    img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8",
    price: 3500,
    description: "Elegant evening dress"
  },
  {
    id: 6,
    title: "Sneakers",
    gender: "Men",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    price: 4500,
    description: "Comfortable running sneakers"
  },
  {
    id: 7,
    title: "Handbag",
    gender: "Women",
    img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    price: 7000,
    description: "Stylish leather handbag"
  },
  {
    id: 8,
    title: "Watch",
    gender: "Men",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    price: 12000,
    description: "Classic wrist watch"
  },
  {
    id: 9,
    title: "Earrings",
    gender: "Women",
    img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908",
    price: 1500,
    description: "Gold plated earrings"
  },
  {
    id: 10,
    title: "Gaming Mouse",
    gender: "Men",
    img: "https://images.unsplash.com/photo-1527814050087-3793815479db",
    price: 2500,
    description: "RGB gaming mouse"
  },
  {
    id: 11,
    title: "Perfume",
    gender: "Women",
    img: "https://images.unsplash.com/photo-1541643600914-78b084683601",
    price: 4000,
    description: "Floral fragrance perfume"
  },
  {
    id: 12,
    title: "Backpack",
    gender: "Men",
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    price: 3500,
    description: "Durable travel backpack"
  },
  {
    id: 13,
    title: "Sandals",
    gender: "Women",
    img: "https://images.unsplash.com/photo-1562273138-f46be4ebdf33",
    price: 2200,
    description: "Comfortable summer sandals"
  },
  {
    id: 14,
    title: "Formal Shoes",
    gender: "Men",
    img: "https://images.unsplash.com/photo-1614252369475-531eba835eb1",
    price: 5500,
    description: "Leather formal shoes"
  },
  {
    id: 15,
    title: "Scarf",
    gender: "Women",
    img: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26",
    price: 1200,
    description: "Silk printed scarf"
  },
  {
    id: 16,
    title: "T-Shirt",
    gender: "Men",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    price: 1000,
    description: "Casual cotton t-shirt"
  },
  {
    id: 17,
    title: "Blouse",
    gender: "Women",
    img: "https://th.bing.com/th/id/OIP.q2zfqW0pgaN1kItURplZugHaJ4?w=186&h=248&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
    price: 1800,
    description: "Trendy office blouse"
  },
  {
    id: 18,
    title: "Jeans",
    gender: "Men",
    img: "https://images.unsplash.com/photo-1542272604-787c3835535d",
    price: 2500,
    description: "Slim fit denim jeans"
  },
  {
    id: 19,
    title: "Skirt",
    gender: "Women",
    img:"https://th.bing.com/th/id/OIP.8WP08hGDhfhNqfUX3W1seQHaLH?w=186&h=279&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
    price: 2000,
    description: "Casual wear skirt"
  },
  {
    id: 20,
    title: "Suit",
    gender: "Men",
    img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35",
    price: 15000,
    description: "Formal business suit"
  },
  {
    id: 21,
    title: "Makeup Kit",
    gender: "Women",
    img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
    price: 5000,
    description: "Complete makeup essentials"
  },
  {
    id: 22,
    title: "Sports Jersey",
    gender: "Men",
    img: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e",
    price: 1800,
    description: "Football team jersey"
  },
  {
    id: 23,
    title: "Necklace",
    gender: "Women",
    img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
    price: 6000,
    description: "Silver chain necklace"
  },
  {
    id: 24,
    title: "Cap",
    gender: "Men",
    img: "https://images.unsplash.com/photo-1521369909029-2afed882baee",
    price: 800,
    description: "Casual baseball cap"
  },
  {
    id: 25,
    title: "Heels",
    gender: "Women",
    img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2",
    price: 3200,
    description: "Stylish high heels"
  },
  {
    id: 26,
    title: "Sweater",
    gender: "Men",
    img: "https://images.unsplash.com/photo-1610652492500-ded49ceeb378",
    price: 2800,
    description: "Warm wool sweater"
  },
  {
    id: 27,
    title: "Kurti",
    gender: "Women",
    img: "https://th.bing.com/th/id/OIP.cARwHFZwPojPYDf95w7tTAHaLH?w=186&h=279&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
    price: 2200,
    description: "Traditional Indian kurti"
  },
  {
    id: 28,
    title: "Track Pants",
    gender: "Men",
    img: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea",
    price: 1500,
    description: "Comfortable track pants"
  },
  {
    id: 29,
    title: "Saree",
    gender: "Women",
    img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c",
    price: 4500,
    description: "Traditional Indian saree"
  }
];
export default products;