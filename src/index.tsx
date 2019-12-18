import * as styles from './shared/styles';
import * as global from './shared/global';
export { default as theme } from './shared/theme';

export { styles, global };

// because of --isolatedModules, types cannot be exported directly 🤷‍
import { FlexProps as FlexPropsExport } from './components/Flex'
export type FlexProps = FlexPropsExport;

export { default as Button } from './components/Button';
export { default as Flex } from './components/Flex';
