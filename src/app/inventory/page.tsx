import NavigationBar from "@/components/NavigationBar";
import ActionButtons from "@/components/ActionButtons";

import InventoryTable from "./components/InventoryTable";

export default async function App() {
  return (
    <>
      <NavigationBar currentPage="inventory" />

      <div className="w-full flex items-center justify-center mb-10">
        <h1 className="w-10/12 bg-warning text-white text-5xl">EN CONSTRUCCION!</h1>
      </div>

      <div className="w-screen flex flex-col items-center gap-4">

        <InventoryTable />

        <ActionButtons />
      </div>
    </>
  );
}
