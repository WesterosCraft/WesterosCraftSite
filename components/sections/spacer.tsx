import { Box } from '@chakra-ui/react';
import { ISpacer } from '@/models/sections/spacer';

type Props = {
	data: ISpacer;
};

const getSize = (size: string) => {
	switch (size) {
		case 'none':
			return 0;

		case 'small':
			return 4;

		case 'medium':
			return 6;

		case 'large':
			return 8;

		case 'xlarge':
			return 10;

		default:
			return 6;
	}
};

const Spacer = ({ data }: Props) => {
	const padding = [getSize(data?.mobileSize ?? 'medium'), null, getSize(data?.size ?? 'medium')];

	return <Box as='section' className={`${data._type}__section`} paddingY={padding} backgroundColor='transparent' />;
};

export default Spacer;
