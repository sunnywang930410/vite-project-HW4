import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../redux/cartSlice';

function CartSummary() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => setIsOpen(!isOpen);
    // cartItems用來判斷購物車內的商品數量
    const cartItems = useSelector(selectCartItems);
    // count用來計算cartItems的數量
    // reduce是陣列的方法，用於累加陣列中的數值
    const count = (cartItems.length > 0) ? cartItems.reduce((sum, item) => sum + item.qty, 0) : 0;
    return (
        <nav
            onClick={toggleModal}
            className="inline-block absolute top-8 right-6 md:right-10 cursor-pointer"
        >
            <div className="indicator">
                {count > 0 && <span className="indicator-item badge badge-primary">{count}</span>}
                <ShoppingCart strokeWidth={2} className="w-5 h-5 md:w-6 md:h-6 text-current group-hover:scale-105 transition-transform" />
            </div>
        </nav>
    );
}

export default CartSummary;