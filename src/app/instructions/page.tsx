import NavigationBar from "@/components/NavigationBar";

import TabsSection from "./components/sections/TabsSection";
import SubmitSection from "./components/sections/SubmitSection";

import { getStatus } from "./adapter/getStatus";

export default async function Instructions() {
  const statusData = await getStatus()

  const convertedArray: any = Object.keys(statusData[0])
    .filter((key) => key !== 'id' && key !== 'createdAt' && key !== 'updatedAt')
    .map((key) => ({
      [key]: statusData[0][key],
    }));

  return (
    <div className="w-screen h-screen">
      <NavigationBar currentPage="instructions" />

      <div className="flex flex-col h-5/6 items-center justify-center gap-4">
        <TabsSection data={convertedArray} />

        <SubmitSection />
      </div>
    </div>
  )
}
