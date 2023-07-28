interface UrlPageProps {
  params: {};
  searchParams: {
    url?: string;
  };
}

export default function Home({ searchParams }: UrlPageProps) {
  const url = searchParams?.url || "";

  return <iframe className="min-h-screen w-full" src={url} allowFullScreen />;
}
