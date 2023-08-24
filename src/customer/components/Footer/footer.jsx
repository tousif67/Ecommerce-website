import { Box, Button, Grid, Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Box>
            <Typography className="pb-5" variant="h6">
              Company
            </Typography>
            <Button className="pb-5" variant="h6" gutterBottom>
              About
            </Button>
            <br />
            <Button className="pb-5" variant="h6" gutterBottom>
              Blog
            </Button>
            <br />
            <Button className="pb-5" variant="h6" gutterBottom>
              Jobs
            </Button>
            <br />
            <Button className="pb-5" variant="h6" gutterBottom>
              Press
            </Button>
            <br />
            <Button className="pb-5" variant="h6" gutterBottom>
              Partners
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box>
            <Typography className="pb-5" variant="h6">
              Solutions
            </Typography>
            <Button className="pb-5" variant="h6" gutterBottom>
              Marketing
            </Button>
            <br />
            <Button className="pb-5" variant="h6" gutterBottom>
              Analytics
            </Button>
            <br />
            <Button className="pb-5" variant="h6" gutterBottom>
              Commerce
            </Button>
            <br />
            <Button className="pb-5" variant="h6" gutterBottom>
              Insights
            </Button>
            <br />
            <Button className="pb-5" variant="h6" gutterBottom>
              Support
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box>
            <Typography className="pb-5" variant="h6">
              Documentation
            </Typography>
            <Button className="pb-5" variant="h6" gutterBottom>
              Guides
            </Button>
            <br />
            <Button className="pb-5" variant="h6" gutterBottom>
              API Status
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box>
            <Typography className="pb-5" variant="h6">
              Legal
            </Typography>
            <Button className="pb-5" variant="h6" gutterBottom>
              Claim
            </Button>
            <br />
            <Button className="pb-5" variant="h6" gutterBottom>
              Privacy
            </Button>
            <br />
            <Button className="pb-5" variant="h6" gutterBottom>
              Terms
            </Button>
          </Box>
        </Grid>
        <Grid className='pt-20' item xs={12}>
            <Typography variant="body2" components="p" align="center">
              &copy; 2023 My Company. All rights reserved.
            </Typography>
            <Typography variant="body2" components="p" align="center">
              Made with Love by me.
            </Typography>
            <Typography variant="body2" components="p" align="center">
              Icons made by{' '}
              <Link href="https://www.freepik.com" color="inherit" underline="always">
              Freepik
              </Link>{' '}
              from{' '}
              <Link href="https://www.flaticon.com/" color="inherit" underline="always">
              www.flaticon.com
              </Link>
            </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
