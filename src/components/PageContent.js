import React from 'react'

import styled from 'styled-components';

const PageContentWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    ${props => props.narrow ? {width: '33rem', alignSelf: 'center'} : '100%'};
`;

const PageContent = ({narrow, children}) => {

    return (
        <PageContentWrapper narrow={narrow} >
            {children}
        </PageContentWrapper>
    )
}

export default PageContent
