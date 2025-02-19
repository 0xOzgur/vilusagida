'use client';
import { Container, Typography, Button, Box } from '@mui/material';
import Services from './services';
import Contact from './components/Contact';
import { useEffect, useState } from 'react';
import Providers from './providers';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Providers>
    <Box component="main" sx={{ minHeight: '100vh', py: 4, bgcolor: 'background.default' }}>
      
      <Container maxWidth="lg">
        <Box
          sx={{
            position: 'relative',
            mb: 1,
            mt: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Dekoratif çizgi */}
          <Box
            sx={{
              width: { xs: '80px', md: '120px' },
              height: '4px',
              bgcolor: 'primary.main',
              mb: 3,
              transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'transform 0.6s ease-out',
              transformOrigin: 'left'
            }}
          />

          {/* Ana başlık */}
          <Typography 
            variant="h1" 
            component="h1" 
            align="center"
            sx={{ 
              fontWeight: 800,
              fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
              color: 'primary.main',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
              textAlign: 'center',
              position: 'relative',
              mb: 2,
              letterSpacing: '0.02em',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60%',
                height: '2px',
                backgroundColor: 'primary.light',
                opacity: 0.5
              }
            }}
          >
            Vilusa
          </Typography>

          {/* Alt başlık */}
          <Typography 
            variant="h2" 
            component="h2"
            sx={{
              fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem' },
              color: 'text.secondary',
              fontWeight: 500,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease-out 0.3s, transform 0.6s ease-out 0.3s',
              textAlign: 'center',
              letterSpacing: '0.15em',
              '& span': {
                color: 'primary.dark',
                fontWeight: 600,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  width: '100%',
                  height: '2px',
                  backgroundColor: 'primary.light',
                  opacity: 0,
                  transform: 'scaleX(0)',
                  transition: 'opacity 0.3s, transform 0.3s',
                  transformOrigin: 'center'
                },
                '&:hover::after': {
                  opacity: 0.5,
                  transform: 'scaleX(1)'
                }
              }
            }}
          >
            <span>Gıda</span> • <span>Tarım</span> • <span>Sanayi</span>
          </Typography>

          {/* Dekoratif çizgi */}
          <Box
            sx={{
              width: { xs: '80px', md: '120px' },
              height: '4px',
              bgcolor: 'primary.main',
              mt: 3,
              transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'transform 0.6s ease-out',
              transformOrigin: 'right'
            }}
          />
        </Box>

        <Services />

        <Box 
  sx={{ 
    position: 'relative',
    my: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
  }}
>
  {/* Sol dekoratif çizgi */}
  <Box
    sx={{
      flex: 1,
      height: '2px',
      background: 'linear-gradient(to right, transparent, #2e7d32)',
      maxWidth: '200px'
    }}
  />
  
  {/* Orta ikon veya sembol */}
  <Box
    sx={{
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      border: '2px solid',
      borderColor: 'primary.main',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      mx: 2,
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        width: '10px',
        height: '10px',
        bgcolor: 'primary.main',
        borderRadius: '50%'
      }
    }}
  />
  
  {/* Sağ dekoratif çizgi */}
  <Box
    sx={{
      flex: 1,
      height: '2px',
      background: 'linear-gradient(to left, transparent, #2e7d32)',
      maxWidth: '200px'
    }}
  />
</Box>

<Contact />
        </Container>
      </Box>
    </Providers>
  );
}