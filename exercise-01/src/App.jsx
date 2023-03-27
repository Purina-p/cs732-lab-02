import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PageLayout from './PageLayout';
import Error from './Error';

function App() {

  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>

      <Route path="*" element={<Error/>} />
    </Routes>
  );
}
//routes下面连接两个route组件
//pagelayout是页头和页尾，他是两个页面都要包含的，所以设他为一个公用组件，里面包含同级的homepage和aboutpage
export default App;