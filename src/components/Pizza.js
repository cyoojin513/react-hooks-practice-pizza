import React from "react";

function Pizza({item, getEditedId}) {

  function handleEdit() {
    getEditedId(item)
  }

  return (
    <tr>
      <td>{item.topping}</td>
      <td>{item.size}</td>
      <td>{item.vegetarian ? "Yes" : "No"}</td>
      <td>
        <button 
          type="button" 
          className="btn btn-primary"
          onClick={handleEdit}
        >
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
