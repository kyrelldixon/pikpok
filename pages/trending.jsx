import Layout from "../components/layout";
import { FiPlay } from "react-icons/fi";

const Card = ({ views }) => (
  <div className="relative w-48 h-64 mb-4 mr-4 bg-blue-400 rounded">
    <div className="absolute flex flex-col justify-end w-full h-full px-4 pb-3">
      <img
        className="inline-flex items-center justify-center w-10 h-10 mb-3 bg-red-400 border border-white rounded-full"
        src="https://i.pravatar.cc/50"
        alt="avatar"
      />
      <div className="flex items-center font-bold text-white">
        <FiPlay /> <p className="ml-2">{views}</p>
      </div>
    </div>
  </div>
);

export default () => (
  <Layout>
    <main className="px-4 py-16">
      <header className="mb-8">
        <h1 className="text-5xl font-bold leading-tight">Trending</h1>
        <p className="text-lg text-gray-400">
          Watch the latest videos from our community
        </p>
      </header>
      <div className="flex flex-wrap">
        <Card views="1.2M" />
        <Card views="1.2M" />
        <Card views="1.2M" />
        <Card views="1.2M" />
      </div>
    </main>
  </Layout>
);
