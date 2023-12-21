import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Mindkeep',
	description:
		'The connected environment and workspace for new-age mindkeeping.',
	icons: {
		icon: [
			{
				media: '(prefers-color-scheme: light',
				url: '/logo.png',
				href: '/logo.png',
			},
			{
				media: '(prefers-color-scheme: dark',
				url: '/logo-dark.png',
				href: '/logo-dark.png',
			},
		],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
