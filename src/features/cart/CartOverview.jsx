import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="flex flex-wrap items-center justify-between bg-stone-800 p-4 text-sm uppercase text-stone-200 sm:p-6 md:text-base">
      <p className="space-x-10 font-semibold text-stone-300 sm:space-x-16">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
