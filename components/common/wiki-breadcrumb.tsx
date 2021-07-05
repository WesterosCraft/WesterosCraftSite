import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Icon } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import { nameFormatter } from '../utils';

const combineAccumulatively = (segments: string[]) => {
	const links = segments.reduce((acc, cur, curIndex) => {
		const last = curIndex > 1 ? acc[curIndex - 1] : '';
		const newPath = last + '/' + cur;
		acc.push(newPath);
		return acc;
	}, [] as string[]);
	return links;
};

const WikiBreadcrumb = () => {
	const router = useRouter();

	const segments = router.asPath.split('/');
	const crumbLinks = combineAccumulatively(segments);

	return (
		<Breadcrumb display={['none', null, null, 'block']} separator={<Icon as={FaChevronRight} boxSize={3} />}>
			{crumbLinks.map((crumb, i) =>
				segments[i] === '' ? (
					<BreadcrumbItem key={i} fontWeight='bold' fontSize='sm' color='gray.500'>
						<BreadcrumbLink as={NextLink} href='/'>
							Home
						</BreadcrumbLink>
					</BreadcrumbItem>
				) : (
					<BreadcrumbItem key={i} fontWeight='bold' fontSize='sm' color='gray.500'>
						<BreadcrumbLink as={NextLink} href={crumb}>
							{nameFormatter(segments[i])}
						</BreadcrumbLink>
					</BreadcrumbItem>
				)
			)}
		</Breadcrumb>
	);
};

export default WikiBreadcrumb;
