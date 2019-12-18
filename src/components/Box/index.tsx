import styled from 'styled-components';
import {
  space,
  layout,
  typography,
  border,
  color,
  flexbox,
  SpaceProps,
  BorderProps,
  LayoutProps,
  TypographyProps,
  ColorProps,
  FlexboxProps,
} from 'styled-system';

type BoxProps = FlexboxProps &
  SpaceProps &
  BorderProps &
  LayoutProps &
  TypographyProps &
  ColorProps;

const Box = styled.div<BoxProps>`
  ${space}
  ${layout}
  ${typography}
  ${border}
  ${color}
  ${flexbox}
`;

export default Box;
