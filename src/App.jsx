import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRouter from "./routes/ProtectedRouter";
import ProtectedPublicRouter from "./routes/PortectedPublicRouter";
import Navbar from "./components/Navbar";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Layout from "./Layouts/Layout";
import AuthLayout from "./Layouts/AuthLayout";
import HomeFree from "./components/public/ComponentHomeFree";
import NavbarFree from "./components/public/NavbarFree";
import ComponetMenuFree from "./components/ComponentMenu";
import ComponentPizzaFree from "./components/public/ComponentPizzaFree";
import ComponentBurger from "./components/public/ComponentBurgerFree";
import ComponentDrinkFree from "./components/public/ComponentDrinkFree";
import ComponentIceCreamFree from "./components/public/ComponentIceCreamFree";
import AdminPagePedidos from "./pages/AdminPagePedidos";
import AdminRoute from "./routes/AdminRoute";
import AdminPageAdd from "./pages/AdminPageAddProduct";
import AdminPageRemove from "./pages/AdminPageRemoveProduct";
import Pizza from "./pages/Pizza";
import Hambúrguer from "./pages/Hambúrger";
import Drink from "./pages/Drink";
import IceCream from "./pages/IceCream";
import Cart from "./pages/Cart";
import Pix from "./pages/Pix";
import Pedidos from "./pages/Pedidos";
import AuthLayoutAdmin from "./Layouts/AuthLayoutAdmin";
import ComponentNavMobile from "./components/ComponentNavMobile";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          {/** Pages publica */}
          <Route element={<AuthLayout/>}>
            <Route path="/home" element={<ProtectedPublicRouter><HomeFree/></ProtectedPublicRouter>}/>
            <Route path="/pizza_public" element={<ComponentPizzaFree/>}/>
            <Route path="/burger_public" element={<ComponentBurger/>}/>
            <Route path="/drink_public" element={<ComponentDrinkFree/>}/>
            <Route path="/icecream_public" element={<ComponentIceCreamFree/>}/>
          </Route>
          {/** Pages logadas */}
          <Route element={<Layout/>}>
           <Route path="/" element={<ProtectedRouter><Home /></ProtectedRouter>}/> 
           <Route path="/pizza" element={<ProtectedRouter><Pizza/></ProtectedRouter>}/>
           <Route path="/burger" element={<ProtectedRouter><Hambúrguer/></ProtectedRouter>}/>
           <Route path="/drink" element={<ProtectedRouter><Drink/></ProtectedRouter>}/>
           <Route path="/icecream" element={<ProtectedRouter><IceCream/></ProtectedRouter>}/>
           <Route path="/cart" element={<ProtectedRouter><Cart/></ProtectedRouter>}/>
           <Route path="/pedido" element={<ProtectedRouter><Pedidos/></ProtectedRouter>}/>
           <Route path="pix" element={<ProtectedRouter><Pix/></ProtectedRouter>}/>
            <Route element={<AuthLayoutAdmin/>}>
                <Route path="/pedidos" element={<AdminRoute><AdminPagePedidos/></AdminRoute>}/>
                <Route path="/add_product" element={<AdminRoute><AdminPageAdd/></AdminRoute>}/>
                <Route path="/remover_product" element={<AdminRoute><AdminPageRemove/></AdminRoute>}/>
            </Route>
          </Route>
          <Route path="/login" element={<ProtectedPublicRouter><Login /></ProtectedPublicRouter>} />
          <Route path="/cadastro" element={<ProtectedPublicRouter><Cadastro /></ProtectedPublicRouter>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
