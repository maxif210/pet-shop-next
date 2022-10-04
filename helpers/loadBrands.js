

export const loadBrands = (brand, products) => {
    const result = products.filter(product => product.marca === brand)
    console.log(result)
      return result
}