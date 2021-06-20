import NextLink from 'next/link';
import { Flex, Link } from '@chakra-ui/react';
import { resolveLink } from '../utils/helpers';
import { InternalLink } from '@/models/objects/internal-link';
import { ExternalLink } from '@/models/objects/external-link';

type Props = {
	navigation?: Array<InternalLink | ExternalLink>;
	direction?: 'row' | 'column';
};

const MainNavigation = ({ navigation, direction = 'row' }: Props) => {
	if (!navigation) {
		return null;
	}

	return (
		<Flex direction={direction}>
			{navigation.map((item) => {
				const link = resolveLink(item);

				if (!link || !link.url || !link.title) {
					return null;
				}

				if (link.type === 'internalLink') {
					return (
						<NextLink key={link.key} passHref href={link.url}>
							<Link padding={3}>{link.title}</Link>
						</NextLink>
					);
				}

				return (
					<Link key={link.key} isExternal href={link.url} padding={3}>
						{link.title}
					</Link>
				);
			})}
		</Flex>
	);
};

export default MainNavigation;
