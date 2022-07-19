import Timeout from './Screens/Timeout'
function Layout({ children }) {
  return (
    <div style={{ backgroundColor: 'RGB(47,48,64)',height:'100vh',color:'white',width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'}}>
      {children}
    </div>
  )
}
function App() {
  return (
    <Layout>
      <Timeout />
    </Layout>
  );
}

export default App;
