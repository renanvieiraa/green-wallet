import { Container, Grid } from "@mui/material";
import React from "react";

function Home() {
  return (
    <Container>
      <Grid container columnSpacing={3}>
        <Grid item xs={12}>
          teste
        </Grid>
        <Grid item xs={12}>
          Saldo final
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
