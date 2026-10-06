import { useParams } from "react-router-dom"

function ItemDetails() {
    const {id}=useParams()
  return (
    <div>
      <h1>Item Id {id}</h1>
    </div>
  )
}

export default ItemDetails
