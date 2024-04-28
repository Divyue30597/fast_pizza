import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";

function CartOverview() {
  const totalQuantity = useSelector(getTotalCartQuantity);

  const priceOfPizzas = useSelector(getTotalCartPrice);

  if (!totalQuantity) return null;

  return (
    <div className="flex flex-wrap items-center justify-between bg-stone-800 p-4 text-sm uppercase text-stone-200 sm:p-6 md:text-base">
      <p className="space-x-10 font-semibold text-stone-300 sm:space-x-16">
        <span>{totalQuantity} pizzas</span>
        <span>{formatCurrency(priceOfPizzas)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
