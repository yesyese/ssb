import React from 'react';
import { Navigate } from 'react-router-dom';

// Redirect /contact to unified Inquiry form
export default function Contact() {
  return <Navigate to="/inquiry?type=contact" replace />;
}
