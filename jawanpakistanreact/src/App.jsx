import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Container,
  Box,
  Grid,
  TextField,
  TextareaAutosize,
  Paper,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="absolute" color="default">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <img src="https://jawanpakistan12.web.app/images/j3.png" alt="Jawan Pakistan" height="50" />
        </IconButton>
        <Button color="inherit" href="./index.html">Home</Button>
        <Button color="inherit" href="./index.html#about">About us</Button>
        <Button
          color="inherit"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          endIcon={<ArrowDropDownIcon />}
        >
          Trainings
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem href="./webandmobile.html">Web and Mobile Application Development</MenuItem>
          <MenuItem href="./flutter.html">Flutter Application Development</MenuItem>
          <MenuItem href="./graphic.html">Graphic Design and Video Editing</MenuItem>
          <MenuItem href="./digitalmarketing.html">Digital and Social Media Marketing</MenuItem>
          <MenuItem href="./blockchain.html">Blockchain Development</MenuItem>
        </Menu>
        <Button color="inherit" href="#contact">Contact us</Button>
      </Toolbar>
    </AppBar>
  );
};

const IntroductionSection = () => (
  <Container>
    <Grid container marginTop={"10px"} spacing={20} alignItems="center">
      <Grid item xs={12} md={6}>
        <Typography variant="h4" component="h1" color={"green"}>Introduction to <br /> Jawan Pakistan</Typography><br /><br />
        <Typography variant="body1">
          The foundation of every state is the education and skills set of its youth. Jawan Pakistan is such an organization of Pakistan who is not only working on youth education but also enhancing skills set in youth either Free of cost or in a very low cost. This initiative, initially developed by a single person and with almost no seed capital, promotes entrepreneurship and innovation and Sustainable Development Goal, which promotes inclusive and sustainable economic growth.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <img src="https://jawanpakistan12.web.app/images/1.png" alt="Jawan Pakistan" style={{ maxWidth: '100%', borderRadius: '8px' }} />
      </Grid>
    </Grid>
  </Container>
);

const MissionSection = () => (
  <Paper elevation={3} sx={{ padding: '2rem', marginY: '2rem' }}>
    <Container>
      <Grid container marginTop={"10px"} spacing={3} alignItems="center">
        <Grid item xs={12} md={6}>
          <img src="https://jawanpakistan12.web.app/images/2.png" alt="Mission" style={{ maxWidth: '100%', borderRadius: '8px' }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" color={"green"} component="h2">Mission And Vision Behind <br /> Jawan Pakistan</Typography><br /><br />
          <Typography variant="body1" gutterBottom>
            Our vision is to bring our students into the 21st century through innovation and modern technology. To create a better everyday life for everyone. This program is not only impacting the youth in monetary perspective but it is also creating some deep-rooted, long-term psychological effects e.g., minimizing frustration among the unemployed youth.
          </Typography> <br /><br />
          <Typography variant="body1">
            Our mission is to provide high quality education that connects young people with opportunities to transform their lives. The educated youngsters who remain unemployed get frustrated, depressed, and disheartened when they do not succeed in getting their dream jobs. This training reinforces the educated youth to earn well through freelancing, develop a variety of skills through specified domains, and promote an entrepreneurial culture that diverts youth's potentials for constructive purposes. This energy diversion definitely makes the youth more confident, self-reliant, and a constructive asset for a progressing economy.
          </Typography><br /><br />
        </Grid>
      </Grid>
    </Container>
  </Paper>
);

const TestimonialSection = () => (
    <Box sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <img alt="Muhammad Ali Mughal"src="https://jawanpakistan12.web.app/images/image.jpg"
          sx={{width: 200,height: 200,mx: 'auto',mb: 4,borderRadius: '50%',}}/>
        <p variant="middle"
          sx={{
            bgcolor: 'primary.main',
            width: '40px',
            height: '4px',
            mx: 'auto',
            my: 3,
          }}
        />
        <Typography
          variant="h5"
          color={"green"}
          fontSize={"30px"}
          component="h2"
          sx={{ mb: 1 }}
        >
          MUHAMMAD ALI MUGHAL
        </Typography>
        <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 4 }}>
          Founder of Jawan Pakistan
        </Typography>
        
        <Typography
          variant="body1"
          component="p"
          sx={{ color: 'text.primary', maxWidth: '600px', mx: 'auto' }}
        >
          We aim to be the most efficient provider of business process outsourcing services by setting the industry standards for cost and quality of services. Our long-term success will be driven by our relentless focus on recruiting and developing the most talented pool of human capital in our industry.
        </Typography>
      </Container>
    </Box>
  );


