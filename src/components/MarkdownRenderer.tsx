// src/MarkdownRenderer.tsx
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownRenderer({ content }: any) {
    return (
        // Erhöhtes Padding oben: pt-32 (8rem)
        <div className="min-h-screen flex items-start justify-center bg-gray-50 pt-32 pb-24 px-4 sm:px-6 lg:px-8">
            {/* Anpassung der maximalen Breite: Volle Breite auf mobilen Geräten, max-w-2xl ab kleinen Bildschirmen */}
            <div className="w-full max-w-full sm:max-w-2xl">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        h1: ({ node, ...props }) => (
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mt-6 mb-4 break-words" {...props} />
                        ),
                        h2: ({ node, ...props }) => (
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mt-6 mb-4 break-words" {...props} />
                        ),
                        h3: ({ node, ...props }) => (
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-black mt-6 mb-4 break-words" {...props} />
                        ),
                        h4: ({ node, ...props }) => (
                            <h4 className="text-lg sm:text-xl md:text-2xl font-normal text-black mt-6 mb-4 break-words" {...props} />
                        ),
                        p: ({ node, ...props }) => (
                            <p className="text-gray-700 my-2 leading-relaxed break-words" {...props} />
                        ),
                        ul: ({ node, ...props }) => (
                            <ul className="list-disc list-inside my-2 break-words" {...props} />
                        ),
                        ol: ({ node, ...props }) => (
                            <ol className="list-decimal list-inside my-2 break-words" {...props} />
                        ),
                        li: ({ node, ...props }) => (
                            <li className="mb-1 break-words" {...props} />
                        ),
                        table: ({ node, ...props }) => (
                            <table className="min-w-full border-collapse my-4 break-words" {...props} />
                        ),
                        th: ({ node, ...props }) => (
                            <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left break-words" {...props} />
                        ),
                        td: ({ node, ...props }) => (
                            <td className="border border-gray-300 px-4 py-2 break-words" {...props} />
                        ),
                        blockquote: ({ node, ...props }) => (
                            <blockquote
                                className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4 break-words" {...props} />
                        ),
                    }}
                >
                    {content.frontmatter.content}
                </ReactMarkdown>
            </div>
        </div>
    );
};
