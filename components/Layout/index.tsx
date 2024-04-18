import React from 'react';

import {Container, Flex} from "@chakra-ui/react";

import Navbar from "@/components/Navbar";
import useAuth from "@/hooks/useAuth";
import LoadingIndicator from "@/components/Utilities/LoadingIndicator";
import NotConnected from "@/components/Layout/NotConnected";
import FirstLoginHandler from './FirstLogin/index';

interface Props {
    children: React.ReactNode,
    authGate?: boolean
}

const Layout: React.FC<Props> = ({ children, authGate }) => {

    const { isConnected, loading } = useAuth();

    return (
        <Container
            maxW={'6xl'}
            py={8}
        >
            {/* <FirstLoginHandler/> */} 
            <Flex
                direction={'column'}
            >
                <Navbar/>
                {
                    authGate ? (
                        loading ? (
                            <LoadingIndicator />
                        ) : (
                            isConnected ? (
                                children
                            ) : (
                                <NotConnected />
                            )
                        )
                    ) : (
                        children
                    )
                }
            </Flex>
        </Container>
    );
};

export default Layout;
