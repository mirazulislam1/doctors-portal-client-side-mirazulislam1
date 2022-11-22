import { createBrowserRouter } from "react-router-dom" 
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main/Main"
import AddDoctor from "../../Pages/Appointment/AddDoctor/AddDoctor";
import AllUsers from "../../Pages/Appointment/AllUsers/AllUsers";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import ManageDoctors from "../../Pages/Appointment/ManageDoctors/ManageDoctors";
import Payment from "../../Pages/Dashboard/Dashboard/Payment/Payment";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import DisplayError from "../../Shared/DisplayError/DisplayError";
import SignUp from "../../SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'login',
                element: <Login></Login>
            },
            {
                path:'signup',
                element: <SignUp></SignUp>
            },
           
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path:'/dashboard',
                element:<MyAppointment></MyAppointment>
            },
            {
                path:'/dashboard/AllUsers',
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:'/dashboard/Adddoctor',
                element:<AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path:'/dashboard/manageDoctors',
                element:<AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
            {
                path:'/dashboard/payment/:id',
                element:<AdminRoute><Payment></Payment></AdminRoute>,
                loader:({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
            },
        ]
    },
])

export default router;