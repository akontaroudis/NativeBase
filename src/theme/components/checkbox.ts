import { mode, transparentize } from '../tools';

const baseStyle = (props: Record<string, any>) => {
  const { colorScheme, theme } = props;

  return {
    borderWidth: 2,
    borderRadius: 'sm',
    borderColor: mode('muted.300', 'muted.600')(props),
    bg: mode('muted.50', 'muted.700')(props), // matching background color

    _text: {
      ml: 2,
      color: mode('darkText', 'lightText')(props),
    },
    _interactionBox: {
      position: 'absolute',
      borderRadius: 'full',
    },
    _hover: {
      _interactionBox: {
        bg: transparentize('muted.200', 0.3)(theme),
      },
    },
    _focus: {
      _interactionBox: {
        bg: transparentize(`${colorScheme}.200`, 0.5)(theme),
      },
    },
    _focusVisible: {
      _interactionBox: {
        bg: transparentize(`${colorScheme}.200`, 0.5)(theme),
      },
    },
    _disabled: {
      _interactionBox: {
        bg: 'transparent',
      },
      opacity: 0.4,
    },
    _pressed: {
      _interactionBox: {
        bg: transparentize(`${colorScheme}.200`, 0.5)(theme),
      },
    },
    _checked: {
      borderColor: mode(`${colorScheme}.600`, `${colorScheme}.200`)(props),
      bg: mode(`${colorScheme}.600`, `${colorScheme}.300`)(props),
    },
    _invalid: {
      borderColor: mode('error.600', 'error.400')(props),
    },
    _icon: {
      color: mode(`muted.50`, `muted.800`)(props), // matching background color
    },
  };
};

const sizes = {
  lg: { _icon: { size: 6 }, _text: { fontSize: 'xl' } },
  md: { _icon: { size: 5 }, _text: { fontSize: 'lg' } },
  sm: { _icon: { size: 4 }, _text: { fontSize: 'md' } },
};

const defaultProps = {
  defaultIsChecked: false,
  size: 'sm',
  colorScheme: 'primary',
};

export default {
  baseStyle,
  sizes,
  defaultProps,
};
