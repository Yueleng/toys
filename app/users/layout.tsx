export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <main className="mx-auto flex max-w-5xl flex-col gap-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold">Users</h1>
          <p className="text-gray-700">
            Fetched from jsonplaceholder and loaded on demand when you click a
            name.
          </p>
        </header>
        {children}
      </main>
    </div>
  );
}
