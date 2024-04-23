import { Link } from "react-router-dom";
import PageNav from "../Components/PageNav";
import App from "./AppLayout";
import AppNav from "../Components/AppNav";
function Home() {
  return (
    <div>
      <PageNav></PageNav>
      <AppNav></AppNav>
      <h1>World Wise</h1>
      <p>Conteúdo da página</p>

      <Link to="/AppLayout">go to app</Link>
    </div>
  );
}

export default Home;
