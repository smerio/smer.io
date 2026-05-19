import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import SubNav from './SubNav';
import Footer from './Footer';

const Layout = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <SubNav />
            <main style={{ flex: 1, position: 'relative' }}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
