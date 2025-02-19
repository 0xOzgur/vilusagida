'use client';
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import "./globals.css";

// Geist fontlarını yapılandırma
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

// Material UI temasını oluşturma
// Material UI temasını oluşturma
const theme = createTheme({
  palette: {
    primary: {
      main: '#2e7d32', // Koyu yeşil
      light: '#4caf50', // Açık yeşil
      dark: '#1b5e20', // Daha koyu yeşil
    },
    secondary: {
      main: '#ff9800', // Turuncu
      light: '#ffb74d', // Açık turuncu
      dark: '#f57c00', // Koyu turuncu
    },
    background: {
      default: '#ffffff', // Beyaz arkaplan
      paper: '#ffffff', // Beyaz kart arkaplanı
      paper: '#ffffff',   
    },
    text: {
      primary: '#2e7d32', // Ana metinler yeşil
      secondary: '#666666', // İkincil metinler gri
    },
    success: {
      main: '#4caf50',
      light: '#81c784',
      dark: '#388e3c',
    },
    warning: {
      main: '#ff9800',
      light: '#ffb74d',
      dark: '#f57c00',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
          padding: '8px 16px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 2px 4px rgba(0,0,0,0.2)',
          },
        },
        // Turuncu buton varyantı
        containedSecondary: {
          backgroundColor: '#ff9800',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#f57c00',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
          '&:hover': {
            boxShadow: '0px 4px 12px rgba(0,0,0,0.15)',
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: '#2e7d32',
            color: '#ffffff',
            '&:hover': {
              backgroundColor: '#1b5e20',
            },
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: '#4caf50', // Açık yeşil avatar arkaplanı
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(76, 175, 80, 0.1)', // Yeşil hover efekti
          },
        },
      },
    },
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}