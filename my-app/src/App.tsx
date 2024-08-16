import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CreateGroceryPage from "./components/pages/CreateGroceryPage.tsx";
import GroceryPage from "./components/pages/GroceryPage.tsx";
import DetailedGroceryPage from "./components/pages/DetailedGroceryPage.tsx";
import LoginPage from "./components/pages/LoginPage.tsx";
import EditGroceryPage from "./components/pages/EditGroceryPage.tsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="grocery" element={<GroceryPage/>}/>
                    <Route path="grocery/:groceryId" element={<DetailedGroceryPage/>}/>
                    <Route path="login" element={<LoginPage/>}/>
                    <Route path="post" element={<CreateGroceryPage/>}/>
                    <Route path="update/:groceryId" element={<EditGroceryPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App
