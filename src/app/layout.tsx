// src/app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "My App",
  description: "챔피언, 아이템, 로테이션 정보를 제공하는 웹 애플리케이션",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <div>
          <header className="bg-gray-800 text-white p-4">
            <nav className="container mx-auto flex justify-between">
              <div className="text-lg font-bold">My App</div>
              <ul className="flex gap-4">
                <li>
                  <a href="/">홈</a>
                </li>
                <li>
                  <a href="/champions">챔피언</a>
                </li>
                <li>
                  <a href="/items">아이템</a>
                </li>
                <li>
                  <a href="/rotation">로테이션</a>
                </li>
              </ul>
            </nav>
          </header>
          <main className="container mx-auto py-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