const TrainingSection = () => (
  <Paper elevation={3} sx={{ padding: '2rem', marginY: '2rem' }}>
    <Container>
      <Typography variant="h4" component="h2" align="center" color={"green"} marginBottom={"100px"} fontSize={"50px"} gutterBottom>IT Trainings offering in Jawan Pakistan</Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ textAlign: 'center' }}>
            <a href="./webandmobile.html">
              <img src="https://www.seekpng.com/png/detail/252-2527672_mobile-application-development-mobile-app-and-web-development.png" alt="Web and Mobile Application Development" style={{ width: '100%', borderRadius: '8px' }} />
            </a>
            <Typography variant="h6">Web and Mobile Application Development</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ textAlign: 'center' }}>
            <a href="./flutter.html">
              <img src="data:image/jpeg;base64,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" alt="Flutter Mobile Application Development" style={{ width: '100%', borderRadius: '8px' }} />
            </a>
            <Typography variant="h6">Flutter Mobile Application Development</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ textAlign: 'center' }}>
            <a href="./graphic.html">
              <img src="https://academy.tens.ng/wp-content/uploads/2021/02/learn-graphic-design.jpg" alt="Graphic Design And Video Editing" style={{ width: '100%', borderRadius: '8px' }} />
            </a>
            <Typography variant="h6">Graphic Design And Video Editing</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ textAlign: 'center' }}>
            <a href="./digitalmarketing.html">
              <img src="https://peppermintcreate.com/wp-content/uploads/2020/04/blog-image-Soical-media-v-digital.png" alt="Digital And Social Media Marketing" style={{ width: '100%', borderRadius: '8px' }} />
            </a>
            <Typography variant="h6">Digital And Social Media Marketing</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ textAlign: 'center' }}>
            <a href="./blockchain.html">
              <img src="https://jawanpakistan12.web.app/images/blockchain.jpg" alt="Blockchain Development" style={{ width: '100%', borderRadius: '8px' }} />
            </a>
            <Typography variant="h6">Blockchain Development</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Paper>
);

const ContactSection = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Form submission logic here
  };

  return (
    <Container>
      <Paper elevation={3} sx={{ padding: '2rem', marginY: '2rem' }}>
        <Typography variant="h4" component="h2" align="center">Contact</Typography>
        <form onSubmit={handleFormSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            required
            margin="normal"
            type="email"
          />
          <TextField
            fullWidth
            label="Phone Number"
            name="number"
            required
            margin="normal"
            type="tel"
          />
          <TextareaAutosize
            minRows={5}
            placeholder="Message"
            name="message"
            style={{ width: '100%', margin: '8px 0', padding: '8px' }}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
        </form>
      </Paper>
    </Container>
  );
};

const Footer = () => (
  <Box sx={{ backgroundColor: '#f8f8f8', padding: '1rem 0' }}>
    <Container>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={4} textAlign="center">
          <Typography variant="body1" color="textSecondary">
            © 2024 Jawan Pakistan. All rights reserved.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} textAlign="center">
          <Typography variant="body1" color="textSecondary">
            Follow us on:
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '0.5rem' }}>
            <IconButton color="inherit">
              <img src="https://img.icons8.com/material-outlined/24/facebook-new.png" alt="Facebook" />
            </IconButton>
            <IconButton color="inherit">
              <img src="https://img.icons8.com/material-outlined/24/twitter.png" alt="Twitter" />
            </IconButton>
            <IconButton color="inherit">
              <img src="https://img.icons8.com/material-outlined/24/instagram-new.png" alt="Instagram" />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} textAlign="center">
          <Typography variant="body1" color="textSecondary">
            <Button color="inherit" href="#contact">Contact Us</Button>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

const App = () => (
  <div>
    <Header />
    <IntroductionSection />
    <MissionSection />
    < TestimonialSection/>
    <TrainingSection />
    <ContactSection />
    <Footer />
    
  </div>
);

export default App;
