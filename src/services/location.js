export const getLocation = async () => {
  // replace with async call
  return new Promise((resolve) => {
    setTimeout(() => resolve({ lat: 41.11156565, lon: 118.353653 }), 3000)
  })
}

export default getLocation
