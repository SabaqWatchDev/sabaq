import NavigationBar from "@/components/NavigationBar";
import { Button } from "@nextui-org/react";
import TabsSection from "./components/sections/TabsSection";

export default function Instructions() {
  return (
    <div className="w-screen h-screen">
      <NavigationBar currentPage="instructions" />

      <div className="flex flex-col h-5/6 items-center justify-center gap-4">
        <TabsSection />

        <Button className="w-10/12" size="lg" color="primary">Guardar Cambios</Button>
      </div>
    </div>
  )
}
