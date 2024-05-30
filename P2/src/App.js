import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllProducts from './pages/AllProducts';
import ProductPage from './pages/ProductPage';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" exact component={AllProducts} />
          <Route path="/product/:id" component={ProductPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
