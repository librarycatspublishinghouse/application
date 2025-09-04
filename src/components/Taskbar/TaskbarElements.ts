import {NavLink as Link} from 'react-router-dom';
import styled from 'styled-components';

export const NavLink = styled(Link)`
    text-decoration: none;
    color: black;
    &.active {
        color: rgb(172,172,172);
    }
    &.visited{
        color: black;
    }
`;