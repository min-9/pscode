import NoticeList from '@/components/NoticeList';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="container mx-auto">
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-6 mx-auto">
            <NoticeList />
          </div>
        </section>
      </div>
    </main>
  );
}
