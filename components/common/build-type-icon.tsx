import { createIcon } from '@chakra-ui/icons';
import { Tooltip, IconProps } from '@chakra-ui/react';
import { nameFormatter } from '../utils';

const Castle = createIcon({
	displayName: 'Castle',
	viewBox: '0 0 30 30',
	path: (
		<path
			fill='currentColor'
			d='M 15 2 L 11 6 L 19 6 L 15 2 z M 11 8 L 11 13 L 8 13 L 8 11 L 6 11 L 6 12 L 4 12 L 4 11 L 2 11 L 2 17 L 4 18 L 4 26 L 12 26 L 12 23 C 12 21.343 13.343 20 15 20 C 16.657 20 18 21.343 18 23 L 18 26 L 26 26 L 26 18 L 28 17 L 28 11 L 26 11 L 26 12 L 24 12 L 24 11 L 22 11 L 22 13 L 19 13 L 19 8 L 11 8 z M 8 20 C 8.552 20 9 20.448 9 21 L 9 23 L 7 23 L 7 21 C 7 20.448 7.448 20 8 20 z M 22 20 C 22.552 20 23 20.448 23 21 L 23 23 L 21 23 L 21 21 C 21 20.448 21.448 20 22 20 z'
		/>
	),
});

const Town = createIcon({
	displayName: 'Town',
	viewBox: '0 0 512 512',
	path: <path fill='currentColor' d='M0 0h512v512H0z' fillOpacity='0'></path>,
});

const Village = createIcon({
	displayName: 'Village',
	viewBox: '0 0 512512',
	path: (
		<path
			fill='currentColor'
			d='M351.7 32.07c-17.3 13.48-28.8 31.24-31.1 48.48 3.2.79 7.1 1.59 11.7 2.09 8.3 1 18.3 1.5 28.3 1.5s20.1-.5 28.3-1.5c4.4-.5 8.2-1.2 11.3-1.89-1.5-6.13-4.5-14.42-9.2-22.61-5.5-9.49-13.1-18.83-21.6-25.96-2 1.57-4.9 3.41-8.8 3.41-4 0-6.9-1.93-8.9-3.52zM64.37 49.06C47.03 62.54 35.62 80.3 33.32 97.54c3.13.8 7.01 1.6 11.63 2.1 8.29.96 18.3 1.46 28.3 1.46s20.07-.5 28.25-1.46c4.4-.5 8.2-1.2 11.3-1.9-1.5-6.13-4.5-14.42-9.2-22.61-5.48-9.49-13.04-18.83-21.57-25.96-1.97 1.57-4.82 3.41-8.75 3.41-4.02 0-6.95-1.93-8.91-3.52zM336.6 101.2V119c.6.5 2 1.3 4.2 2.1 2.1.7 4.9 1.3 7.9 1.8 1.3-8.6 5.3-19.4 11.9-19.4 6.6 0 10.6 10.8 11.9 19.3 3-.4 5.7-1 7.9-1.7 2.2-.8 3.6-1.6 4.2-2.1v-17.8c-7.6.6-15.8.9-24 .9s-16.4-.3-24-.9zm-287.32 17V136c.57.5 1.96 1.3 4.19 2.1 2.15.7 4.89 1.3 7.91 1.8 1.33-8.6 5.32-19.4 11.9-19.4s10.58 10.8 11.9 19.3c3.01-.4 5.72-1 7.85-1.7 2.19-.8 3.59-1.6 4.19-2.1v-17.8c-7.58.6-15.76.9-23.97.9-8.21 0-16.39-.3-23.97-.9zm113.22 18.2c-22.2 16.8-36.8 39.3-39.2 61.3 4 1 9.1 2.2 15.6 2.9 10 1.2 22.1 1.8 34.1 1.8s24-.6 34-1.8c6.4-.7 11.3-1.8 15.3-2.9-1.5-7.6-5.4-18.3-11.5-28.8-6.9-11.9-16.5-23.6-27.4-32.3-.3.2-.5.5-.8.7-2.2 1.8-5.3 3.8-9.6 3.8s-7.4-2-9.6-3.8zm-19.9 82.7v24c0 .1 0 0 .3.2.8.7 2.9 2 5.9 3 2.7.9 6 1.6 9.8 2.2 1.2-10.5 6.1-24.7 14.4-24.7s13.2 14.2 14.4 24.7c3.8-.6 7.1-1.3 9.8-2.2 3-1 5.1-2.3 5.9-3 .3-.2.3-.1.3-.2v-24c-9.5.9-19.9 1.3-30.4 1.3-10.4 0-20.9-.4-30.4-1.3zm249.6.7c-35.4 25.6-58.7 61.2-61.1 96.2 6.1 1.9 15.5 3.9 26.4 5.1 14.6 1.8 32.1 2.6 49.6 2.6s35-.8 49.6-2.6c10.6-1.2 19.8-3.1 26-5-1.6-11.8-7.5-29.1-17.6-46.5-10.7-18.4-25.7-36.7-43-49.8-1.2 1-2.5 2.4-3.6 3.4-2.9 2.3-6.6 4.6-11.4 4.6-4.8 0-8.5-2.3-11.4-4.6-1.1-.9-2.4-2.3-3.5-3.4zM99.22 286.2c-40.72 29.1-67.49 70.2-69.95 110.4 7.08 2.3 18.01 4.6 30.81 6.1 16.52 1.9 36.24 2.9 55.92 2.9 19.7 0 39.4-1 55.9-2.9 12.7-1.5 23.6-3.8 30.7-6.1-1.8-13.5-8.8-33.6-20.4-53.5-12.2-21-29.4-42-49.4-56.9-1.5 1.5-3.2 3.3-4.7 4.4-3.2 2.6-7.1 5-12.1 5s-8.9-2.4-12.1-5c-1.5-1.1-3.2-3-4.68-4.4zm259.98 53.2V379c0 .6 0 1 1.8 2.5 1.7 1.5 5.2 3.5 9.8 5 4.3 1.4 9.5 2.6 15.1 3.4 1-15 8.1-39.4 21.2-39.4s20.2 24.4 21.2 39.4c5.6-.8 10.8-2 15.1-3.4 4.6-1.5 8.1-3.5 9.8-5 1.8-1.5 1.8-1.9 1.8-2.5v-39.6c-14.7 1.6-31.2 2.3-47.9 2.3s-33.2-.7-47.9-2.3zM61.03 420.8v45.8c0 1 .19 1.8 2.36 3.7 2.15 1.8 6.19 4 11.48 5.8 4.88 1.6 10.8 2.9 17.25 3.8.8-16.6 8.68-45.3 23.88-45.3s23.1 28.7 23.9 45.3c6.5-.9 12.4-2.2 17.3-3.8 5.2-1.8 9.3-4 11.4-5.8 2.2-1.9 2.4-2.7 2.4-3.7v-45.8c-16.8 1.9-35.9 2.8-55 2.8-19.08 0-38.21-.9-54.97-2.8z'
			fillOpacity='1'
		></path>
	),
});

