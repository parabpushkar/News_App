import { useState } from "react";
import { Navbar } from "./Components/Navbar";
import { Newsbord } from "./Components/Newsbord";

export const App = () => {
  const [category, setCategory] = useState("general");

  return (
    <div className="container mt-3">
      <Navbar setCategory={setCategory} />
      <Newsbord category={category} />
    </div>
  );
};
