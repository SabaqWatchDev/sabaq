import NavigationBar from "@/components/NavigationBar";
import ActionButtons from "@/components/ActionButtons";

import InventoryTable from "./components/InventoryTable";

export default async function App() {
  return (
    <>
      <NavigationBar currentPage="inventory" />

      <div className="w-screen flex flex-col items-center gap-4">

        <InventoryTable />

        <ActionButtons />
      </div>
    </>
  );
}
