import React,{Suspense} from "react"
import {Provider} from "react-redux"
import { BrowserRouter } from "react-router-dom";
import { RoutePage } from "./pages/routes";

function App({store, persistor, basename}) {
  
  return (
      <Provider store={store}>
          <Suspense>
           <BrowserRouter basename={basename}>
            <RoutePage/>
           </BrowserRouter>
           </Suspense>
       </Provider>

    );
  }

export default App;
