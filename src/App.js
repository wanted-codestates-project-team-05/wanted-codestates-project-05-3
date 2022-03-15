import GlobalStyle from './GlobalStyle';
import Setting from './components/Setting';
import ListContainer from './components/ListContainer';
import FakeHomePage from './components/ItemMoveButton/FakeHomePage';

function App() {
  return (
    <>
      <GlobalStyle />
      {/*<Homepage />*/}
      {/*<ListContainer />*/}
      <FakeHomePage />
      <ListContainer />
      <Setting />
    </>
  );
}

export default App;
