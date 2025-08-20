import Dessert from "./components/Desserts";
import YourCart from "./components/YourCart";
import useFetch from "./hook/useFetch";

export default function App() {

  const { data: dessert, Loading, error } = useFetch('https://json-api.uz/api/project/dessertss/desserts');




  return (
    <div className="container">
      {Loading && <div className="Dessert">
        <h1 className="Dessert__title"> Loading...</h1>
      </div>}
      {dessert && <Dessert Desserts={dessert.data} />}
      <YourCart />
    </div >
  )
}

