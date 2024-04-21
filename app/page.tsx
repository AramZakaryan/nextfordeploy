import Image from "next/image";
import {prisma} from "@/lib/prisma";

export default async function Home() {
  const mardiq = await prisma.mard.findMany()
  return (<>
    <h1>next for deploy 1</h1>
        <h2>{mardiq[0].name}</h2>
      </>
  );
}
