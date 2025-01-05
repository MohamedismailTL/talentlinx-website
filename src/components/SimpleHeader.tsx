import React from "react";

const SimpleHeader: React.FC = ({children}: any) => {
    return (
        <header className="bg-brand-aqua-50 absolute inset-x-0 top-0 z-50">
            <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        {children}
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default SimpleHeader;
