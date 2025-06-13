import type { FC, ReactNode } from 'react';
import GraphQlProvider from './apollo-provider';
import { Toaster } from 'sonner';
import UserProvider from './global-data-provider';
import { ThemeProvider } from './theme-provider';

interface ProvidersProps {
    children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
    return (
        <GraphQlProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                <Toaster />
                <UserProvider>
                    {children}
                </UserProvider>
            </ThemeProvider>
        </GraphQlProvider>
    );
}

export default Providers;
