import { Route, Routes } from "react-router";

import PeoplePage from "@containers/PeoplePage";
import HomePage from "@containers/HomePage";

const useRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/people" element={<PeoplePage />}/>
        </Routes>
    )
};

export default useRoutes;