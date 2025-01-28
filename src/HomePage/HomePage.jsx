import { Button } from "@mui/material";
import Navigation from "../Navbar/NavigationBar";
import './HomePage.css';
import { CiMobile1 } from "react-icons/ci";
import ServicesData from "../utlis/Data/Service";

const HomePage = () => {
    return <>
        <Navigation>
            <div className="HomePage">
                <div className="section1">
                    <div className="firstSection w-full p-10 items-center flex flex-wrap">
                        <div className="textContent w-1/2 mt-32 h-full flex items-center flex-col ">
                            <h1 className="text-7xl p-5 font-semibold text-white flex-wrap">Banking Solution For <span>Digital Era</span> </h1>
                            <div className="textContentSubtitle  flex items-center ">
                                <h1 className="text-base items-center align-middle p-5 font-normal text-white flex-wrap">
                                    Welcome to Unity Bank, where we prioritize secure and seamless banking experiences. Manage your finances with ease through our user-friendly platform offering services like online banking, secure payments, and personalized financial solutions. Let me know if you'd like to tweak it further!
                                </h1>
                            </div>
                            <div className="loginBtn items-start w-full pl-6">
                                <Button style={{
                                    padding: "10px 55px 10px 55px",
                                    backgroundColor: "white",
                                    fontSize: "18px",
                                    color: "black",
                                    textTransform: "capitalize",
                                    fontWeight: "600",
                                    fontFamily: "Poppins",
                                    borderRadius: "10rem"
                                }}>Login</Button>
                            </div>
                        </div>
                        <div className="textContent mt-12 w-1/2 h-full flex items-center flex-col flex-wrap ">
                            <img className=" rounded-lg" src='./upperSection.webp'></img>
                        </div>

                    </div>
                </div>
                <div className="banner">
                    <img src="RBI_Banner_2_English.webp" className="object-cover w-full" alt="" srcset="" />
                </div>
                {/* <div className="section2 mt-32 mb-14">
                    <h1 className="text-7xl p-8 font-semibold">Services</h1>
                    <div className="servicesCard flex flex-row flex-wrap items-center justify-center space-x-4 sm:space-x-2 pl-20 mt-20">
                        {ServicesData.map((service, index) => {
                            return (
                                <div
                                    key={index}
                                    className="containerCard p-4 flex flex-col items-center justify-between w-64 h-64 sm:w-48 sm:h-48 border rounded-lg shadow-lg"
                                >
                                    <div className="image w-full flex justify-center">
                                        <img
                                            src={service.img_url}
                                            alt={service.name}
                                            className="p-4 w-3/4 object-contain"
                                        />
                                    </div>
                                    <h2 className="text-center text-lg font-medium">{service.name}</h2>
                                </div>
                            );
                        })}
                    </div>

                </div> */}

<section className="pt-0 lg:pt-[120px] pb-12 lg:pb-[90px]">
   <div className="container">
      <div className="flex flex-wrap -mx-4">
         <div className="w-full px-4">
            <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
               <span className="font-semibold text-2xl text-primary mb-2 block">
               Our Services
               </span>
               <h2
                  className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                  >
                  What We Offer
               </h2>
               <p className="text-base text-body-color">
                  There are many Various Service that We Offers
               </p>
            </div>
         </div>
      </div>
      <div className="flex flex-wrap -mx-4">
         <div className="w-full md:w-1/2 lg:w-1/3 px-4 ">
            <div
               className="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               h-80
               shadow-md
               hover:shadow-lg
               mb-8
               "
               >
               <div
                  className="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  "
                  >
                  <img src="BBPS_Logo.png" alt="" srcset="" />
               </div>
               <h4 className="font-semibold text-xl text-dark mb-3">
                  Bharat Bill Pay
               </h4>
               <p className="text-body-color">
               Bharat Bill Payment System is a Reserve Bank of India (RBI) conceptualize ecosystem driven by National Payments Corporation of India (NPCI).

               </p>
            </div>
         </div>
         <div className="w-full md:w-1/2 lg:w-1/3 px-4 h-80">
            <div
               className="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
                h-80
               hover:shadow-lg
               mb-8
               "
               >
               <div
                  className="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  "
                  >
                  <img src="transference.png" alt="" srcset="" />
               </div>
               <h4 className="font-semibold text-xl text-dark mb-3">
               Domestic Money Transfer
               </h4>
               <p className="text-body-color">
               We are providing Domestic Money Transfer (DMT) that offers customers an easy, safe, secure, and instant way to send money with banking establishments
               </p>
            </div>
         </div>
         <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
               className="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
                h-80
               shadow-md
               hover:shadow-lg
               mb-8
               "
               >
               <div
                  className="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  "
                  >
                  <img src="payout.png" alt="" />
               </div>
               <h4 className="font-semibold text-xl text-dark mb-3">
               Payout API
               </h4>
               <p className="text-body-color">
               With Our Payout API merchants can easily settle payments to multiple bank accounts.
               Merchant gets access to Real-time Transaction reports.
               </p>
            </div>
         </div>
         <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
               className="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               "
               >
               <div
                  className="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  "
                  >
                  <img src="aeps-new.jpg" alt="" srcset=""/>
               </div>
               <h4 className="font-semibold text-xl text-dark mb-3">
                AEPS 
               </h4>
               <p className="text-body-color">
               We at Unity Bank Providing AEPS- Aadhaar Enabled Payment System API which will a best solution for Cash Deposit and Cash Out for Rural India.
               </p>
            </div>
         </div>
         <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
               className="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               "
               >
               <div
                  className="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  "
                  >
                 <img src="light-weight-pos-machine.jpg" alt="" srcset="" />
               </div>
               <h4 className="font-semibold text-xl text-dark mb-3">
                P O S
               </h4>
               <p className="text-body-color">
               POS, or simply Point Of Sales also known as the point of purchase is the time and place where a retail transaction is completed. It is used to collect face to face payments from customers. 
               </p>
            </div>
         </div>
         <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
               className="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               "
               >
               <div
                  className="
                  w-[70px]
                  h-[90px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  "
                  >
                  <img src="micro-mini-atm.jpg" alt="" />
               </div>
               <h4 className="font-semibold text-xl text-dark mb-3">
               Mini ATM
               </h4>
               <p className="text-body-color">
               Micro Aadhaar ATM is meant to be a device that is used by a million Business Correspondents (BC) to deliver basic banking services. 
               </p>
            </div>
         </div>
      </div>
   </div>
</section>
               
               
                <div className="section3 mt-32 mb-2">
                    <div className="">
                       <img src="highsecure.png"/>
                    </div>
                </div>
                <div className="section4 mt-0 mb-14">
                    <div className="">
                       <img src="homeBanner.jpg" className=" w-full"/>
                    </div>
                </div>
                <div className="section5 mt-32 mb-14 ">
                    
                    <div className="flex-row flex  justify-between">
                    <h2>ATM/Branch Locator</h2>
                       <img src="branch.webp"/>
                    </div>
                </div>
            </div>
        </Navigation>
    </>
}
export default HomePage;