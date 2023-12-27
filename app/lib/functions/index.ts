export const makeClassName = (...classList: any[]): string =>
	classList.reduce((classList: string, className: any): string => {
		if (!className) return classList;
		if (Array.isArray(className)) className = makeClassName(className);
		if (!classList) return className;
		return classList + ' ' + className;
	}, '');
