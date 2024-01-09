import { FC } from 'react';
import { Outlet } from 'react-router';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const Root: FC = () => {
    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Menu />
            <div style={{ flex: 1 }}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;
