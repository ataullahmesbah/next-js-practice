import NavLink from "@/component/NavLink";
import Link from "next/link";

const navLinks = [
    {
        path: '/dashboard',
        title: 'Dashboard',
    },
    {
        path: '/dashboard/add-product',
        title: 'Add Product',
    },
    {
        path: '/dashboard/manage-product',
        title: 'Manage Products',
    },
    {
        path: '/',
        title: 'Home',
    }
]

const Sidebar = () => {
    return (
        <aside className="mr-10">
            <h1 className="text-3xl font-semibold">This is Dashboard Side</h1>
            <ul>
                {
                    navLinks.map(({ path, title }) => 
                    <li className="my-2" key={path}>
                        <NavLink exact activeClassName='text-orange-600' href={path}>{title}</NavLink>
                    </li>)
                }
            </ul>
        </aside>
    );
};

export default Sidebar;