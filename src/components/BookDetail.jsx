import { useState } from "react";
import AddToCart from "./AddToCart";

function BookDetail({ book }) {
    const [qty, setQty] = useState(1);
    return (
        <div className="grid grid-cols-1 lg:grid-cols-24 gap-8 justify-center">
            <div className="lg:col-span-6 lg:col-start-3">
                <img
                    alt={book.title}
                    className="w-full h-96 object-cover object-center rounded-md"
                    src={book.cover}
                />
            </div>
            <div className="lg:col-span-14 px-4">
                <h1 className="text-white text-2xl font-bold mb-2">{book.title}</h1>
                <h2 className="text-blue-200 opacity-80 mb-1 text-lg">{book.author}</h2>
                <p className="italic text-white opacity-60 text-base mb-4">{book.summary}</p>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 mt-8">
                        <span className="font-bold" >Qty:</span>
                        {/* 當使用者選擇不同的選項時觸發事件 */}
                        <select className="select select-bordered w-20"
                            onChange={event => setQty(Number(event.target.value))}>
                            {/* 遍歷生成的數字陣列，為每個數字創建一個option元素 */}
                            {[...Array(10).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <p className="font-bold">US${book.price}.00</p>
                        <p>
                            <span className="text-xl font-bold">Total Price: {book.price * qty}</span>
                        </p>
                    </div>
                    <AddToCart book={book} qty={qty} />
                </div>
            </div>
        </div>
    )
}

export default BookDetail;