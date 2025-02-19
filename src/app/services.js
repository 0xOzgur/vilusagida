'use client';
import { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Card, 
  CardContent, 
  ToggleButtonGroup, 
  ToggleButton,
  Avatar
} from '@mui/material';
import Image from 'next/image';

const ServiceItem = ({ title, description, icon }) => (
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
      padding: 2,
      '&:hover': {
        padding: 2, // Hover durumunda padding değişmemeli
      }
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
        <Image 
          src={icon} 
          alt={title} 
          width={32} 
          height={32} 
          style={{ color: 'white' }}
        />
      </Avatar>
      <Typography 
        variant="h6" 
        component="h3" 
        gutterBottom
        sx={{ 
          fontWeight: 600,
          mb: 1.5,
          color: 'primary.main',
          transition: 'color 0.3s', // Sadece renk değişimi
        }}
      >
        {title}
      </Typography>
      <Typography 
        variant="body2" 
        color="text.secondary"
        sx={{
          transition: 'color 0.3s', // Sadece renk değişimi
        }}
      >
        {description}
      </Typography>
    </CardContent>
  </Card>
);

export default function Services() {
  const services = [
    // Zirai Faaliyetler
    { title: 'Zeytin Yetiştiriciliği ve Bakımı', description: 'Organik zeytin yetiştirme ve bakımı', icon: '/icons/crop.svg', category: 'Zirai Faaliyetler' },
    { title: 'Hasat Organizasyonu', description: 'Etkili ve verimli zeytin hasadı için ekip organizasyonu', icon: '/icons/harvest.svg', category: 'Zirai Faaliyetler' },
    { title: 'Bahçe Bakımı', description: 'Bahçelerinizin tesisinden bakımına, detaylı ve bilimsel yaklaşım.', icon: '/icons/garden.svg', category: 'Zirai Faaliyetler' },
    { title: 'Peyzaj Uygulamaları', description: 'Hayalinizdeki veya projelendirilmiş peyzaj uygulamaları, çimlendirme, dekorasyon.', icon: '/icons/landscape.svg', category: 'Zirai Faaliyetler' },

    // Üretim Faaliyetleri
    { title: 'Zeytinyağı Üretimi', description: 'Kaliteli ve saf zeytinyağı üretimi', icon: '/icons/olive-oil.svg', category: 'Üretim Faaliyetleri' },
    { title: 'Sabun Üretimi', description: 'Doğal malzemeler kullanarak sağlık banyoları', icon: '/icons/soap.svg', category: 'Üretim Faaliyetleri' },
    { title: 'Kedi Kumu Üretimi', description: 'Sağlıklı kedi kumu üretimi', icon: '/icons/cat-litter.svg', category: 'Üretim Faaliyetleri' },

    // Teknolojik Hizmetler
    { title: 'Web Uygulamaları', description: 'Güvenilir ve yüksek performanslı web uygulamaları geliştirme', icon: '/icons/web.svg', category: 'Teknolojik Hizmetler' },
    { title: 'E-Ticaret', description: 'Otomatize edilmiş e-ticaret çözümleri', icon: '/icons/ecommerce.svg', category: 'Teknolojik Hizmetler' },
    { title: 'Yapay Zeka Uygulamaları', description: 'AI tabanlı çözümler geliştirme ve optimizasyon', icon: '/icons/ai.svg', category: 'Teknolojik Hizmetler' },

    // Danışmanlık Hizmetleri
    { title: 'Zirai Danışmanlık', description: 'Çiftçilere özel zirai danışmanlık hizmetleri', icon: '/icons/plant.svg', category: 'Danışmanlık Hizmetleri' },
    { title: 'Zeytinyağı Üretim ve Tesis Danışmanlığı', description: 'Profesyonel zeytinyağı üretim tesisleri danışmanlığı', icon: '/icons/olive-oil-bottle.svg', category: 'Danışmanlık Hizmetleri' },
    { title: 'Yazılım Uygulama Danışmanlığı', description: 'Müşterilerimize özel yazılım çözümleri danışmanlığı', icon: '/icons/code.svg', category: 'Danışmanlık Hizmetleri' },
    { title: 'Yapay Zeka Uygulamaları Danışmanlığı', description: 'AI tabanlı çözümler için danışmanlık hizmetleri', icon: '/icons/robot.svg', category: 'Danışmanlık Hizmetleri' },
  ];

  const [activeCategory, setActiveCategory] = useState('Zirai Faaliyetler');

  const handleCategoryChange = (event, newCategory) => {
    if (newCategory !== null) {
      setActiveCategory(newCategory);
    }
  };

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
          Hizmetler
        </Typography>
        
        <Typography 
          variant="h6" 
          align="center" 
          color="text.secondary" 
          sx={{ mb: 6 }}
        >
          Sizin için sunduğumuz profesyonel hizmetler
        </Typography>

        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          mb: 6,
          flexWrap: 'wrap'
        }}>
          <ToggleButtonGroup
            value={activeCategory}
            exclusive
            onChange={handleCategoryChange}
            aria-label="service categories"
            sx={{
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 1,
              '& .MuiToggleButton-root': {
                border: '1px solid rgba(0, 0, 0, 0.12)',
                borderRadius: '20px !important',
                mx: 0.5,
                my: 0.5,
                px: 3,
                py: 1,
                color: 'text.secondary',
                '&.Mui-selected': {
                  bgcolor: 'primary.main',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                  }
                },
                '&:hover': {
                  bgcolor: 'rgba(46, 125, 50, 0.04)',
                  borderColor: 'primary.main'
                }
              }
            }}
          >
            {['Zirai Faaliyetler', 'Üretim Faaliyetleri', 'Teknolojik Hizmetler', 'Danışmanlık Hizmetleri'].map((category) => (
              <ToggleButton 
                key={category} 
                value={category}
              >
                {category}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>

        <Box sx={{ 
          display: 'flex',
          flexWrap: 'wrap',
          gap: 4,
          justifyContent: 'center'
        }}>
          {services
            .filter(service => service.category === activeCategory)
            .map((service) => (
              <Box
                key={service.title}
                sx={{
                  flexBasis: {
                    xs: '100%',
                    sm: 'calc(50% - 16px)',
                    md: 'calc(33.333% - 32px)'
                  },
                  minWidth: {
                    xs: '280px',
                    sm: '320px',
                    md: '300px'
                  },
                  maxWidth: '400px'
                }}
              >
                <ServiceItem {...service} />
              </Box>
            ))}
        </Box>
      </Container>
    </Box>
  );
}