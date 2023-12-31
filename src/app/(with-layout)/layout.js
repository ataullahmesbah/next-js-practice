import Navbar from '@/component/Navbar';

const WithLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <footer>
                <a className='text-xl font-semibold' href="/">Footer..</a>
            </footer>
        </div>
    );
};

export default WithLayout;