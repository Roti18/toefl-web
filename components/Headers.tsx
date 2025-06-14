export default function Header() {
  return (
    <header className="w-full flex py-10">
      <div className="flex justify-between items-center">
        <p className="text-2xl">
          Ini<span>Logo</span>
        </p>
        <a href="/tests">
          <button className="nes-btn">Try Now</button>
        </a>
      </div>
    </header>
  );
}
