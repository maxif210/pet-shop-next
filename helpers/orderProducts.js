


export const sortProducts = (orderBy, products) => {
    if( orderBy === 'asc') {
      const sortedProductsAsc = products.sort((a, b) => (a.price > b.price ? -1 : a.price < b.price ? 1 : 0))
      
      return sortedProductsAsc;
    }

    if( orderBy === 'desc') {
      const sortedProductsDesc = products.sort((a, b) => (a.price > b.price ? 1 : a.price < b.price ? -1 : 0))
   
      return sortedProductsDesc;
    }
    
  }