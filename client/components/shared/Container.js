import styled, { css } from 'styled-components';
// import { Flex, Box } from 'grid-styled';
import { Flex, Box } from '../styled-grid';
import theme from '../theme.js';


// https://www.styled-components.com/docs/basics#extending-styles?
// const ContainerSm = Container.extend` <= NAH


const Container = styled(Box)`
  margin-left: auto;
  margin-right: auto;

  ${props => props.fullSize && css`
    height: 100%;
    width: 100%;
  `}

  ${props => !props.mx && css`
    max-width: ${theme.containers.rg};
  `}

  ${props => props.mx && css`
    max-width: ${theme.containers[props.mx]};
  `}

  ${props => props.relative && css`
    position: relative;
  `}

  ${props => props.center && css`
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 50%;
    transform: translateY(-50%);
  `}

  ${props => props.textCenter && css`
    text-align: center;
  `}
`;


export default Container