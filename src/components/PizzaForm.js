import React from "react";

function PizzaForm({editedPizza, onChangeForm, checkedForm, renderupdates}) {

  function handleSubmit(e) {
    e.preventDefault()
    fetch(`http://localhost:3001/pizzas/${editedPizza.id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(editedPizza)
    })
    .then((res) => res.json())
    .then((item) => renderupdates(item))
  }

  function handleChecked(e) {
    checkedForm(e.target.name, !vegetarian)
  }

  function handleChange(e) {
    onChangeForm(e.target.name, e.target.value)
  }

  const {topping, size, vegetarian} = editedPizza

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            value={topping}
            placeholder="Pizza Topping"
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <select 
            className="form-control" 
            name="size" 
            value={size}
            onChange={handleChange}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              checked={vegetarian}
              value="Vegetarian"
              onChange={handleChecked}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              checked={!vegetarian}
              value="Not Vegetarian"
              onChange={handleChecked}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
