  function getData() {
    fetch('https://baby-island.herokuapp.com/homeproduct')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        re
      console.log(data);
    });
  }