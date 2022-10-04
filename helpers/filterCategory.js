


export const filterCategory = (category = "", products) => {
      const filterProducts = products.filter(product => product.category === category)
      return filterProducts
    ;    
    }