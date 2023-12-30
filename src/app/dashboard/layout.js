export const metadata = {
    title: 'Dashboard | New 2024',
    description: 'Next Hero',
}

const DashboardLayoutPage = ({children}) => {
    return (
        <div>
            <div className="">This this dashboard sitebar</div>
            {children}
            
        </div>
    );
};

export default DashboardLayoutPage;