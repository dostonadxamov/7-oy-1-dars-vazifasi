import Dessert from "./Dessert"

export default function Desserts({ Desserts }) {
console.log(Desserts);


    return (
        <div className='Dessert'>
            <h1 className="Dessert__title">Dessert</h1>
            <div className="dessert__container">
                {Desserts.map((item) => (
                     <Dessert key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}
