import AllRoutes from "./AllRoutes/AllRoutes";
// import "./App.css";
import Footer from "./components/Footer/Footer";
import AOS from "aos";

import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";

//import Navbar from "./components/Navbar/Navbar";

function App() {
    AOS.init();
    // window.scrollTo(0, 0);
  return (

      // <div className="main-wrapper">
      //     <div className="super_container">
      //         <header className="header trans_300">
      //             <TopNavBar className={this.state.topHaderClass} />
      //             <NavBarContainer />
      //         </header>
      //         <div className="layout-Container">{this.props.children}</div>
      //         <Footer />
      //     </div>
      // </div>

      <div>
              <div>
                  <AllRoutes />
              </div>
              <Footer />
      </div>

    // <div className="layout-Container">
    //   {/* <Navbar /> */}
    //   <AllRoutes /><br/>
    //   <Footer />
    // </div>
  );
}

export default App;

export const nav = () => {
  return <>navigate("/cart")</>;
};
