import React from 'react';

import {HStack, Radio, RadioGroup, Stack, Text} from "@chakra-ui/react";

import {SortBy} from "@/types/SortBy";

interface Props {
    sortBy: SortBy,
    setSortBy: (sortBy: SortBy) => void,
}

const SortByRadio: React.FC<Props> = ({sortBy, setSortBy}) => {
    return (
        <HStack
            spacing={4}
        >
            <Text
                color="black"
            >
                Sort By:
            </Text>
            <RadioGroup
                onChange={setSortBy}
                value={sortBy}
                colorScheme={'brand'}
            >
                <Stack
                    direction='row'
                    spacing={4}
                >
                    {
                        Object.values(SortBy).map((sort, index) => (
                            <Radio
                                key={sort}
                                value={sort}
                                colorScheme={index ? 'red' : 'green'}
                            >
                                {sort}
                            </Radio>
                        ))
                    }
                </Stack>
            </RadioGroup>
        </HStack>
    );
};

export default SortByRadio;
