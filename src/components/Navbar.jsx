import { FloatingNav } from "./ui/floating-navbar"

function Navbar({out}) {

    const navItems = [
        {
            name: "Home",
            link: "/",
            //   icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Terms of Service",
            link: "/terms-of-service",
            //   icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Contact",
            link: "/contact",
            // icon: <IconContact className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Immense Brain 🌟",
            link: "/pro",
            // icon: <IconContact className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
    ];

    const navItems2 = [
        {
            name: 'L',
            link: '/login'
        },
        {
            name: 'R',
            link: '/register'
        },
        {
            name: 'C',
            link: '/cart'
        }
    ]

    return (
        <div className="relative w-full" id="top">
            <FloatingNav navItems={out ? navItems : navItems2 } out={out}/>
        </div>
    )
}

export default Navbar