const City = createIcon({
	displayName: 'City',
	viewBox: '0 0 512 512',
	path: (
		<path
			fill='currentColor'
			d='M256 22.604c-10.01 0-20.02 2.388-26.836 7.163-2.162 1.514-6.99 10.97-9.213 20.113-.69 2.84-1.016 5.075-1.446 7.516h74.992c-.43-2.44-.757-4.676-1.447-7.516-2.224-9.142-7.052-18.6-9.214-20.113-6.817-4.775-16.826-7.163-26.836-7.163zM80 26.626l-50.707 126.77h95.814l2.8-7zm352 0l-47.906 119.77 2.8 7h95.813zm-199 48.77v14h46v-14zm-19.438 32l-7 14h98.875l-7-14zm-63.468 32l-24.8 62h261.413l-24.8-62zM25 171.396v318h55v-39s4.074-32 16-32 16 32 16 32v39h80v-39c0-32 42.762-80 64-80 23.75 0 64 48 64 80v39h80v-39s4.074-32 16-32 16 32 16 32v39h55v-318h-92.906l19.2 48H393v183h-18v-135h-46v23h-18v-23h-46v23h-18v-23h-46v23h-18v-23h-46v135h-18v-183H98.707l19.2-48zm14 23h18v32H39zm416 0h18v32h-18zm-318 25v30h46v-7h18v7h46v-7h18v7h46v-7h18v7h46v-30zm-50 71h18v32H87zm320 0h18v32h-18zM256 312.91l2.846.946s24.722 8.202 49.69 22.766c12.483 7.282 25.14 16.154 35.077 26.918C353.55 374.304 361 387.396 361 402.396h-18c0-9-4.55-17.91-12.613-26.645-8.064-8.735-19.406-16.863-30.922-23.58-20.776-12.12-39.553-18.78-43.465-20.142-3.912 1.36-22.69 8.022-43.465 20.14-11.516 6.72-22.858 14.847-30.922 23.583C173.55 384.488 169 393.397 169 402.397h-18c0-15 7.45-28.092 17.387-38.856 9.936-10.764 22.594-19.636 35.078-26.918 24.967-14.564 49.69-22.766 49.69-22.766z'
			fillOpacity='1'
		></path>
	),
});

