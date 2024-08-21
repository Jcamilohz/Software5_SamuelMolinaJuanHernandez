const productData = [
    {
      id: 1,
      name: 'Portátil Hp 8gb ram 1t SDD Color Negro',
      price: 2930100,
      discountPrice: 2500000,
      discount: 15,
      shippingCost: 13400,
      image: require('../Iconos/ImagenProducto.jpg'), 
      freeShipping: false,
      recommended: true,
      favorite: false,
      card:true,
    },
    {
      id: 2,
      name: 'Portátil Hp 8gb ram 1t SDD Color Negro',
      price: 2930100,
      discountPrice: 2190100,
      discount: 25,
      shippingCost: 0,
      image: require('../Iconos/ImagenProducto.jpg'),
      freeShipping: true,
      recommended: true,
      favorite: true,
      card:true,
    },
    {
      id: 3,
      name: 'Portátil Hp 8gb ram 1t SDD Color Negro',
      price: 2930100,
      discountPrice: null,
      discount: null,
      shippingCost: 0,
      image: require('../Iconos/ImagenProducto.jpg'),
      freeShipping: true,
      recommended: false,
      favorite: true,
      card:true,
    },
    
  ];
  
  export default productData;