import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
            <p className="ml-3 text-xl">김재현 포트폴리오</p>
          </Link>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/">
              <p className="mr-5 hover:text-gray-900">home</p>
            </Link>
            <Link href="/portfolio">
              <p className="mr-5 hover:text-gray-900">portfolio</p>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
