import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteCartItem from "../cart/DeleteCartItem";
import UpdateCartItemQuantity from "../cart/UpdateCartItemQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const dispatch = useDispatch();

  const currentQuantity = useSelector(getCurrentQuantityById(id));

  const isInCart = currentQuantity > 0;

  const handleClick = () => {
    const pizzaObj = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
    };

    pizzaObj.totalPrice = pizzaObj.unitPrice * pizzaObj.quantity;

    dispatch(addItem(pizzaObj));
  };

  return (
    <li className="flex gap-4 py-2">
      <img
        className={`h-24 w-24 rounded-md ${soldOut ? "opacity-70 grayscale" : ""}`}
        src={imageUrl}
        alt={name}
      />
      <div className=" flex grow flex-col">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {isInCart && (
            <div className="flex gap-4">
              <UpdateCartItemQuantity
                pizzaId={id}
                currentQuantity={currentQuantity}
              />
              <DeleteCartItem pizzaId={id} />
            </div>
          )}

          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleClick}>
              Add Pizza
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
