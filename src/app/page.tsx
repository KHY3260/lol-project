import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold text-red-500 mb-10">환영합니다!</h1>
      <p className="text-lg text-gray-300 mb-10 text-center">
        이 앱은 챔피언, 아이템, 로테이션 정보를 제공합니다.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <Link href="/champions" className="text-center">
          <Image
            src="/DRX.jpg"
            alt="챔피언 목록"
            width={300}
            height={200}
            className="rounded-lg shadow-lg"
          />
          <p className="mt-4 text-yellow-400 font-bold">챔피언 목록 보기</p>
        </Link>
        <Link href="/items" className="text-center">
          <Image
            src="/Faker.jpg"
            alt="아이템 목록"
            width={300}
            height={200}
            className="rounded-lg shadow-lg"
          />
          <p className="mt-4 text-yellow-400 font-bold">아이템 목록 보기</p>
        </Link>
        <Link href="/rotation" className="text-center">
          <Image
            src="/SKT.jpg"
            alt="로테이션 확인"
            width={300}
            height={200}
            className="rounded-lg shadow-lg"
          />
          <p className="mt-4 text-yellow-400 font-bold">금주의 로테이션 확인</p>
        </Link>
      </div>
    </div>
  );
}
