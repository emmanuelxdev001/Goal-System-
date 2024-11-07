import { RouterProvider } from "react-router-dom";

import { mainRouter } from "./router/mainRouter";

const App = () => {
  return (
    <div className="">
      <RouterProvider router={mainRouter} />
    </div>
  );
};

export default App;
