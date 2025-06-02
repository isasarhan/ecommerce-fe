import type { FC, ReactNode } from 'react';
import GraphQlProvider from './apollo-provider';
import { Toaster } from 'sonner';
import UserProvider from './global-data-provider';

interface ProvidersProps {
    children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
    return (
        <GraphQlProvider>
            <UserProvider>
                <Toaster />
                {children}
            </UserProvider>
        </GraphQlProvider>
    );
}

export default Providers;
