import styled from 'styled-components';

export const HeaderStyled = styled.header`
    padding: ${({theme}) => theme.grid * 2}px;
    width: 100%;
    flex-shrink: 0;
    margin: 0;
    position: relative;
    display: flex;
    flex-direction: row;

    h1 {
        margin: 0;
    }
`;

export const HeaderMenu = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;

    .nav-item {
        white-space: nowrap;
        text-decoration: none;
        display: flex;
        align-items: center;
        border-radius: ${({theme}) => theme.halfGrid}px;
        padding: 1px 15px;
        color: ${({theme}) => theme.grey3};
        font-size: 14px;
        font-weight: 600;
        line-height: ${({theme}) => theme.grid * 4}px;
        height: ${({theme}) => theme.grid * 4}px;
    }

    .active {
        color: ${({theme}) => theme.grey1};
        background-color: ${({theme}) => theme.grey2};
    }
`;
