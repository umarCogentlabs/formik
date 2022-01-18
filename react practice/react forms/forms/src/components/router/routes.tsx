import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FormikForm } from "../FormikForm/FormikForm";
import NewLine from "../FormikForm/NewLine";
// import your route components too

render(
  <BrowserRouter>
    <Routes>
      <Route path='/home' element={<FormikForm />} />
      <Route path='/newline' element={<NewLine />}>
        {/* <Route index element={<Home />} />
        <Route path='teams' element={<Teams />}>
          <Route path=':teamId' element={<Team />} />
          <Route path='new' element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
