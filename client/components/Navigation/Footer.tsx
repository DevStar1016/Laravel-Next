import Link from "next/link";
import PropTypes from "prop-types";
import {ReactElement} from "react";

/**
 * Grid layout. Defaults to three colums per row.
 */
export function AdvancedFooter(): ReactElement {
    // Customize to your needs. The footer ui will be composed of this data.
    const footerData: { headline: string, content: { title: string, link: string }[] }[] = [
        // First col.
        {
            headline: "Links",
            content: [
                {title: "Home", link: "/"},
                {title: "Docs", link: "/docs"},
                {title: "Blog", link: "/blog"},
                {title: "Contact", link: "/contact"},
            ],
        },
        // Second col.
        {
            headline: "Social Media",
            content: [
                {title: "Twitter", link: "https://twitter.com/niclas_timm"},
                {
                    title: "GitHub",
                    link:
                        "https://github.com/NiclasTimmeDev/laravel-nextjs-starter/",
                },
            ],
        },
        // Third col.
        {
            headline: "Legal",
            content: [
                {title: "Privacy", link: "/privacy"},
                {title: "Imprint", link: "/imprint"},
            ],
        },
    ];

    /**
     * Map over the footerData array. For every object in the array,
     * return a new div with a headline and as many links as defined
     * in the .content of the currently mapped over object.
     */
    const footerCols: JSX.Element[] = footerData.map((element) => {
        return (
            <div key={element.headline}>
                <h4 className="text-lg">{element.headline}</h4>
                {/* Map over every entry in the content and return an footer link component. */}
                {element.content.map((link) => {
                    return (
                        <FooterLink
                            key={link.link}
                            title={link.title}
                            link={link.link}
                        />
                    );
                })}
            </div>
        );
    });

    return (
        <footer className=" advanced-footer w-screen py-4 px-2 bg-purple-50">
            <div className=" container mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-28">
                {footerCols}
            </div>
        </footer>
    );
}

/**
 * A simple footer component.
 *
 * @return ReactElement
 */
export function SimpleFooter(): ReactElement {
    const currentYear: number = new Date().getFullYear();

    /**
     * All links that will be displayed in the footer.
     * Customize to your requirements.
     */
    const footerLinks = [
        {title: "Imprint", link: "/imprint"},
        {title: "Privacy Statement", link: "/privacy"},
    ];

    // A FooterLink component for every given link.
    const footerItems: ReactElement[] = footerLinks.map((link) => {
        return (
            <FooterLink
                key={link.title}
                title={link.title}
                link={link.link}
                marginLeft={true}
            />
        );
    });

    // Return statement.
    return (
        <footer className="simple-footer w-screen py-4 px-2 bg-purple-50">
            <div className="w-full flex justify-between items-center">
                <span className="text-purple-500">Copyright {currentYear}</span>
                <div className="flex items-center">{footerItems}</div>
            </div>
        </footer>
    );
}

/**
 * A link that will be displayed in the Footer.
 *
 * @param {object} props
 *   The props, including title and link.
 */
export function FooterLink({title, link, marginLeft}): ReactElement {
    return (
        <Link href={link}>
            <h5
                className={`text-purple-500 hover:text-purple-700 hover:underline cursor-pointer ${
                    marginLeft ? "ml-4" : ""
                }`}
            >
                {title}
            </h5>
        </Link>
    );
}

FooterLink.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    marginLeft: PropTypes.bool,
};
