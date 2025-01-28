import { Button } from "@mui/material";
import './Navigation.css';
import Footer from "../Footer/Footer";
// eslint-disable-next-line react/prop-types
const Navigation = ({children}) =>{
    return<>
    <div className="flex flex-col items-center">
    {/* <nav 
    style={{
        backgroundColor:"#208176"
    }}
    className="top-navigation  w-full h-32 flex items-center justify-between p-10">
      <div></div>
      <div className="logo">
        
      </div>
      <div></div>
      </nav> */}
    <nav 
    style={{
        backgroundColor:"#208176"
    }}
    className="bottom-navigation w-full h-20 flex items-center justify-between p-10 ">
      <img src="Unity.png" className="w-28" alt="" srcset="" />
      <div className="menus text-white">
        <a href="/">Home</a>
        <a href="/Services">Services</a>
        <a href="/Aboutus">About us</a>
      </div>
      <div className="login_btn">
      <Button style={{
                padding:"7px 30px 7px 30px",
                backgroundColor:"white",
                fontSize:"17px",
                color:"black",
                textTransform:"capitalize",
                fontWeight:"600",
                fontFamily:"Poppins",
                borderRadius:".45rem"
             }}>Login</Button>
      </div>
      </nav>
      {children}
      <div className="footer h-full w-full">
        <Footer></Footer>
      </div>
    </div>
    </>
}
export default  Navigation;