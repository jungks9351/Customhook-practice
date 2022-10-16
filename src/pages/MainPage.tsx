import Footer from 'src/components/common/Footer';
import Header from 'src/components/common/Header';
import Layout from 'src/components/common/Layout';
import Main from 'src/components/common/Main';
import LinkList from 'src/components/main/LinkList';

const MainPage = () => {
  return (
    <Layout>
      <Header />
      <Main>
        <LinkList />
      </Main>
      <Footer />
    </Layout>
  );
};

export default MainPage;
