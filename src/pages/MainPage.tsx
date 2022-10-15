import Footer from 'src/components/common/Footer';
import Header from 'src/components/common/Header';
import Layout from 'src/components/common/Layout';
import Main from 'src/components/common/Main';

const MainPage = () => {
  return (
    <Layout>
      <Header />
      <Main>
        <div>Hello</div>
      </Main>
      <Footer />
    </Layout>
  );
};

export default MainPage;
