import MainHeader from '@/component/main-header/main-header.js';
import './globals.css';
// import Home from './page';

export const metadata = {
  title: 'FoodApp',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {/* <Home /> */}
        {children}
        
      </body>
    </html>
  );
}
