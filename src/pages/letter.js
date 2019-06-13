import React from 'react';
import { getLtr } from '../utilities/https';

//components
import Button from '../components/button';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const LettrPage = ({ ltr }) => <Layout>{ltr}</Layout>;

export default LettrPage;
