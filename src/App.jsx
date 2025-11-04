import './App.css'
import Logo from './assets/imgs/footerwhite.webp'
import arrowDown from './assets/imgs/vector.png'
import house_1 from './assets/imgs/house1.png'
import house_2 from './assets/imgs/house2.png'
import house_3 from './assets/imgs/house3.png'
import img_blend from './assets/imgs/granVille-cinema-blend.png'
import img_blend2 from './assets/imgs/img-blend.png'

function App() {
  const logoSize = {
    width: "200px",
    height: "200px"
  };

  return (
    <>
      <section className='nav_hero' id='nav_hero'>
        <div className="container">
          <div className="row">
            <a className="navbar-brand d-flex justify-content-center" href="https://landbookbyharmony.com/" 
                target="_blank" rel="noopener noreferrer">
              <img src={Logo} width={logoSize.width} height={logoSize.height} 
                  alt='logo'/>
            </a>
          </div >


          <div className="row justify-content-center text-center">
            <div className="col-xl-1">
              <img src={img_blend} alt='bg-img' className='animated-image'/>
            </div>

            <div className="col-xl-10">
              <h1>Nigeria's first <span>Real Estate AI Answer Engine</span> for any questions 
                regarding the real estate market in the Country.
              </h1>

              <p className='mt-4'><span>Powered by:</span></p>

              <p className='mt-5'>Harmony Garden & Estate Development Limited</p>

              <label>
                <input 
                  className='input_section'
                  placeholder='ask anything about the Nigerian real estate market'
                />
              </label>

              <a className='d-flex justify-content-center arrow-link' href='#main'>
                <img src={arrowDown} alt='arrowDown' className='arrow-function'/>
              </a>
            </div>

            <div className="col-xl-1">
              <img src={img_blend2} alt='bg-img' className='animated-image-2'/>
            </div>
          </div>
        </div>
      </section>


      <section className="main" id='main'>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 text-center">
              <h2>Recommended Properties</h2>
              <p>Discover some of our properties with verifiable titles</p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="card-body shadowed-body">
                <img src={house_1} alt='house-img' className='card-img'/>

                <h3 className='card-title'>₦227,000,000</h3>
                <p className='card-text'>Per unit of a rent-to-own 3-bedroom duplex at any of our estates.</p>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="card-body shadowed-body">
                <img src={house_2} alt='house-img' />

                <h3 className='card-title'>₦85,000,000</h3>
                <p className='card-text'>Per unit of a rent-to-own 3-bedroom bungalow at any of our estates.</p>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="card-body shadowed-body">
                <img src={house_3} alt='house-img' />

                <h3 className='card-title'>₦298,000,000</h3>
                <p className='card-text'>Per unit of a rent-to-own 4-bedroom duplex at any of our estates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='footer' id='footer'>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 d-flex justify-content-center align-items-center">
              <p>© 2025 Harmony Garden & Estate Development Limited - Ilamija, Ibeju-Lekki, Lagos, Nigeria</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App





// import { Box, Container, Grid, Typography, TextField, Card, CardContent, CardMedia } from '@mui/material';
// import Logo from './assets/imgs/ai-logo.png';
// import arrowDown from './assets/imgs/vector.png';
// import house_1 from './assets/imgs/house1.png';
// import house_2 from './assets/imgs/house2.png';
// import house_3 from './assets/imgs/house3.png';
// import img_blend from './assets/imgs/granVille-cinema-blend.png';
// import img_blend2 from './assets/imgs/img-blend.png';

// function App() {
//   return (
//     <>
//       {/* Hero Section */}
//       <Box
//         id="nav_hero"
//         sx={{
//           background: 'linear-gradient(50deg, #4C3B02 0%, #C79900 100%)',
//           color: '#fff',
//           py: 6,
//           position: 'relative',
//           overflow: 'hidden',
//         }}
//       >
//         <Container>
//           {/* Logo */}
//           <Box display="flex" justifyContent="center">
//             <img src={Logo} alt="logo" style={{ width: 'auto', height: 'auto', marginBottom: 40 }} />
//           </Box>

//           {/* Animated Side Images */}
//           <Box
//             component="img"
//             src={img_blend}
//             alt="blend left"
//             sx={{
//               position: 'absolute',
//               top: '300px',
//               left: 0,
//               animation: 'spin 60s linear infinite',
//               pointerEvents: 'none',
//               display: { xs: 'none', md: 'block' },
//             }}
//           />
//           <Box
//             component="img"
//             src={img_blend2}
//             alt="blend right"
//             sx={{
//               position: 'absolute',
//               top: '300px',
//               right: 0,
//               animation: 'spin 40s linear infinite',
//               pointerEvents: 'none',
//               display: { xs: 'none', md: 'block' },
//             }}
//           />

//           {/* Hero Text */}
//           <Box textAlign="center" maxWidth="md" mx="auto">
//             <Typography variant="h4" component="h1" sx={{ lineHeight: 1.4 }}>
//               Nigeria's first{' '}
//               <Box component="span" sx={{ backgroundColor: '#fff', color: '#4C3B02', px: 1.5, borderRadius: '50px' }}>
//                 Real Estate AI Answer Engine
//               </Box>{' '}
//               for any questions regarding the real estate market in the Country.
//             </Typography>

//             <Typography mt={4}><Box component="span" sx={{ backgroundColor: '#fff', color: '#4C3B02', px: 1.5, borderRadius: '50px' }}><strong>Powered by:</strong></Box></Typography>
//             <Typography mt={2}>Harmony Garden & Estate Development Limited</Typography>

//             {/* Input */}
//             <Box mt={4}>
//               <TextField
//                 fullWidth
//                 placeholder="Ask anything about the Nigerian real estate market"
//                 variant="outlined"
//                 sx={{
//                   backgroundColor: '#fff',
//                   borderRadius: '50px',
//                   '& .MuiOutlinedInput-root': {
//                     borderRadius: '50px',
//                     textAlign: 'center',
//                     px: 3,
//                   },
//                 }}
//               />
//             </Box>

//             {/* Arrow */}
//             <Box mt={6}>
//               <Box
//                 component="img"
//                 src={arrowDown}
//                 alt="scroll down"
//                 sx={{
//                   width: 68,
//                   height: 68,
//                   animation: 'pulseBrightness 1.5s infinite ease-in-out',
//                 }}
//               />
//             </Box>
//           </Box>
//         </Container>
//       </Box>

//       {/* Property Section */}
//       <Box id="main" sx={{ py: 6 }}>
//         <Container>
//           <Box textAlign="center" mb={5}>
//             <Typography variant="h4" sx={{ color: '#4C3B02', fontWeight: '300' }}>
//               Recommended Properties
//             </Typography>
//             <Typography>Discover some of our properties with verifiable titles</Typography>
//           </Box>

//           <Grid container spacing={4}>
//             {[house_1, house_2, house_3].map((img, i) => {
//               const prices = ['₦227,000,000', '₦85,000,000', '₦298,000,000'];
//               const texts = [
//                 'Per unit of a rent-to-own 3-bedroom duplex at any of our estates.',
//                 'Per unit of a rent-to-own 3-bedroom bungalow at any of our estates.',
//                 'Per unit of a rent-to-own 4-bedroom duplex at any of our estates.',
//               ];
//               return (
//                 <Grid item xs={12} md={4} key={i}>
//                   <Card sx={{ borderRadius: 2, boxShadow: 6, overflow: 'hidden' }}>
//                     <CardMedia
//                       component="img"
//                       image={img}
//                       alt="property"
//                       sx={{
//                         transition: 'transform 0.3s ease-in-out',
//                         '&:hover': {
//                           transform: 'scale(1.1)',
//                         },
//                       }}
//                     />
//                     <CardContent>
//                       <Typography variant="h5" textAlign="center" sx={{ color: '#4C3B02', pt: 2 }}>
//                         {prices[i]}
//                       </Typography>
//                       <Typography textAlign="center" sx={{ pt: 1 }}>
//                         {texts[i]}
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </Grid>
//               );
//             })}
//           </Grid>
//         </Container>
//       </Box>

//       {/* Footer */}
//       <Box id="footer" sx={{ py: 3, textAlign: 'center', bgcolor: '#f5f5f5' }}>
//         <Container>
//           <Typography variant="body2" color="text.secondary">
//             © 2025 Harmony Garden & Estate Development Limited Ilamija, Ibeju-Lekki, Lagos, Nigeria
//           </Typography>
//         </Container>
//       </Box>

//       {/* Global animation keyframes */}
//       <style>
//         {`
//           @keyframes spin {
//             0% { transform: rotate(0deg); }
//             100% { transform: rotate(-10deg); }
//           }
//           @keyframes pulseBrightness {
//             0%, 100% { filter: brightness(1); }
//             50% { filter: brightness(1.8); }
//           }
//         `}
//       </style>
//     </>
//   );
// }

// export default App;

