import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Optimiser } from '../pages/Optimiser';
import { Home } from '../pages/Home';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Optimiser />} />
        <Route path="/">
          <Route path="*" element={<Optimiser />} />
          <Route path="/Home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
