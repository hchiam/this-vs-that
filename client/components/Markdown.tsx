import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

import SampleCode from './SampleCode';

interface MarkdownProps {
    content: string;
}

const Markdown: React.FC<MarkdownProps> = ({ content }) => {
    const renderBlockquote = (p: any) => {
        return <blockquote className='border-l-4 sm:border-l-8 pl-2 sm:pl-4 mb-8'>{p.children}</blockquote>;
    };
    const renderCode = (p: any) => {
        return <SampleCode code={p.value} lang={p.language} />;
    };
    const renderInlineCode = (p: any) => {
        return <code style={{ backgroundColor: '#FFEAA7' }}>{p.children}</code>;
    };
    const renderHeading = (p: any) => {
        switch (p.level) {
            case 1: return <h1 className="font-semibold text-4xl mb-8">{p.children}</h1>;
            case 2: return <h2 className="font-semibold text-2xl sm:text-3xl mt-8 mb-4">{p.children}</h2>;
            case 3: return <h3 className="text-xl sm:text-2xl mb-2">{p.children}</h3>;
            case 4: return <h4>{p.children}</h4>;
            case 5: return <h5>{p.children}</h5>;
            default: return <></>;
        }
    };
    const renderImage = (p: any) => {
        return (
            <figure className='border border-dashed border-blue-400 text-center my-4 p-2'>
                <img className='ml-auto mr-auto mb-2' src={p.src} alt={p.alt} />
                <figcaption className='block italic'>{p.alt}</figcaption>
            </figure>
        );
    };
    const renderHorizontalLine = (p: any) => {
        return <hr className="my-6" />;
    };
    const renderLink = (p: any) => {
        return (p.href.startsWith('http://') || p.href.startsWith('https://'))
            ? <a href={p.href} className="underline">{p.children}</a>
            : <Link to={p.href} className="underline">{p.children}</Link>;
    };
    const renderList = (p: any) => {
        return p.ordered
                ? <ol className="mb-8 ml-4 list-decimal">{p.children}</ol>
                : <ul className="mb-8 ml-4 list-disc">{p.children}</ul>;
    };
    const renderParagraph = (p: any) => {
        return <div className="mb-2">{p.children}</div>;
    };
    const renderTable = (p: any) => {
        return <table className="border border-gray-400 mb-8">{p.children}</table>;
    };
    const renderTableRow = (p: any) => {
        return <tr className={`border-t border-gray-400 ${p.isHeader ? 'bg-gray-100' : ''}`}>{p.children}</tr>;
    };
    const renderTableCell = (p: any) => {
        return <td className="p-3">{p.children}</td>;
    };

    return (
        <ReactMarkdown
            renderers={{
                blockquote: renderBlockquote,
                code: renderCode,
                heading: renderHeading,
                image: renderImage,
                inlineCode: renderInlineCode,
                link: renderLink,
                list: renderList,
                paragraph: renderParagraph,
                table: renderTable,
                tableCell: renderTableCell,
                tableRow: renderTableRow,
                thematicBreak: renderHorizontalLine,
            }}
            source={content}
        />
    );
};

export default Markdown;
