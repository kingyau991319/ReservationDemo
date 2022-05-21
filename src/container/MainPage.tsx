// react
import { Route, Routes } from "react-router-dom";

// components
import TopBar from "../components/TopBar";
import NewResv from "../components/NewResv/NewResv";
import SearchResv from "../components/SearchResv";

const MainPage = () => {

  // TODO: make maxWidth and let the components to be center align
  return (
    <>
      <TopBar/>
      <Routes>
        <Route path="/">
          <Route path=":lang/">
            <Route path="new" element={<NewResv/>}/>
            <Route path="search" element={<SearchResv/>}/>
          </Route>
        </Route>
        {/* <Route path="*" onEnter={userRedirect} /> */}
      </Routes>
    </>
  );
}

export default MainPage;
