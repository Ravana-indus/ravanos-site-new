
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['SF Pro Display', 'Inter', 'sans-serif'],
				mono: ['SF Mono', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				ravan: {
					black: '#0A0A0A',
					dark: '#121212',
					gray: '#1E1E1E',
					lightgray: '#2A2A2A',
					accent: '#7761FF',
					'accent-light': '#9087F5',
					'accent-dark': '#5946D8',
					blue: '#61DAFB',
					purple: '#7761FF',
					green: '#5CD85C',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' }
				},
				'fade-in-up': {
					from: { opacity: '0', transform: 'translateY(20px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in-right': {
					from: { transform: 'translateX(100%)', opacity: '0' },
					to: { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-in-left': {
					from: { transform: 'translateX(-100%)', opacity: '0' },
					to: { transform: 'translateX(0)', opacity: '1' }
				},
				'subtle-pulse': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.9' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'gradient-shift': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				scale: {
					'0%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' },
					'100%': { transform: 'scale(1)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-in-out',
				'fade-in-slow': 'fade-in 1.2s ease-in-out',
				'fade-in-up': 'fade-in-up 0.8s ease-out',
				'fade-in-up-slow': 'fade-in-up 1.2s ease-out',
				'slide-in-right': 'slide-in-right 0.8s ease-out',
				'slide-in-left': 'slide-in-left 0.8s ease-out',
				'subtle-pulse': 'subtle-pulse 3s ease-in-out infinite',
				float: 'float 6s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 10s ease infinite',
				scale: 'scale 8s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'hero-gradient': 'linear-gradient(90deg, rgba(119, 97, 255, 0.15) 0%, rgba(97, 218, 251, 0.15) 100%)',
				'feature-gradient': 'linear-gradient(135deg, rgba(119, 97, 255, 0.1) 0%, rgba(97, 218, 251, 0.1) 100%)',
				'rainbow-gradient': 'linear-gradient(90deg, rgba(119, 97, 255, 1) 0%, rgba(97, 218, 251, 1) 50%, rgba(92, 216, 92, 1) 100%)',
			},
			boxShadow: {
				'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
				'glass-hover': '0 10px 40px rgba(0, 0, 0, 0.15)',
				'accent': '0 8px 30px rgba(119, 97, 255, 0.2)',
				'accent-hover': '0 12px 40px rgba(119, 97, 255, 0.3)',
			},
			backdropBlur: {
				'xs': '2px',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
