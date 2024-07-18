import BlogCard from '../../components/BlogCardMain';
import TradeNavbar from './TradeNavbar';

const Trade = () => {
  return (
    <main className="h-screen overflow-y-auto text-white bg-dark">
      {/* <section
        className="flex flex-col items-center justify-center h-10 py-12 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoYXJ0fGVufDB8fDB8fHww')",
        }}
      >
        <h1 className="text-2xl">Weekly Market Outlook</h1>
        <p className="font-thin">Lorem Ipsum Dolor</p>
      </section> */}
      <section className="trade flex flex-row px-24 py-4 gap-6">
        <TradeNavbar />
        {/* <section className='test-m' style={{ width: '30%', marginTop: '1rem' }}>
          <BlogCard />
          <BlogCard />
        </section> */}
      </section>
    </main>
  );
};

export default Trade;
