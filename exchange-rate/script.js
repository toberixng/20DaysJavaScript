function calculate() {
  fetch('items.json')
    .then(res => res.json())
    .then(data => data.forEach(element => {
      document.body.innerHTML = Object.values(element)
    }));
}

calculate();