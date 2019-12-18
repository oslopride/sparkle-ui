import styled from 'styled-components';
import {
    flexbox,
    space,
    layout,
    typography,
    border,
    color,
    FlexboxProps,
    SpaceProps,
    BorderProps,
    LayoutProps,
    TypographyProps,
    ColorProps,
  } from 'styled-system';

  export type FlexProps = FlexboxProps & SpaceProps & BorderProps & LayoutProps & TypographyProps & ColorProps;

  const Flex = styled.div<FlexProps>`
  display: flex;
   ${flexbox}
  ${space}
  ${layout}
  ${typography}
  ${border}
  ${color}
  `

  export default Flex