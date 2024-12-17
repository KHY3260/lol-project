<<<<<<< Updated upstream
export default function ItemsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">아이템 목록</h1>
    </div>
=======
import { fetchItemList } from "@/utils/serverApi";
import { Item } from "@/types/items";
import ItemListClient from "@/components/ItemListClient";

export default async function ItemsPage() {
  const items: Item[] = await fetchItemList();

  return (
    <section className="bg-gray-900 text-white min-h-screen py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-red-400">
        아이템 목록
      </h1>
      <ItemListClient items={items} />
    </section>
>>>>>>> Stashed changes
  );
}
