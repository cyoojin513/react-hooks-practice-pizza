import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {

  const defaultPizza = {
    "topping": "Pizza Topping",
    "size": "Small",
    "vegetarian": true
  }

  const [pizzas, setPizzas] = useState("")
  const [editedPizza, setEditedPizza] = useState(defaultPizza)

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
    .then((res) => res.json())
    .then((data) => setPizzas(data))
  }, [])

  function getEditedId(item) {
    setEditedPizza(item)
  }

  function onChangeForm(name, value) {
    setEditedPizza({...editedPizza, [name]: value})
  }

  function checkedForm(name, value) {
    setEditedPizza({...editedPizza, [name]: value})
  }

  function renderupdates(updatedPizza) {
    const updated = pizzas.map((item) => {
      if (item.id === updatedPizza.id) {
        return updatedPizza
      } else { return item }
    })
    setPizzas(updated)
  }

  return (
    <>
      <Header />
      <PizzaForm 
        editedPizza={editedPizza}
        onChangeForm={onChangeForm}
        checkedForm={checkedForm}
        renderupdates={renderupdates}
      />
      <PizzaList pizzas={pizzas} getEditedId={getEditedId}/>
    </>
  );
}

export default App;
