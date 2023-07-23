import {Outlet} from 'react-router-dom';
import MainNavegation from '../components/MainNavegation';
const RootLayout = () =>{
    return(
        <>
        <MainNavegation/>
        <Outlet/>
        </>
    );
};
export default RootLayout;