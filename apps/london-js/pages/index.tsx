import { Button } from "fullstack-react-tdd-example-ui";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="relative flex place-items-center">
        <Button>Hello there</Button>
      </div>
    </main>
  );
}
