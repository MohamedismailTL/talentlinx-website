// src/SimpleHeader.tsx
import React from "react";

const SimpleHeader: React.FC = ({children}: any) => {
    return (
        <header className="bg-brand-aqua-50 p-4">
            <div className="max-w-48">
                {children}
            </div>
        </header>
    );
};

export default SimpleHeader;
