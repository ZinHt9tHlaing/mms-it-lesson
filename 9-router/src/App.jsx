import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/Home.page";
import AboutPage from "./page/About.page";
import ContactPage from "./page/Contact.page";
import NavComponents from "./components/Nav.components";
import BookPage from "./page/book/Book.page";
import DetailBook from "./page/book/DetailBook";
import AuthorPage from "./page/book/AuthorPage";
import NotFound from "./NotFound";

const App = () => {
  return (
    <div className="p-2">
      <BrowserRouter>
        <NavComponents />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/book/:id" element={<DetailBook />} />
          <Route path="/book/:id/author" element={<AuthorPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