const Keep = createIcon({
	displayName: 'Keep',
	viewBox: '0 0 512 512',
	path: (
		<path
			fill='currentColor'
			d='M133.842 41.092v41.262h91.138V41.092h-17.318V55.05h-18V41.09h-20.164v13.96h-18V41.09h-17.656zm25.828 59.262v41.261h10.828v18H159.67V260.14h61.31V229.63h18v30.508h100.97V185h-21.657v14.123H201.154V179.37h-12.232v-18h12.232v-61.015H159.67zm169.53 39.412L318.987 167h20.424L329.2 139.766zm-59.563 80.865h19.828v18h-19.828v-18zm-111.594 57.508l-5.887 29.324c19.725-13.368 39.964-23.723 60.276-29.324h-54.389zm122.928 0c25.32 6.411 50.978 19.055 76.066 35.3l-14.174-35.3h-61.892zm-24.653 13.957c-3.82 5.105-10.723 14.754-17.113 26.025-9.407 16.592-15.751 36.437-12.736 44.975 2.876 8.144 8.599 13.288 17.574 17.716 8.975 4.43 20.9 7.524 33.516 10.55 12.616 3.024 25.91 6.002 38.046 11.144s23.464 12.776 30.178 25.137c10.055 18.51 7.03 43.647 3.188 65.037-.08.446-.167.878-.248 1.32H494v-32.738c-14.198-15.921-30.351-33.191-47.953-50.551-57.898-57.103-130.39-112.264-189.729-118.615zm-40.763 4.166c-50.359 15.487-106.827 66.43-151.858 118.12C46.516 434.107 31.08 453.593 18 470.997V494h227.406c6.68-4.756 12.807-9.822 17.518-14.9 7.244-7.81 10.646-15.074 10.185-21.036-.535-6.926-3.903-10.494-11.75-14.556-7.846-4.063-19.606-7.09-32.046-10.051-12.441-2.96-25.562-5.894-37.028-11.207-11.465-5.313-21.989-13.921-25.228-27.326-3.35-13.863.587-28.2 7.101-41.846 6.514-13.646 15.908-26.903 25.531-38.713 5.355-6.571 10.79-12.676 15.866-18.103zm1.195 25.734c-9.738 12.244-20.112 26.008-26.348 38.836-5.547 11.62-7.701 22.2-5.85 29.863 1.63 6.74 6.426 11.11 15.302 15.223 8.875 4.112 21.114 7.052 33.626 10.03 12.513 2.977 25.296 5.952 36.155 11.573 10.858 5.622 20.357 15.42 21.42 29.157 1.024 13.248-5.882 24.903-14.934 34.662a98.14 98.14 0 0 1-2.574 2.66H330.4c.292-1.478.58-2.975.854-4.502 3.586-19.966 4.125-43.301-1.287-53.264-4.167-7.671-11.37-12.912-21.383-17.154-10.012-4.242-22.484-7.16-35.223-10.215-12.738-3.054-25.756-6.222-37.283-11.91-11.527-5.688-21.867-14.513-26.582-27.865-5.428-15.372-.157-31.982 7.254-47.094z'
			fillOpacity='1'
		></path>
	),
});

