// React
import { Route, Routes } from "react-router-dom";

// Components
import TopBar from "../components/TopBar";
import NewResv from "../components/NewResv/NewResv";
import SearchResv from "../components/SearchResv";

// Material Ui
import Grid from '@mui/material/Grid';

import '../css/mainPage.less'

const MainPage = () => {

  return (
    <div>
      <TopBar/>
      {/* <div id="mainPage"> */}
      <Grid
        sx={{m : 'auto'}} 
        alignItems="center"
        container
        justifyContent="center"
        maxWidth={'1200px'}
      >
        <Routes>
          <Route path="/">
            <Route path=":lang/">
              <Route path="new" element={<NewResv/>}/>
              <Route path="search" element={<SearchResv/>}/>
            </Route>
          </Route>
          {/* <Route path="*" onEnter={userRedirect} /> */}
        </Routes>
      </Grid>
      {/* </div> */}
    </div>
  );
}

export default MainPage;
