const getCurrentposition = () =>  {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  })
}

getCurrentposition().then(location => {
  console.log(location.coords)
}).catch(error => {
  console.log(error)
})
