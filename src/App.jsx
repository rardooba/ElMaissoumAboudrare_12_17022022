import Header from "./Components/Ui/Header";
import AsideLeft from "./Components/Ui/AsideNav/AsideLeft";

import styled from "styled-components";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Main>
        <AsideLeft/>
        <Outlet />
      </Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  height: 100%;
`;

export default App;
