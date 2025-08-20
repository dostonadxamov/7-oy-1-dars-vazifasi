
import { useGlobalContext } from "../context/useGlobal";
import { formatPrice } from "../utils";

export default function Dessert({ item }) {
  const { Yourcart, dispatch } = useGlobalContext();
  const isAdded = Yourcart.find((el) => el.id === item.id);



  return (
    <div>
      <picture>
        <source media="(max-width: 400px)" srcSet={item.image.mobile} sizes="327px" />
        <source media="(max-width: 600px)" srcSet={item.image.tablet} sizes="213px" />
        <source media="(max-width: 996px)" srcSet={item.image.desktop} sizes="250px" />
        <img
          className="img"
          src={item.image.desktop}
          alt={item.name}
          width={250}
          height={240}
        />
      </picture>
      <div className="card__buttons">
        {!isAdded && (
          <button className="card__add btn" onClick={()=> dispatch({type: "ADD_TO_CART", payload:{...item, amount:+1}})}>
            <img src="../images/icon-add-to-cart.svg" alt="Add to cart" />
            <span>Add to cart</span>
          </button>
        )}
        {isAdded && (
          <div className="btn2 card__amount__buttons">
            <button className="plus" onClick={()=>{
               if (isAdded.amount == 1) {
                dispatch({ type: "REMOVE_CART", payload: isAdded.id })
              } else {
                dispatch({ type: "DECREMENT_AMOUNT", payload: isAdded.id })
              }
            } }>
              -
            </button>
            <span className="number">{isAdded.amount}</span>
            <button className="plus" onClick={()=>dispatch({type: "INCREMENT_AMOUNT", payload: isAdded.id})}>
              +
            </button>
          </div>
        )}
      </div>
      <div>
        <p className="category">{item.category}</p>
        <h2 className="name">{item.name}</h2>
        <p className="price">{formatPrice(item.price)}</p>
      </div>
    </div >
  );
} 