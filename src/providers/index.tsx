import type { FC, ReactNode } from 'react';
import GraphQlProvider from './apollo-provider';

interface ProvidersProps {
    children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
    return (
        <GraphQlProvider>
            {children}
        </GraphQlProvider>
    );
}

export default Providers;
