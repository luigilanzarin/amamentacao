function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="flex min-h-screen items-center justify-center px-6 py-16">
        <div className="w-full max-w-2xl rounded-2xl border border-border bg-card p-10 text-center shadow-sm">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Projeto inicial
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Bem-vindo ao projeto
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-muted-foreground">
            A base da aplicação está pronta para receber as próximas funcionalidades.
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
