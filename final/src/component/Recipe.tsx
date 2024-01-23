import { Box, Typography } from "@mui/material";
import { IoIosSearch } from "react-icons/io";
import Button from '@mui/material/Button';
import ímage1 from '../assets/Frame533.png'
import tomato from '../assets/Tomato.png';
import garlic from '../assets/Garlic.png';

function Recipe() {
  return (
    <Box
      className="main"
      sx={{
        height: "100vh",
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <Box
        className="container"
        sx={{
          width: "1100px",
          height: "777.73px",
          gap: "10px",
          display: "flex",
          flexDirection: "column",
          marginLeft: "97px",
        }}
      >
        <Box
          className="nav"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "none",
            paddingRight: "46px",
            textAlign: "center",
            width:'1186px',
            paddingTop: "10px",
          }}
        >
          <Box className="navbar-left" sx={{ float: "left", color: "white" }}>
            <img className="img" src="/images/Frame 2.png" alt=" logo" />
          </Box>
          <Box
            className="navbar-text"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
              textAlign: "center",
            }}
          >
            <Typography variant="h6">
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color: "#000",
                  fontFamily: "Inter",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "normal",
                  textAlign: "center",
                }}
              >
                Home
              </a>
            </Typography>
            <Typography variant="h6">
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color: "#000",
                  fontFamily: "Inter",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "normal",
                  textAlign: "center",
                }}
              >
                Recipe
              </a>
            </Typography>
            <Typography variant="h6">
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color: "#000",
                  fontFamily: "Inter",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "normal",
                  textAlign: "center",
                }}
              >
                Community
              </a>
            </Typography>
            <Typography variant="h6">
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color: "#000",
                  fontFamily: "Inter",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "normal",
                  textAlign: "center",
                }}
              >
                About Us
              </a>
            </Typography>
          </Box>
          <Box
            className="navbar-right"
            sx={{
              float: "right",
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <IoIosSearch className="search-icon" />
            <svg
              width="20"
              height="16"
              viewBox="0 0 21 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5275 0.931458C11.8347 0.931057 13.1077 1.34971 14.1595 2.12598C15.2114 2.90224 15.9867 3.99524 16.3716 5.24453C16.7566 6.49382 16.731 7.83362 16.2985 9.06727C15.866 10.3009 15.0495 11.3635 13.9688 12.0989C15.8446 12.787 17.4716 14.0207 18.6404 15.6413C19.8091 17.2619 20.4661 19.1952 20.5267 21.1923C20.5324 21.3032 20.5159 21.414 20.4781 21.5184C20.4404 21.6228 20.3822 20.7186 20.3069 21.8002C20.2316 21.8818 20.1408 21.9475 20.0398 21.9935C19.9388 22.0395 19.8296 22.0649 19.7186 22.0682C19.6077 22.0714 19.4972 22.0525 19.3937 22.0125C19.2901 21.9725 19.1956 21.9122 19.1157 21.8351C19.0358 21.7581 18.972 21.6659 18.9282 21.5639C18.8844 21.4619 18.8614 21.3522 18.8606 21.2412C18.7944 19.0754 17.8875 17.0204 16.332 15.5118C14.7766 14.0032 12.6949 13.1594 10.528 13.1594C8.36117 13.1594 6.27945 14.0032 4.72402 15.5118C3.16859 17.0204 2.26168 19.0754 2.19549 21.2412C2.18886 21.4623 2.09467 21.6717 1.93364 21.8234C1.77261 21.975 1.55794 22.0565 1.33684 22.0499C1.11575 22.0432 0.90634 21.949 0.754692 21.788C0.603044 21.627 0.521575 21.4123 0.528208 21.1912C0.589061 19.1942 1.24613 17.2612 2.41486 15.6408C3.58359 14.0204 5.2105 12.7869 7.0862 12.0989C6.00545 11.3635 5.18892 10.3009 4.75645 9.06727C4.32398 7.83362 4.29835 6.49382 4.68332 5.24453C5.06829 3.99524 5.84359 2.90224 6.89542 2.12598C7.94725 1.34971 9.22021 0.931057 10.5275 0.931458ZM6.08138 7.04484C6.08138 8.22402 6.54981 9.3549 7.38361 10.1887C8.21742 11.0225 9.3483 11.4909 10.5275 11.4909C11.7067 11.4909 12.8375 11.0225 13.6713 10.1887C14.5051 9.3549 14.9736 8.22402 14.9736 7.04484C14.9736 5.86566 14.5051 4.73478 13.6713 3.90097C12.8375 3.06717 11.7067 2.59874 10.5275 2.59874C9.3483 2.59874 8.21742 3.06717 7.38361 3.90097C6.54981 4.73478 6.08138 5.86566 6.08138 7.04484Z"
                fill="black"
              />
            </svg>
          </Box>
        </Box>
        <Box
          className="hero-section"
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            
          }}
        >
          <Box
            className="left-section"
            sx={{
              width: '610px',
              height: '416px',
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "90px",
            
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: '#000',
                letterSpacing: 'both',
                textTransform: 'capitalize',
                fontFamily: 'Inter',
                fontSize: '62px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '80px',
                width: '504px',
                marginLeft:'88px',
  
              }}
            >
              Cooking Made Fun and Easy: Unleash Your Inner Chef
            </Typography>
            <Typography
              variant="h1"
              sx={{
                width: '424px',
                color: '#7F7D7D',
                letterSpacing: 'both',
                textTransform: 'capitalize',
                fontFamily: 'Inter',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 300,
                lineHeight: '24px',
                marginLeft:'85px',
              }}
            >
              Discover more than <span style={{ color: '#F79F1A', fontFamily: 'Inter', fontSize: '16px', fontWeight: 300, lineHeight: '24px' }}>10,000 recipes</span> in your hand with the best recipe. Help you to find the easiest way to cook.
            </Typography>
           <Box sx={{display:'flex',justifyContent:'space-around',}}>
            <Box>
            <Button variant="contained"   sx={{
        display: 'flex',
        width: '249px',
        padding: '30px 40px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        borderRadius: '20px',
  background: '#F79F1A',
  color:'#FFFFFF',
  marginLeft:'60px',
      }}>Explore Recipes</Button>
      </Box>
      <Box>
     <img
  className="image"
  src={garlic}
  alt="right"
  style={{

    width: '100px',
    height: '100px',
    marginLeft:'256px',
    paddingTop:'36px',
    
  }}
/>
</Box>
          </Box>


          </Box>
          <Box  className="right-section" sx={{width:'658px',height:'590px'}}>
          
          <img
  className="image"
  src={tomato}
  alt="right"
  style={{
    position: 'absolute',
    left: '750px',
    top: '116.99px',
    width: '50px',
    height: '50px',
  }}
/>

          <img className="image"
           src={ímage1} alt=" right" 
           style={{ width: "690px", height: "auto" }}
           />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Recipe;
