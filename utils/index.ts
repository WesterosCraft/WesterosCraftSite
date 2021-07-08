export const calcCompletionPercentage = (completedLevel: number, inProgressLevel: number, notStartedLevel: number) => {
	return Math.ceil(
		((completedLevel + inProgressLevel / 2) / (completedLevel + inProgressLevel + notStartedLevel)) * 100
	);
};

export const getDestinationLevel = (num: string) => {
	switch (num) {
		case 'one':
			return 1;
		case 'two':
			return 2;
		case 'three':
			return 3;
		case 'four':
			return 4;
		case 'five':
			return 5;
		case 'six':
			return 6;
		default:
			return 0;
	}
};
