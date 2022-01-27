import React, { Suspense } from 'react';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import NotFound from './components/NotFound';

// lazy load - Code splitting
/*
 * Should use Suspense when using React.lazy()
 * React.lazy dùng khi ta cần load thằng nào thì chỉ load component đó thôi
 * React.lazy() sẽ show ra 1 trạng thái loading cho đến khi trang được load hoàn toàn
 */
const Photo = React.lazy(() => import('./features/Photo'));

function App() {
  return (
    <div className="photo-app">
      {/* We can put the loading animation here, it will show while the page is loading */}
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          {/* Header is common component that is displayed all pages */}
          <Header />

          <Routes>
            <Route path="/" element={<Navigate to="/photos" />} />

            <Route path="/photos/*" element={<Photo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;

/*
 * React-router-dom v6:
  - Replace component={NotFound} -> element={<NotFound/>}
  - <Redirect from="" to="" /> -> <Route path="/" element={<Navigate to="/photos" />} />
 */

/*
 ** Relative imports with jsconfig
 * Reference link: "https://code.visualstudio.com/docs/languages/jsconfig"
 * Exclude: include all folder except the folder that listed in exclude
 * Include: the reverse of Exclude
 */
