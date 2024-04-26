import { CheckboxInline } from "@/components/shared/checkbox-inline";
import { DetailCard } from "@/components/shared/detail-card";
import { Dropdown } from "@/components/shared/dropdown";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AdjustmentsHorizontalIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Globe, X } from "lucide-react";

export default function Home() {
  return (
    <main className="w-[95%] lg:w-[80%] my-10 mx-auto ">
      {/* header  */}
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <Button variant="outline" size="sm" className="flex justify-center items-center gap-2 rounded-[10px] text-sm p-2">
            <AdjustmentsHorizontalIcon className="w-4 h-4 text-[#00afd4]" />
            Filters
          </Button>
          <Dropdown />
          <Button variant="outline" size="sm" className="hidden lg:flex justify-center items-center gap-2 rounded-[10px] text-sm p-2">
            <MagnifyingGlassIcon className="w-4 h-4" />
            Search
          </Button>
        </div>
        <div>
          <Button variant="outline" size="sm" className="hidden lg:flex justify-center items-center gap-2 rounded-[10px] text-sm p-2 text-[#00afd4]">
            <Globe className="w-4 h-4 text-[#00afd4]" />
            Live Map View
          </Button>
        </div>
      </div>

      {/* main cards container  */}
      <div className="flex justify-center items-start gap-5 mt-5">

        <Card className="hidden lg:flex  flex-col gap-5 w-[345px] rounded-[10px] p-3 border border-gray-200">
          <div className="flex justify-between items-center">
            <h1 className="font-bold">Filters</h1>
            <X className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-medium">Operating in</h1>
            <Dropdown />
          </div>
          <hr />
          <div className="flex flex-col gap-2">
            <h1 className="font-medium">Ferry types</h1>
            <div className="flex flex-col gap-3">
              <CheckboxInline label="Normal faries" />
              <CheckboxInline label="High-speed ferries" />
            </div>
          </div>

        </Card>

        <Card className="flex flex-col gap-5 w-full rounded-[10px] border-none shadow-none">
          <DetailCard />
        </Card>

      </div>
    </main>
  );
}
