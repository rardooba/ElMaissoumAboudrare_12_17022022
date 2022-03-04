import Header from "./Components/Ui/Header";
import AsideRight from "./Components/Ui/AsideRight";

import styled from "styled-components";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Main>
        <AsideRight/>
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
