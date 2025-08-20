import  cake  from "../../public/images/illustration-empty-cart.svg";

export default function YourCart() {
  return (
    <div className='YourCart'>
        <h1 className="yourcart__title">Your cart(0)</h1>
        <img src={cake} alt="cake"  />
    </div>
  )
}
