import type { FC } from 'react';

interface SectionTitleProps {
    title: string
}

const SectionTitle: FC<SectionTitleProps> = ({ title }) => {
    return (
        <h2 className='text-3xl font-bold py-5'>{title}</h2>
    );
}

export default SectionTitle;
