// src/app/providers.js
'use client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

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
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#2e7d32',
      secondary: '#666666',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

// default export olarak değiştirdik
export default function Providers({ children }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}