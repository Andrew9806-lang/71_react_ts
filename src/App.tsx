// import Lesson
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
// import Lesson09 from "./Lesson/Lesson09/Lesson09"
// import Homework09 from "./Homework/Homework09/Homework"
// import Homework10 from "./Homework/Homework10/Homework10"
<<<<<<< HEAD

// import Lesson12 from "./Lesson/Lesson12/Lesson12";
// import Lesson10 from "./Lesson/Lesson10/Lesson10"
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./pages/pages/Home/Home";
import Users from "./pages/pages/Users/Users";
import User from "./pages/pages/Users/components/User/User";
import About from "./pages/pages/About/About";
=======
// import Lesson12 from "./Lesson/Lesson12/Lesson12"
// import Lesson10 from "./Lesson/Lesson10/Lesson10"
import Homework12 from "./Homework/Homework12/Homework"
import GlobalStyles from "./styles/GlobalStyles"
>>>>>>> a8c46abef7f52434b98eba2e03653c42b12a17da

// import Lesson08 from "./Lesson/Lesson08/Lesson"

// import Homework07 from "./Homework/Homework07/Homework"

// import Lesson06 from "./Lesson/Lesson06/Lesson"

// import domamshnih rabot

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        {/* Routes sobiraet vse marshruti prilozheniya  */}
        <Routes>
          {/* Rout eto komponent kotoriy peredaetsya v marshrut i v kontent  */}
          <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
             <Route path="/users" element={<Users />} />
                  <Route path="/users/user" element={<User />} />
        </Routes>
      </Layout>
  

      {/* lesson06 -TypeScript */}
<<<<<<< HEAD
      {/* <Lesson06 /> */}
      {/* <Homework07 /> */}
      {/* <Homework09 /> */}
      {/* lesson08 */}
      {/* <Lesson08 /> */}
      {/* <Lesson09 /> */}
      {/* <Lesson10 /> */}
      {/* <Homework10 /> */}
      {/* <Lesson12 /> */}
    </BrowserRouter>
  );
=======
   {/* <Lesson06 /> */}
   {/* <Homework07 /> */}
   {/* <Homework09 /> */}
   {/* lesson08 */}
   {/* <Lesson08 /> */}
   {/* <Lesson09 /> */}
   {/* <Lesson10 /> */}
   {/* <Homework10 /> */}
   {/* <Lesson12 /> */}
   <Homework12 />
    </>
  )
>>>>>>> a8c46abef7f52434b98eba2e03653c42b12a17da
}

export default App;