const Holdfast = createIcon({
	displayName: 'Holdfast',
	viewBox: '0 0 512 512',
	path: (
		<path
			fill='currentColor'
			d='M256 123.1c-20.516 15.092-38.26 36.844-53.766 59.9h107.532c-15.505-23.056-33.25-44.808-53.766-59.9zm-176.877 3.42l-7.162 41.718c-.143.016-13.15 77.655-13.15 77.655 30.433-3.215 60.18-5.702 89.395-7.475 13.228-23.585 28.986-53.104 48.95-80.135-33.286 1.448-68.19 4.104-106.41 7.987l6.132-36.79-17.754-2.96zm337.58.427l-17.756 2.96 6.006 36.032c-31.242-3.483-60.796-5.96-89.932-7.415 20.034 27.173 35.822 56.82 49.074 80.422a1554.483 1554.483 0 0 1 73.076 6.817L423.9 168.14c-.227-.027-7.197-41.193-7.197-41.193zM190.69 201c-7.623 12.392-14.61 24.686-21.127 36.24 59.372-2.912 116.642-2.788 173.076.36-6.576-11.657-13.63-24.08-21.33-36.6H190.69zm64.01 51.998c-7.23.006-14.462.06-21.7.158V279h46v-25.81c-8.072-.124-16.17-.188-24.3-.192zm-39.7.504c-36.22.876-72.693 2.9-110 6.05V279h110v-25.498zm82 .082V279h110v-18.523a1538.762 1538.762 0 0 0-110-6.893zm-210 7.568c-9.934.927-19.925 1.922-30 3.004V279h30v-17.848zm338 1.205V279h30v-13.055l-8.117-1.015A1555.665 1555.665 0 0 0 425 262.357zM51.727 297l-30 30h468.546l-30.002-30H51.728zM23 345l-.5 94-.5 18h468l-.5-18-.5-94h-18v94h-26.8v-94h-18v94h-26.8v-94h-18v94h-26.8v-94h-18v94h-26.8v-94h-18v94H265v-94h-18v94h-26.8v-94h-18v94h-26.8v-94h-18v94h-26.8v-94h-18v94H85.8v-94h-18v94H41v-94H23z'
			fillOpacity='1'
		></path>
	),
});

const Ruin = createIcon({
	displayName: 'Ruin',
	viewBox: '0 0 512 512',
	path: (
		<path
			fill='currentColor'
			d='M91.033 22.14v84.368l46.434 57.56v16.166l98.93 44.13 27.29-34.305 65.9 4.01v-30l46.433-57.562v-84.37h-48.916v39.796H297.33V22.14h-49.45v39.794h-29.24V22.14h-49.45v39.794h-29.243V22.14H91.033zm46.434 178.557v195.17h-29.88l-21.792 94.695h295.463l-21.79-94.695h-29.882V370.02l-38.72-24.07-23.712 29.292 28.432 25.737-12.543 13.854L241.5 377.23l33.37-41.222-91.65-56.973 33.288-43.082-79.04-35.256zm155.013 19.11l19.04 34.994 31.005-5.405-17.287-29.588H292.48zm66.682 10.088l17.293 74.527 55.553 2.068-13.442-57.967-59.404-18.628zm-135.47 27.328l-13.034 16.865 37.393 23.244 18.167-20.61-42.526-19.5zm73.115 13.056l-32.66 37.056 65.44 40.68V298.2l-32.78-27.92zm85.154 51.745l-5.16 29.584 33.49 18.158-.093-31.258-28.236-16.485zm79.91 6.928l-23.073 23.197 8.697 33.106 25.717-18.08-11.34-38.223zm-65.85 68.992l-10.97 36.977 24.88 17.49 8.414-32.025-22.323-22.442z'
			fillOpacity='1'
		></path>
	),
});

const Tower = createIcon({
	displayName: 'Tower',
	viewBox: '0 0 512 512',
	path: (
		<path
			fill='currentColor'
			d='M71 22.406v102.53h202.25v18.69h-73.22v36.968h-18.686v-36.97H79.156l43.375 53.782h180.44v18.688H180.905v36.97H162.22v-36.97h-39.407v163.562h58.53v-44.75H157.47V316.22h74.155V282.56H193.72v-18.687h97.218v18.688h-40.625v33.656h73.28v18.686h-32.437v44.75h26.313v18.688h-63.69l-2.686 74.03-18.688-.687 2.656-73.343H93.032V398h-.22l-28.687 92.844h79.844l9.81-70.688 18.5 2.563-9.468 68.124H453.25L424.562 398h-30.03V197.78l51.812-64.25V22.407h-64.406v52.438h-39.22V22.406h-65.124v52.438h-38.53V22.406h-65.126v52.438h-38.5V22.406H71zm129.03 312.5v44.75h72.44v-44.75h-72.44z'
			fillOpacity='1'
		></path>
	),
});

