import Sidebar from '@/app/dashboard/sidebar';


export const metadata = {
    title: 'Dashboard | New 2024',
    description: 'Next Hero',
}

const DashboardLayoutPage = ({ children }) => {
    return (
        <div className='flex container mx-auto'>
            <Sidebar />
            {children}

        </div>
    );
};

export default DashboardLayoutPage;