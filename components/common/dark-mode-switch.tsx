import { useColorMode, IconButton } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

const DarkModeSwitch = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode === 'dark';

	return (
		<IconButton
			aria-label='Switch colors'
			size='sm'
			variant='ghost'
			icon={isDark ? <FaSun /> : <FaMoon />}
			onClick={toggleColorMode}
		/>
	);
};

export default DarkModeSwitch;
