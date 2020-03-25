import Layout from "../components/layout";

export default () => (
  <Layout>
    <main className="pt-15">
      <div
        className="h-screen bg-blue-500 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(/adam-whitlock-I9j8Rk-JYFM-unsplash.jpg)"
        }}
      >
        <header className="pt-40 text-center text-white">
          <h1 className="text-5xl font-bold leading-tight">Make Your Day</h1>
          <h2 className="text-2xl font-semibold">Real People. Real Videos</h2>
        </header>
      </div>
    </main>
  </Layout>
);
