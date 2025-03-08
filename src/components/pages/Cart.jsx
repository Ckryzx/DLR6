import { useCart } from "./CartContext"

const Cart = () => {
    const { cart, removeFromCart, totalCartPrice } = useCart();

    return (
        <div className="container mt-4">
            <h1>🛒 Carrito de Compras</h1>
            {cart.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                <>
                    <ul className="list-group">
                        {cart.map((item) => (
                            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <img src={item.img} alt={item.name} width="50" />
                                {item.name} - ${item.price} x {item.count}
                                <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>
                    <h4>Total: ${totalCartPrice}</h4>
                </>
            )}
        </div>
    );
};

export default Cart;

