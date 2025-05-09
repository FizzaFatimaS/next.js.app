import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full max-w-xl">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <h1 className="text-2xl font-semibold text-center sm:text-left">Book an Appointment</h1>

        <form className="flex flex-col gap-4 w-full">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="border border-gray-300 p-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="border border-gray-300 p-2 rounded"
            required
          />
          <input
            type="datetime-local"
            name="datetime"
            className="border border-gray-300 p-2 rounded"
            required
          />
          <textarea
            name="reason"
            placeholder="Reason for Appointment"
            className="border border-gray-300 p-2 rounded resize-none"
            rows={4}
            required
          />
          <button
            type="submit"
            className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
          >
            Submit
          </button>
        </form>
      </main>

      <footer className="row-start-3 text-sm text-center text-gray-500">
        © 2025 Your App — All rights reserved.
      </footer>
    </div>
  );
}