import GridOptions from "@/components/GridOptions";

export default function Home() {
  return (
    <main className="">
      <div className="grid grid-cols-1 grid-flow-row-dense md:grid-cols-4 gap-6 m-6">
        <GridOptions
          title="Fresh & fabulous beauty"
          image="https://i5.walmartimages.com/dfw/4ff9c6c9-e940/k2-_061463ff-2cd3-4b24-9af5-cb54ecdedbaf.v1.jpg?odnHeight=256&odnWidth=385&odnBg=&odnDynImageQuality=70%201x,%20https://i5.walmartimages.com/dfw/4ff9c6c9-e940/k2-_061463ff-2cd3-4b24-9af5-cb54ecdedbaf.v1.jpg?odnHeight=512&odnWidth=770&odnBg=&odnDynImageQuality=70"
          className="bg-pink-200 h-full md:h-32"
        />
        <GridOptions
          title="Looking fashion-forward"
          image="https://i5.walmartimages.com/dfw/4ff9c6c9-2323/k2-_2d061364-a4ea-4382-9884-d70c00c5b858.v1.jpg?odnHeight=1156&odnWidth=770&odnBg=&odnDynImageQuality=70"
          className="bg-pink-100 col-span-2 row-span-2"
        />
        <GridOptions
          title="Sweet gifts for less"
          image="https://i5.walmartimages.com/dfw/4ff9c6c9-e7cb/k2-_2b10fd63-f0bf-4c8c-9c89-7dc4fac4c159.v1.jpg?odnHeight=447&odnWidth=794&odnBg=&odnDynImageQuality=70"
          className="bg-pink-200 row-span-2"
        />
        <GridOptions
          title="Tech upgrades await"
          image="https://i5.walmartimages.com/dfw/4ff9c6c9-8af9/k2-_5e1c04e3-cad1-49a6-a652-e720a6e32d56.v1.jpg?odnHeight=432&odnWidth=770&odnBg=&odnDynImageQuality=70"
          className="bg-yellow-100 h-64"
        />
        <GridOptions
          title="Just add accents"
          image="https://i5.walmartimages.com/dfw/4ff9c6c9-dc6c/k2-_5590ae59-c163-4a66-911d-f97ee3494f04.v1.jpg?odnHeight=776&odnWidth=770&odnBg=&odnDynImageQuality=70"
          className="bg-blue-200  h-64"
        />
        <GridOptions
          title="Never enough shoes"
          image="https://i5.walmartimages.com/dfw/4ff9c6c9-50f6/k2-_5543d0a5-212c-4dc8-b4c9-10712809381f.v1.jpg?odnHeight=512&odnWidth=770&odnBg=&odnDynImageQuality=70"
          className="bg-pink-200 h-64"
        />
        <GridOptions
          title="Living room updates"
          image="https://i5.walmartimages.com/dfw/4ff9c6c9-24ba/k2-_d53d049f-a31a-4b6b-9409-3367cc7e52f7.v1.jpg?odnHeight=432&odnWidth=770&odnBg=&odnDynImageQuality=70"
          className="bg-blue-200 col-span-2 h-64 row-span-2"
        />
      </div>
    </main>
  );
}
