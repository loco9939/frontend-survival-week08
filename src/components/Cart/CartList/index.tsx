import useCartStore from '../../../hooks/useCartStore';
import Food from '../../../types/food';
import convertKRW from '../../../utils/convertKRW';

type CartListProps = {
  menu:Food[]
}
function CartList({ menu }:CartListProps) {
  const [, cartStore] = useCartStore();
  const handleClick = (id:string) => () => {
    cartStore.removeCart(id);
  };
  return (
    <ul>
      {menu.map((food) => (
        <li key={food.id}>
          <p>{food.name}</p>
          <p>
            {`${convertKRW(food.price)}원`}
          </p>
          <button type="button" onClick={handleClick(food.id)}>X</button>
        </li>
      ))}

    </ul>
  );
}

export default CartList;
