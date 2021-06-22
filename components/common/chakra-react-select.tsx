import Select, {
	components as selectComponents,
	GroupTypeBase,
	OptionTypeBase,
	Props as SelectProps,
	SelectComponentsConfig,
	StylesConfig,
	Theme,
} from 'react-select';
import {
	chakra,
	Flex,
	Tag,
	TagCloseButton,
	TagLabel,
	Divider,
	CloseButton,
	Center,
	Portal,
	StylesProvider,
	useMultiStyleConfig,
	useStyles,
	useTheme,
	useColorModeValue,
	Icon,
	RecursiveCSSObject,
	CSSWithMultiValues,
} from '@chakra-ui/react';
import { FiChevronDown } from 'react-icons/fi';

interface ItemProps extends CSSWithMultiValues {
	_disabled: CSSWithMultiValues;
	_focus: CSSWithMultiValues;
}

const chakraStyles: SelectProps['styles'] = {
	input: (provided) => ({
		...provided,
		color: 'inherit',
		lineHeight: 1,
	}),
	menu: (provided) => ({
		...provided,
		boxShadow: 'none',
	}),
	valueContainer: (provided) => ({
		...provided,
		padding: '0.125rem 1rem',
	}),
};

const chakraComponents: SelectProps['components'] = {
	// Control components
	Control: ({ children, innerRef, innerProps, isDisabled, isFocused }) => {
		const inputStyles = useMultiStyleConfig('Input', {});
		return (
			<StylesProvider value={inputStyles}>
				<Flex
					ref={innerRef}
					sx={{
						...inputStyles.field,
						p: 0,
						overflow: 'hidden',
						h: 'auto',
						minH: 10,
						width: '100%',
					}}
					{...innerProps}
					{...(isFocused && { 'data-focus': true })}
					{...(isDisabled && { disabled: true })}
				>
					{children}
				</Flex>
			</StylesProvider>
		);
	},
	MultiValueContainer: ({ children, innerRef, innerProps, data: { isFixed } }) => (
		<Tag ref={innerRef} {...innerProps} m='0.125rem' variant={isFixed ? 'solid' : 'subtle'}>
			{children}
		</Tag>
	),
	MultiValueLabel: ({ children, innerRef, innerProps }) => (
		<TagLabel ref={innerRef} {...innerProps}>
			{children}
		</TagLabel>
	),
	MultiValueRemove: ({ children, innerRef, innerProps, data: { isFixed } }) => {
		if (isFixed) {
			return null;
		}

		return (
			<TagCloseButton ref={innerRef} {...innerProps}>
				{children}
			</TagCloseButton>
		);
	},
	IndicatorSeparator: ({ innerProps }) => <Divider {...innerProps} orientation='vertical' opacity='1' />,
	ClearIndicator: ({ innerProps }) => <CloseButton {...innerProps} size='sm' mx={2} />,
	DropdownIndicator: ({ innerProps }) => {
		const { addon } = useStyles();

		return (
			<Center
				{...innerProps}
				sx={{
					...addon,
					h: '100%',
					borderRadius: 0,
					borderWidth: 0,
					cursor: 'pointer',
				}}
			>
				<Icon as={FiChevronDown} h={5} w={5} />
			</Center>
		);
	},
	// Menu components
	MenuPortal: ({ children }) => <Portal>{children}</Portal>,
	Menu: ({ children, ...props }) => {
		const menuStyles = useMultiStyleConfig('Menu', {});
		return (
			<selectComponents.Menu {...props}>
				<StylesProvider value={menuStyles}>{children}</StylesProvider>
			</selectComponents.Menu>
		);
	},
	MenuList: ({ innerRef, children, maxHeight }) => {
		const { list } = useStyles();
		return (
			<chakra.div
				sx={{
					...list,
					maxH: `${maxHeight}px`,
					overflowY: 'auto',
				}}
				ref={innerRef}
			>
				{children}
			</chakra.div>
		);
	},
	GroupHeading: ({ innerProps, children }) => {
		const { groupTitle } = useStyles();
		return (
			<chakra.div sx={groupTitle} {...innerProps}>
				{children}
			</chakra.div>
		);
	},
	Option: ({ innerRef, innerProps, children, isFocused, isDisabled }) => {
		const { item } = useStyles();
		return (
			<chakra.div
				role='button'
				sx={{
					...item,
					w: '100%',
					textAlign: 'left',
					bg: isFocused ? (item as RecursiveCSSObject<ItemProps>)._focus.bg : 'transparent',
					...(isDisabled && (item as RecursiveCSSObject<ItemProps>)._disabled),
				}}
				ref={innerRef}
				{...innerProps}
				{...(isDisabled && { disabled: true })}
			>
				{children}
			</chakra.div>
		);
	},
};

export function MultiSelect<
	OptionType extends OptionTypeBase = { label: string; value: string },
	IsMulti extends boolean = false,
	GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
>({ name = '', styles = {}, components = {}, theme, ...props }: SelectProps<OptionType, IsMulti, GroupType>) {
	const chakraTheme = useTheme();
	const placeholderColor = useColorModeValue(chakraTheme.colors.gray[400], chakraTheme.colors.whiteAlpha[400]);

	return (
		<Select
			name={name}
			components={{
				...(chakraComponents as SelectComponentsConfig<OptionType, IsMulti, GroupType>),
				...components,
			}}
			styles={{
				...(chakraStyles as StylesConfig<OptionType, IsMulti, GroupType>),
				...styles,
			}}
			theme={(baseTheme) => ({
				...baseTheme,
				borderRadius: chakraTheme.radii.md,
				colors: {
					...baseTheme.colors,
					neutral50: placeholderColor, // placeholder text color
					neutral40: placeholderColor, // noOptionsMessage color
					...(theme as Theme)?.colors,
				},
				spacing: {
					...baseTheme.spacing,
					...(theme as Theme)?.spacing,
				},
			})}
			{...props}
		/>
	);
}

export default MultiSelect;
