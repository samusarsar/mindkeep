import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { ConvexClientProvider } from '@/components/providers/convex-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';

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
		<html
			lang='en'
			suppressHydrationWarning
		>
			<body className={inter.className}>
				<ConvexClientProvider>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						enableSystem
						disableTransitionOnChange
						storageKey='mindkeep-theme'
					>
						{children}
					</ThemeProvider>
				</ConvexClientProvider>
			</body>
		</html>
	);
}
