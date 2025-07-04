import React from 'react'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';

export default function Multipage() {
  return (
    <div>
      <div className="">
        <Router>
          <nav className="bg-gray-400 text-white p-4 flex items-center justify-center">
            <ul className="flex space-x-4">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Router>

        {/* <Hooks /> */}
        {/* <Todo/> */}
        {/* <h1 className="text-center mt-10 color:black text:2xl">Jokes</h1>
        <Joke/> */}
        {/* <Counter /> */}
      </div>
    </div>
  );
}
