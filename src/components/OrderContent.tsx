import { formatCurrency } from "../helpers/formatCurrency";
import { MenuOrder } from "../types";

type OrderContentProps = {
  order: MenuOrder[],
  removeItem: (id: number) => void
};

const OrderContent = ({ order, removeItem }: OrderContentProps) => {
  return (
    <>
      <h2 className="text-4xl font-black text-orange-400">Consumos</h2>
      <div>
        {order.length === 0 ? (
          <div className="text-center">No hay ordenes</div>
        ) : (
          <>
            <div>
              {order.map((item) => (
                <div
                  className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
                  key={item.id}
                >
                  <div>
                    <p className="text-lg">
                      {item.name} - {formatCurrency(item.price)}
                    </p>
                    <p className="font-black">
                      Cantidad: {item.quantity} - SubTotal:{" "}
                      {formatCurrency(item.price * item.quantity)}
                    </p>
                  </div>
                  <button className="bg-red-600 h-8 w-8 rounded-full text-white font-black" onClick={() => removeItem(item.id)}>
                    X
                  </button>
                </div>
              ))}
              <div>
                <p className="font-black">
                  Total:{" "}
                  {formatCurrency(
                    order.reduce(
                      (acc, item) => acc + item.price * item.quantity,
                      0
                    )
                  )}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default OrderContent;
