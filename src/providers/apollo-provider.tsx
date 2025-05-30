'use client'
import { client } from '@/lib/apollo-client';
import { ApolloProvider } from '@apollo/client';
import type { FC, ReactNode } from 'react';

interface GraphQlProviderProps {
    children: ReactNode
}

const GraphQlProvider: FC<GraphQlProviderProps> = ({ children }) => {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    );
}

export default GraphQlProvider;
