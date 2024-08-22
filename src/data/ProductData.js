const productData = [
    {
      id: 1,
      name: 'Portátil Hp 8gb ram 1t HDD Color Negro',
      price: 2930100,
      discountPrice: 2500000,
      discount: 15,
      shippingCost: 13400,
      image: require('../Iconos/ImagenProducto.jpg'), 
      freeShipping: false,
      recommended: true,
      favorite: false,
      card:true,
      stock: 40,
      category: 'Tecnólogia',
      description : {
        trademark : 'Hp',
        storageSpace : '1 terabyte',
        storageType : 'SDD',
        ramMemory: '8 gigabytes',
        color: 'Black',
        state:'Nuevo',
        computerProcessor : 'Ryzen 75700G',
        graphicCard : 'Integrada',
        size: '15.6"'
      }
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