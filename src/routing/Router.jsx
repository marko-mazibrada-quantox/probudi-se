import { Routes, Route } from 'react-router-dom';

import { Home } from 'components/pages/Home';
import { About } from 'components/pages/About';
import { Discrimination } from 'components/pages/Discrimination';
import { SoS } from 'components/pages/SoS';
import { Contact } from 'components/pages/Contact';
import { PrivacyPolicy } from 'components/pages/PrivacyPolicy';
import { PageLayout } from 'components/layouts/PageLayout';
import { Report } from 'components/pages/Report';
import { Profile } from 'components/pages/Profile';
import { Login } from 'components/pages/Login';
import { ProtectedRoute } from 'components/molecules/auth/ProtectedRoute';
import { ProtectedPage } from 'components/pages/ProtectedPage';

const Router = () => (
  <Routes>
    <Route element={<PageLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/protected" element={<ProtectedRoute component={ProtectedPage} />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/discrimination" element={<Discrimination />} />
      <Route path="/sos-phone" element={<SoS />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/report" element={<Report />} />
    </Route>
    <Route path="*" element={<div>Doesnt exist</div>} />
  </Routes>
);

export default Router;
