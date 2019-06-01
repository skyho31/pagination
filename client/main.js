async function getData () {
  const { data } = await axios.get('http://localhost:8888/data')
  console.log(data)
}

getData();

