"use client"
import { ArrowMenu, ChatIcon, NavIcon, SubMenuIcon } from "@/src/app-constants";
import CommonBtn from "@/src/components/commonbtn";
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
            "/services/2d-animations",
            "/services/3d-animations",
            "/services/explainer-videos",
            "/services/infographics-videos",
            "/services/logo-animation",
            "/services/promotional-videos",
            "/services/architectural-visualization",
            "/services/video-editing",
            "/services/motion-graphics",
            "/services/cgi-vfx",
            "/services/hybrid-and-cel-animation",
            "/services/whiteboard-animation"
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
                                <div className={`${styles.MenuList} ${pathname === "/services/2d-animations" ? styles.active : ""}`}
                                    onClick={isMobileView ? handleClosed : undefined}>
                                    <Link href="/services/2d-animations" aria-label="2D Animations">2D Animations</Link>
                                </div>
                                <div
                                    className={`${styles.MenuList} ${pathname === "/services/3d-animations" ? styles.active : ""}`}
                                    onClick={isMobileView ? handleClosed : undefined}
                                >
                                    <Link href="/services/3d-animations" aria-label="3D Animations">3D Animations</Link>
                                </div>
                                <div
                                    className={`${styles.MenuList} ${pathname === "/services/explainer-videos" ? styles.active : ""}`}
                                    onClick={isMobileView ? handleClosed : undefined}
                                >
                                    <Link href="/services/explainer-videos" aria-label="Explainer Videos">Explainer Videos</Link>
                                </div>
                                <div
                                    className={`${styles.MenuList} ${pathname === "/services/infographics-videos" ? styles.active : ""}`}
                                    onClick={isMobileView ? handleClosed : undefined}
                                >
                                    <Link href="/services/infographics-videos" aria-label="Infographics videos">Infographics Design</Link>
                                </div>
                                <div
                                    className={`${styles.MenuList} ${pathname === "/services/logo-animation" ? styles.active : ""}`}
                                    onClick={isMobileView ? handleClosed : undefined}
                                >
                                    <Link href="/services/logo-animation" aria-label="Logo Animation">Logo Animation</Link>
                                </div>
                                <div
                                    className={`${styles.MenuList} ${pathname === "/services/promotional-videos" ? styles.active : ""}`}
                                    onClick={isMobileView ? handleClosed : undefined}
                                >
                                    <Link href="/services/promotional-videos" aria-label="Promotional Videos">Promotional Videos</Link>
                                </div>
                                <div
                                    className={`${styles.MenuList} ${pathname === "/services/cgi-vfx" ? styles.active : ""}`}
                                    onClick={isMobileView ? handleClosed : undefined}
                                >
                                    <Link href="/services/cgi-vfx" aria-label="CGI & VFX">CGI & VFX</Link>
                                </div>
                                <div
                                    className={`${styles.MenuList} ${pathname === "/services/whiteboard-animation" ? styles.active : ""}`}
                                    onClick={isMobileView ? handleClosed : undefined}
                                >
                                    <Link href="/services/whiteboard-animation" aria-label="Whiteboard Animation">Whiteboard Animation</Link>
                                </div>
                                <div
                                    className={`${styles.MenuList} ${pathname === "/services/motion-graphics" ? styles.active : ""}`}
                                    onClick={isMobileView ? handleClosed : undefined}
                                >
                                    <Link href="/services/motion-graphics" aria-label="Motion-Graphics">Motion Graphics</Link>
                                </div>
                                <div
                                    className={`${styles.MenuList} ${pathname === "/services/hybrid-and-cel-animation" ? styles.active : ""}`}
                                    onClick={isMobileView ? handleClosed : undefined}
                                >
                                    <Link href="/services/hybrid-and-cel-animation" aria-label="Hybrid and Cel Animation">Hybrid and Cel Animation</Link>
                                </div>
                                <div
                                    className={`${styles.MenuList} ${pathname === "/services/video-editing" ? styles.active : ""}`}
                                    onClick={isMobileView ? handleClosed : undefined}
                                >
                                    <Link href="/services/video-editing" aria-label="Video Editing">Video Editing</Link>
                                </div>
                                <div
                                    className={`${styles.MenuList} ${pathname === "/services/architectural-visualization" ? styles.active : ""}`}
                                    onClick={isMobileView ? handleClosed : undefined}
                                >
                                    <Link href="/services/architectural-visualization" aria-label="Architectural Visualization">Architectural Visualization</Link>
                                </div>

                            </div>
                        </div>
                    </li>
                    <li className={pathname === "/portfolio" ? styles.active : ""} onClick={isMobileView ? handleClosed : undefined}>
                        <Link href="/portfolio" aria-label="Portfolio Page">
                            Portfolio
                        </Link>
                    </li>
                    <li className={pathname === "/animation-video-pricing" ? styles.active : ""} onClick={isMobileView ? handleClosed : undefined}>
                        <Link href="/animation-video-pricing" >
                            Pricing
                        </Link>
                    </li>
                    <li className={pathname === "/contact" ? styles.active : ""} onClick={isMobileView ? handleClosed : undefined}>
                        <Link href="/contact" aria-label="Contact Page">
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <CommonBtn className={styles.button} data="Get Started" />
                    </li>
                    <li className={styles.liveChat} >
                        <Link href="#" aria-label="Live Chat" onClick={() => window.LiveChatWidget.open()}>
                            <ChatIcon /> Live Chat
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navigation