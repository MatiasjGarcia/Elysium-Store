const products = [
  {
    id: 1,
    title: 'Remera Oversize Black',
    price: '17,000',
    category: 'CASUAL',
    description: 'talles: XL, L, M, S, XS',
    image:
      'https://acdn-us.mitiendanube.com/stores/001/511/342/products/img_4649-2412a285afb8db48b217067193114945-1024-1024.webp',
  },
  {
    id: 2,
    title: 'Pantalon Oversize',
    price: '28,000',
    category: 'FITNESS',
    description: 'talles: 38, 40, 42, 44, 50, 52',
    image:
      'https://cdn.shopify.com/s/files/1/0156/6146/files/GlobalLiftingOversizedEssentialPantGSBlackA5A8K-BB2J-1037.jpg?v=1722939641',
  },
  {
    id: 30,
    title: 'Remera Compresion X',
    price: '22,000',
    category: 'FITNESS',
    description: 'Colores: rojo, azul y verde',
    image:
      'https://acdn-us.mitiendanube.com/stores/001/511/342/products/3f-50d67e34a4f0d64acc17317029543058-480-0.webp',
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getProduct = (id) => {
  return products.find((prod) => prod.id == id);
};

export const getCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((product) => product.category === category));
      //va a retornar un array de prods que cumplan con esa condicion
    }, 1000);
  });
};