const Miscellaneous = createIcon({
	displayName: 'Miscellaneous',
	viewBox: '0 0 512 512',
	path: (
		<path
			fill='currentColor'
			d='M93.313 19.406c-11.24 0-20.157 8.916-20.157 20.157 0 6.968 3.436 13.022 8.72 16.624L35.218 494.25H54l46.438-435.875c7.637-2.84 13-10.1 13-18.813 0-11.237-8.886-20.156-20.126-20.156zm23.906 52.688l-21.157 198.78 92.624 19.532 64.157-194L117.22 72.094zm137.593 78.28L190.625 344.44l58.28 11.03-3.81-57.874 27.03 29.906 18.594-7.844 11.31 45.875 82.69 15.626-34.033-68.437 29.844-12.658 23.033 32.563 42.5.188 1.875 17.875 39-24.375-35.813-8.532-7.938-29.655-45.78-2.406 3.28-30.845-35.437-19.406 15.03-31.095 28.064-21.344v-.093l-153.53-32.562zm189.875 9.44l2.125 34.53-51.22 23.312 71.782 4.375 16.22-15.718L462.904 172l-18.217-12.188zm-4.47 84.874l35.126 45.625 18.47-25.625-53.595-20zm-98.468 8.25l24.813 1.406 5.218 23.75-50.155 9.062 20.125-34.22zm-4.03 76.687l11.967 19.22-37.062 2.217 5.094-15.906 20-5.53zm79.874 16.5l-17.53 29.188 39.717 32.718 40.876-11.092-40.28-19.875-22.782-30.938z'
			fillOpacity='1'
		></path>
	),
});

const Landmark = createIcon({
	displayName: 'Landmark',
	viewBox: '0 0 512 512',
	path: (
		<path
			fill='currentColor'
			d='M151 32v247h18V32h-18zm247 9.574l-13.428 7.59c-31.626 17.876-61.492 12.267-93.138 4.356-31.647-7.912-64.83-18.84-97.946-4.807L188 51.039V166.588l12.512-5.3c25.883-10.968 54.201-2.396 86.554 5.692 32.354 8.089 68.988 14.98 106.362-6.144l4.572-2.584V41.574zM73 297v67.271l32 32V487h302v-90.729l32-32V297h-46v39h-18v-39h-46v39h-18v-39h-46v39h-18v-39h-46v39h-18v-39h-46v39h-18v-39H73z'
			fillOpacity='1'
		></path>
	),
});

const Crannog = createIcon({
	displayName: 'Crannog',
	viewBox: '0 0 512 512',
	path: (
		<path
			fill='currentColor'
			d='M219.7 24.43l-17.8 2.06 6.8 59.37-36.1-50.35-14.6 10.5 31.9 44.45h37.4zm34.9.18l-6.3 65.85h18.2l6.1-64.15zm83.6 1.58l-37 64.27h20.7l31.9-55.29zm-50.9 6.33l-10.1 57.94h18.4l9.5-54.86zM195 108.5c-5.6 4-12.5 10.3-20.1 18h162.2c-7.6-7.7-14.5-14-20.1-18zm-36.9 36c-18.1 20.5-38.5 46.4-56.8 72.2-16.85 23.8-32.22 47.6-43.25 67.2-5.51 9.8-9.94 18.6-12.89 25.6-2.83 6.7-4.02 12-4.12 13.6.14 0 .58 1.6 2.29 3.3 2.32 2.4 6.32 5.2 11.79 7.4 10.93 4.4 27.71 6.6 50.08-.4 12.8-4 24.6 1.4 36.3 6.3 11.8 5 24.2 10.4 37.5 11.7 15.7 1.7 37.3-6.3 58.3-13.8 10.5-3.8 20.9-7.3 31-8.9 10.2-1.7 20.6-1.4 29.6 4.1 10.5 6.4 22.4 12.8 33.3 15.8 11 3.1 20.2 2.9 28.2-2.5 26.7-17.8 51.3-16.8 69.6-7.3 19.8 10.3 28.4 7.2 34 2.4 5.7-4.8 8.1-15 8-17.3v-.4c0-1.4-1.2-7-4.2-14s-7.4-15.8-12.9-25.6c-11-19.6-26.4-43.4-43.2-67.2-18.3-25.8-38.7-51.7-56.8-72.2zm121 201.3c-2.3 0-4.9.2-7.9.6-7.9 1.3-17.5 4.5-27.8 8.1-20.6 7.4-43.7 17.2-66.2 14.9-17-1.8-31.2-8.3-42.6-13.1-11.5-4.8-19.7-7.1-24-5.7-1.9.6-3.8 1.1-5.6 1.6v99.3c0 4.2 2.5 8.5 9.8 13.6 7.4 5 19.1 9.9 33.5 13.7 14.7 3.9 32.2 6.9 51 8.8 1.1-21.9 5-45.4 12.2-65.2 4.3-11.7 9.6-22.1 16.8-30.1 7.1-8.1 16.7-13.8 27.7-13.8s20.6 5.7 27.7 13.8c7.2 8 12.5 18.4 16.8 30.1 7.2 19.8 11.1 43.3 12.2 65.2 18.8-1.9 36.3-4.9 51-8.8 14.4-3.8 26.1-8.7 33.5-13.7 7.3-5.1 9.8-9.4 9.8-13.6V350c-10.3-1.6-22.3.9-37.6 11.1-13.4 8.9-29 8.7-43 4.9-13.9-3.8-26.9-11.1-37.9-17.8-2.4-1.5-5.5-2.3-9.4-2.4z'
			fillOpacity='1'
		></path>
	),
});

