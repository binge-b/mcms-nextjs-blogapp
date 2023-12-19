// "use client";

import Book from "./components/Book";
import { getAllBooks } from "./libs/microcms/client";


// eslint-disable-next-line @next/next/no-async-client-component
export default async function Home() {
  const { contents } = await getAllBooks();
  // console.log(contents);


  return (
    <div className="md:flex">
      <main className="w-full md:w-2/3 flex flex-col items-center px-3">
        {/* <h2 className="text-center w-full font-bold text-3xl mb-2">Works</h2> */}
        {contents.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </main>

      <aside className="w-full md:w-1/3 flex flex-col items-center px-3 md:pl-6">
        <div className="bg-gray-200 shadow-md rounded p-4 mb-6 mt-4">
          <h3 className="font-bold text-sky-950 mb-2">About Me</h3>
            <ul>
              <li className="px-3 py-1">
                <p>2021年より現職の総合歯科医院臨床研修施設で在庫管理アプリを使用したクラウド化プロジェクトを担当し約1200アイテムのデータベース管理を行い、運用1年目で約340万円のコスト削減を実現しました！</p>
              </li>
              <li className="px-3 py-1">
                <p>（震災復興NPO→朝のニュース番組のスタッフ→農業... と少し変わった職務経歴を持っています）</p>
              </li>
              <li className="px-3 py-1">
                <p>膨大な事務作業を効率化できないかと、ChatGPTを使ったことがきっかけでプログラミングと出会い、7月よりインターネットアカデミーのAIエンジニア育成コースを受講。毎日新しいコードや機能の実装にトライしており、3日ほどでアプリやWebサイトの大まかな要素の実装ができます。</p>
              </li>
              <li className="px-3 py-1">
                <p>Next.js,React,TS,JS,Tailwindcss,Prisma,microCMS,Supabaseの使用した実装経験があります。良いアイディアをフルスタックで開発できるようになることを目指して、今日も楽しくプログラミング中～！ ^o^</p>
              </li>
            </ul>
        </div>

        <div className="bg-gray-200 shadow-md rounded p-4 mb-6 mt-4 w-full">
          <h3 className="font-bold text-sky-950 mb-2">使用したことのあるStack</h3>
          <ul>
            <li className="text-red-600">
              <a href="#">Figma</a>
            </li>
            <li className="text-red-600">
              <a href="#">Next.js</a>
            </li>
            <li className="text-red-600">
              <a href="#">React</a>
            </li>
            <li className="text-red-600">
              <a href="#">TypeScript</a>
            </li>
            <li className="text-red-600">
              <a href="#">JavaScript</a>
            </li>
            <li className="text-red-600">
              <a href="#">Tailwindcss</a>
            </li>
            <li className="text-red-600">
              <a href="#">Prisma</a>
            </li>
            <li className="text-red-600">
              <a href="#">microCMS</a>
            </li>
            <li className="text-red-600">
              <a href="#">Supabase</a>
            </li>
            <li className="text-red-600">
              <a href="#">Postman</a>
            </li>
            <li className="text-red-600">
              <a href="#">jQuery</a>
            </li>
            <li className="text-red-600">
              <a href="#">CSS</a>
            </li>
            <li className="text-red-600">
              <a href="#">HTML</a>
            </li>
            
          </ul>
        </div>
      </aside>
    </div>
  );
}

// className="flex flex-wrap justify-center items-center md:mt-32 mt-20"