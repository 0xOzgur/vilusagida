'use client';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
  Avatar
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ContactItem = ({ icon, title, content, link }) => (
  <Card 
    sx={{ 
      height: '100%',
      transition: 'transform 0.3s, box-shadow 0.3s',
      '&:hover': {
        transform: 'scale(1.02)',
        boxShadow: 6,
        borderColor: 'primary.main',
        borderWidth: 1,
        borderStyle: 'solid'
      }
    }}
  >
    <CardContent sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      textAlign: 'center',
      padding: 3
    }}>
      <Avatar 
        sx={{ 
          bgcolor: 'primary.light',
          width: 64,
          height: 64,
          mb: 2,
          '& svg': {
            width: 32,
            height: 32,
            color: 'white'
          }
        }}
      >
        {icon}
      </Avatar>
      <Typography 
        variant="h6" 
        component="h3" 
        gutterBottom
        sx={{ 
          fontWeight: 600,
          mb: 1.5,
          color: 'primary.main'
        }}
      >
        {title}
      </Typography>
      <Typography 
        variant="body1" 
        component={link ? "a" : "p"}
        href={link}
        sx={link ? { 
          textDecoration: 'none', 
          color: 'primary.main',
          '&:hover': { 
            color: 'primary.dark',
            textDecoration: 'underline'
          },
          cursor: 'pointer'
        } : { 
          color: 'text.secondary' 
        }}
      >
        {content}
      </Typography>
    </CardContent>
  </Card>
);

export default function Contact() {
  const contactItems = [
    {
      icon: <PhoneIcon />,
      title: "Telefon",
      content: "+90 555 879 09 56",
      link: "tel:+905558790956"
    },
    {
      icon: <WhatsAppIcon />,
      title: "WhatsApp",
      content: "+90 850 840 58 83",
      link: "https://wa.me/98508405883"
    },
    {
      icon: <EmailIcon />,
      title: "E-posta",
      content: "iletisim@vilusagida.com",
      link: "mailto:iletisim@vilusagida.com"
    },
    {
      icon: <LocationOnIcon />,
      title: "Adres",
      content: "Altınova Mh. 729. Sk. No:54 Ayvalık/Balıkesir"
    }
  ];

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          component="h2" 
          align="center" 
          gutterBottom
          sx={{ 
            fontWeight: 'bold',
            mb: 2
          }}
        >
          İletişim
        </Typography>
        
        <Typography 
          variant="h6" 
          align="center" 
          color="text.secondary" 
          sx={{ mb: 6 }}
        >
          Bizimle iletişime geçin
        </Typography>

        <Grid container spacing={4}>
          {contactItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <ContactItem 
                icon={item.icon}
                title={item.title}
                content={item.content}
                link={item.link}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}