const Clan = createIcon({
	displayName: 'Clan',
	viewBox: '0 0 100 125',
	path: (
		<path
			fill='currentColor'
			d='M98.7,89.1L58.8,9.4c-0.4-0.8-1.1-1.3-2-1.3c-0.9,0-1.7,0.5-2.1,1.2L40,37.8L36.1,31c-0.4-0.7-1.2-1.2-2.1-1.1  c-0.9,0-1.6,0.6-2,1.3L1.5,89c-0.3,0.7-0.3,1.5,0.2,2.2c0.4,0.7,1.1,1,1.9,1h93c0.8,0,1.5-0.4,1.9-1C98.9,90.6,99,89.8,98.7,89.1z   M28.9,87.7c0-6.8,3.3-12.8,8.5-16.6l1-0.7l1.7,6.3c0.4,0.9,1.7,0.7,1.8-0.2l2.6-13.3c0.2-1,1.5-1.1,1.9-0.2l2,5.5  c0.3,0.9,1.5,0.8,1.8,0l1.4-4.1c0.3-1,1.8-0.8,1.9,0.3l0.7,13.2c0.1,1.2,1.8,1.2,1.9,0.1l1.4-10.4c0.1-1.1,1.7-1.1,1.9-0.1L63,81.6  c0.2,1,1.7,1,1.9,0l1.2-5.6c2.3,3.3,3.7,7.3,3.7,11.7H28.9z M60.7,37.1C60.1,36.5,59,37,59,37.8l-0.5,12c0,0.9-1.1,1.3-1.7,0.6  l-7.6-5c-0.4-0.5-1.2-0.4-1.5,0.1l-6.4,10.4c-0.4,0.5-1.2,0.5-1.6,0l-4.3-5.8c-0.3-0.5-1.1-0.5-1.5-0.1l-11.1,9.4l11.5-22.3l3.8,6.7  c0.4,0.7,1.2,1.2,2,1.1c0.8,0,1.6-0.5,2-1.2l14.5-28.1l14.2,30L60.7,37.1z'
		/>
	),
});

const Icons = {
	castle: Castle,
	town: Town,
	village: Village,
	city: City,
	holdfast: Holdfast,
	keep: Keep,
	landmark: Landmark,
	ruin: Ruin,
	tower: Tower,
	clan: Clan,
	crannog: Crannog,
	miscellaneous: Miscellaneous,
};

interface IBuildTypeProps extends IconProps {
	buildType: keyof typeof Icons;
}

const BuildTypeIcon = ({ buildType, ...props }: IBuildTypeProps) => {
	const Component = Icons[buildType];
	return (
		<Tooltip label={nameFormatter(buildType)}>
			<Component {...props} />
		</Tooltip>
	);
};

export default BuildTypeIcon;
