import MenuItem from "./components/MenuItem";
import OrderContent from "./components/OrderContent";
import { menuItems } from "./data/data";
import useOrder from "./hooks/useOrder";

const App = () => {
  const { order, addItem, removeItem } = useOrder();
  return (
    <>
    <header className="bg-orange-400 py-5">
      <h1 className="text-4xl font-black text-center text-white">
        Calculadora de Propinas y Consumos
      </h1>
    </header>
    <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
      <div className="p-5">
        <h2 className="text-4xl font-black text-orange-400">Menú</h2>
        <div className="space-y-3 mt-10">
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} addItem={addItem}  />
        ))}
        </div>
      </div>
      <div>
        <div className="border border-dashed border-orange-400 p-5 text-orange-400 space-y-10">
          <OrderContent order={order} removeItem={removeItem}/>
        </div>
      </div>
    </main>
    </>
  );
};

export default App;
