export function Title() {
  return (
    <>
      <div className=" flex items-center gap-2 justify-center my-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ea1a4e"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-shield-plus w-14"
        >
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
          <path d="M9 12h6" />
          <path d="M12 9v6" />
        </svg>
        <h1 className="  text-2xl font-bold">Medical Information</h1>
      </div>
    </>
  );
}
