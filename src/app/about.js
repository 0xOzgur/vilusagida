'use client';
import { Container, Typography, Button, Box, List, ListItem, ListItemText, Paper } from '@mui/material';

export default function About() {
  const activities = [
    'Zirai Faaliyetler',
    'Zeytinyağı Üretimi',
    'Sabun Üretimi',
    'Kedi Kumu Üretimi',
    'Üretim ve Yazılım Danışmanlık Hizmetleri',
    'Yazılım Hizmetleri',
    'Yapay Zeka Teknolojisi Geliştirme'
  ];

  return (
    <Box component="main" sx={{ 
      minHeight: '100vh', 
      py: 4,
      bgcolor: 'background.default' // Ana container'a bgcolor eklendi
    }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
          Şirket Hakkında
        </Typography>
        
        <Typography variant="body1" paragraph sx={{ mb: 4 }}>
          Bu şirket zirai faaliyetlere odaklanmış, çeşitli ürünler üreten ve yazılım danışmanlığı hizmetleri sunan bir kuruluştur.
        </Typography>
        
        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            Ana Faaliyetler:
          </Typography>
          <List>
            {activities.map((activity, index) => (
              <ListItem key={index}>
                <ListItemText primary={activity} />
              </ListItem>
            ))}
          </List>
        </Paper>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button 
            href="/" 
            variant="contained" 
            size="large"
            sx={{
              textTransform: 'none',
              borderRadius: 2
            }}
          >
            Ana Sayfa
          </Button>
        </Box>
      </Container>
    </Box>
  );
}