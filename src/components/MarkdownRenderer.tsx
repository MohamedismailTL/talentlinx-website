// src/MarkdownRenderer.tsx
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


export default function MarkdownRenderer({content}: any) {
    return (
        // Statt "items-center" verwenden wir "items-start", damit der Inhalt oben bleibt.
        // Außerdem kannst du die max. Breite anpassen (z. B. max-w-2xl), um den Textbereich schmaler zu machen.
        <div className="min-h-screen flex items-start justify-center bg-gray-50 p-24">
            <div className="max-w-2xl w-full">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        h1: ({node, ...props}) => (
                            <h1 className="text-4xl md:text-5xl font-bold text-black mt-6 mb-2" {...props} />
                        ),
                        h2: ({node, ...props}) => (
                            <h2 className="text-3xl md:text-4xl font-semibold text-black mt-6 mb-2" {...props} />
                        ),
                        h3: ({node, ...props}) => (
                            <h3 className="text-2xl md:text-3xl font-medium text-black mt-6 mb-2" {...props} />
                        ),
                        p: ({node, ...props}) => (
                            <p className="text-gray-700 my-2 leading-relaxed" {...props} />
                        ),
                        ul: ({node, ...props}) => (
                            <ul className="list-disc list-inside my-2" {...props} />
                        ),
                        ol: ({node, ...props}) => (
                            <ol className="list-decimal list-inside my-2" {...props} />
                        ),
                        li: ({node, ...props}) => (
                            <li className="mb-1" {...props} />
                        ),
                        table: ({node, ...props}) => (
                            <table className="min-w-full border-collapse my-4" {...props} />
                        ),
                        th: ({node, ...props}) => (
                            <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left" {...props} />
                        ),
                        td: ({node, ...props}) => (
                            <td className="border border-gray-300 px-4 py-2" {...props} />
                        ),
                        blockquote: ({node, ...props}) => (
                            <blockquote
                                className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4" {...props} />
                        ),
                    }}
                >
                    {content.frontmatter.content}
                </ReactMarkdown>
            </div>
        </div>
    );
};