import { Container, Typography } from "@mui/material";
import Button from '@mui/material/Button';
    import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
    const navigate = useNavigate();
  return (
    <Container maxWidth="sm" 
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center',
      width: "100vw",
      backgroundColor: '#b6b6b6ff',
    }}>
        <Typography variant="h1" component="h1" color="error" gutterBottom>
          404
        </Typography>
        <Typography variant="h3" component="h3" color="error" gutterBottom>
          Not Found
        </Typography>
        <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={() => navigate('/')}
        >Ir al inicio</Button>
    </Container>
  );
};
 