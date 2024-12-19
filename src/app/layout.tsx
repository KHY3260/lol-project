import "./globals.css";
import Providers from "@/components/provider";

export const metadata = {
  title: "League of Legends Information",
  description: "챔피언, 아이템, 로테이션 정보를 제공하는 웹 애플리케이션",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-black text-white min-h-screen flex flex-col">
        <Providers>
          <header className="bg-gray-900 text-white p-4 shadow-md">
            <nav className="container mx-auto flex items-center justify-between">
              <div className="text-2xl font-extrabold text-red-500 tracking-wide">
                League of Legends Information
              </div>
              <ul className="flex gap-8 text-lg">
                <li>
                  <a
                    href="/"
                    className="hover:text-red-500 transition duration-300"
                  >
                    홈
                  </a>
                </li>
                <li>
                  <a
                    href="/champions"
                    className="hover:text-red-500 transition duration-300"
                  >
                    챔피언 목록
                  </a>
                </li>
                <li>
                  <a
                    href="/items"
                    className="hover:text-red-500 transition duration-300"
                  >
                    아이템 목록
                  </a>
                </li>
                <li>
                  <a
                    href="/rotation"
                    className="hover:text-red-500 transition duration-300"
                  >
                    챔피언 로테이션
                  </a>
                </li>
              </ul>
            </nav>
          </header>
          <main
            className="flex-grow container mx-auto py-8"
            style={{ paddingTop: "0", paddingBottom: "0" }}
          >
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
