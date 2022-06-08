const getClimbs = () => {
  return (
      fetch('http://localhost:3000/api/v1/climbs/')
          .then(response => {
          if(response.ok) {
              return response.json();
          } else {
              throw new Error();
          }
      }) 
  )
}

export { getClimbs }