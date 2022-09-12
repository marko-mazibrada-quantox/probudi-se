import { Routes, Route } from 'react-router-dom';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<div>home</div>}>
        <Route path="temp" element={<div>hello</div>} />
        <Route path="inv" element={<div>2</div>} />
      </Route>
      <Route path="*" element={<div>empty</div>} />
    </Routes>
  );
}

export default Router;
