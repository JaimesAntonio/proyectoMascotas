


  import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import diagnosticImg from '../images/diagnostic.png'
import surgeryImg from '../images/surgery.png'
import radiologyImg from '../images/radiology.png'
import hospitalizationImg from '../images/hospitalization.png'
import { Stack } from '@mui/material';

export const Services = () => {
  return (
    <Card sx={{ maxWidthWidth: 1,}}>
      <Stack direction="row" gap={1} width="px">
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={diagnosticImg}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pet Diagnostic
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              At Happy Pet Center, we have a great veterinary team and
              the qualified experience to quickly diagnose and treat your pets.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={surgeryImg}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pet Surgery
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Stack>
        <Stack direction="row" gap={3}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={radiologyImg}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pet Radiology
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={hospitalizationImg}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pet Hospitalization
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
      </Stack>
    </Card>
    
    
  );
}