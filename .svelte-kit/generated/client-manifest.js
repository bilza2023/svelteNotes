export { matchers } from './client-matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18')];

export const server_loads = [];

export const dictionary = {
	"/": [3],
	"/about": [4],
	"/anim": [5,[2]],
	"/anim/inner": [6,[2]],
	"/articles": [~7],
	"/articles/create": [~8],
	"/articles/edit/[articleId]": [~9],
	"/articles/[articleId]": [~10],
	"/chess": [11],
	"/chess/[gameId]": [12],
	"/contact": [13],
	"/formtest": [~14],
	"/manage": [15],
	"/sqlite": [~16],
	"/sverdle": [~17],
	"/sverdle/how-to-play": [18]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};