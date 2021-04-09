const getCountry = async ({lon, lat}) => {
  // do async call here

  return new Promise((resolve) => {
    setTimeout(() => resolve('Gomel, Belarus'), 3000)
  })
}

export default getCountry
