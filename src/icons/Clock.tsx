import React from 'react';
import type { SVGProps } from 'react';

export function RiTimeLine(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 24 24" {...props}><path fill="#6B7280" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m1-8h4v2h-6V7h2z"></path></svg>);
}