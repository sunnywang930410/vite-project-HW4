import { useDispatch } from "react-redux";
import { addCartItems } from "../redux/cartSlice";

export default function AddToCart({ book, qty }) {
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch(
            addCartItems(
                {
                    ID: book.ID,
                    title: book.title,
                    cover: book.cover,
                    price: book.price,
                    stock: book.stock,
                    qty,
                }
            )
        )
    }
    return (
        <button className="btn btn-primary px-8 py-5" onClick={addToCart}>
            Add To Cart
        </button>
    )
}

