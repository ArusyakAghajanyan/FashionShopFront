import {useState, useEffect, useContext, createContext} from "react"

function Parent() {
  const [data, setData] = useState([]);

  useEffect(()=> {
    fetch("https://restcountries.com/v3.1/all")
    .then
  })
  return(
    <div>
      <h4>Child component</h4>
    </div>
  )
}

function Child() {
  return(
    <div>
      <h4>jfu</h4>
    </div>
  )
}