const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const intersecting = entry.isIntersecting
      entry.target.style.backgroundColor = intersecting ? "blue" : "orange"
    })
  })
  const test = document.getElementById("test")
  observer.observe(test)