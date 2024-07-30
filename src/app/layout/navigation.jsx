"use client"
import { ArrowMenu, ChatIcon, NavIcon, SubMenuIcon } from "@/src/app-constants";
import styles from "@/styles/layout/navigation.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Navigation = () => {
    const pathname = usePathname();
    const [isActive, setIsActive] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        // Check screen size on mount
        const checkScreenSize = () => {
            if (typeof window !== 'undefined') {
                const isMobile = window.innerWidth <= 800;
                setIsMobileView(isMobile);
                if (!isMobile && isActive) {
                    // Close menu if it's active and screen width is greater than 800px
                    handleClosed();
                }
            }
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, [isActive]);

    const handleClick = () => {
        setIsActive(!isActive);
        if (!isActive) {
            document.body.classList.add('active');
        } else {
            document.body.classList.remove('active');
        }
    };

    const handleClosed = () => {
        setIsActive(false);
        document.body.classList.remove('active');
    };
    const isSubmenuActive = () => {
        const submenuPaths = [
            "/2d-animations",
            "/3d-animations",
            "/explainer-videos",
            "/infographics-design",
            "/logo-animation",
            "/promotional-videos",
            "/whiteboard-animation"
        ];
        return submenuPaths.includes(pathname);
    };
    return (
        <>
            <div onClick={handleClick}
                className={`${isActive ? 'navIcon active' : 'navIcon'}`}>
                <NavIcon />
            </div>
            <div className={`${styles.mainMenu} ${isActive ? `${styles.active}` : ''}`}>
                <ul>
                    <li className={pathname === "/" ? styles.active : ""} onClick={isMobileView ? handleClosed : undefined}>
                        <Link href="/" aria-label="Home Page">
                            Home
                        </Link>
                    </li>
                    <li className={pathname === "/about" ? styles.active : ""} onClick={isMobileView ? handleClosed : undefined}>
                        <Link href="/about" aria-label="About Page">
                            About
                        </Link>
                    </li>
                    <li className={isSubmenuActive() ? styles.active : ""}>
                        <Link href="#" aria-label="Services Page">
                            Services <SubMenuIcon />
                        </Link>
                        <div className={styles.subMenu} >
                            <div className={styles.MenuListing}>
                                <div className={`${styles.MenuList} ${pathname === "/2d-animations" ? styles.active : ""}`}
                                    onClick={isMobileView ? handleClosed : undefined}>
                                    <Link href="/2d-animations">2D Animations</Link>
                                </div>
                                <div
                                    className={`${styles.MenuList} ${pathname === "/3d-animations" ? styles.active : ""}`}
                                    onClick={isMobileView ? handleClosed : undefined}
                                >
                                    <Link href="/3d-animations">3D Animations</Link>
                                </div>
                                <div
                                    className={`${styles.MenuList} ${pathname === "/explainer-videos" ? styles.active : ""}`}
                                    onClick={isMobileView ? handleClosed : undefined}
                                >
                                    <Link href="/explainer-videos">Explainer Videos</Link>
                                </div>
                                <div
                                    className={`${styles.MenuList} ${pathname === "/infographics-design" ? styles.active : ""}`}
                                    onClick={isMobileView ? handleClosed : undefined}
                                >
                                    <Link href="/infographics-design">Infographics Design</Link>
                                </div>
                                <div
                                    className={`${styles.MenuList} ${pathname === "/logo-animation" ? styles.active : ""}`}
                                    onClick={isMobileView ? handleClosed : undefined}
                                >
                                    <Link href="/logo-animation">Logo Animation</Link>
                                </div>
                                <div
                                    className={`${styles.MenuList} ${pathname === "/promotional-videos" ? styles.active : ""}`}
                                    onClick={isMobileView ? handleClosed : undefined}
                                >
                                    <Link href="/promotional-videos">Promotional Videos</Link>
                                </div>
                                <div
                                    className={`${styles.MenuList} ${pathname === "/whiteboard-animation" ? styles.active : ""}`}
                                    onClick={isMobileView ? handleClosed : undefined}
                                >
                                    <Link href="/whiteboard-animation">Whiteboard Animation</Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={pathname === "/portfolio" ? styles.active : ""} onClick={isMobileView ? handleClosed : undefined}>
                        <Link href="/portfolio" aria-label="Portfolio Page">
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            Pricing
                        </Link>
                    </li>
                    <li className={pathname === "/contact" ? styles.active : ""} onClick={isMobileView ? handleClosed : undefined}>
                        <Link href="/contact" aria-label="Contact Page">
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className={styles.button} aria-label="Get Started" onClick={isMobileView ? handleClosed : undefined}>
                            Get Started <ArrowMenu />
                        </Link>
                    </li>
                    <li className={styles.liveChat}>
                        <Link href="#" aria-label="Live Chat" >
                            <ChatIcon />Live Chat
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navigation