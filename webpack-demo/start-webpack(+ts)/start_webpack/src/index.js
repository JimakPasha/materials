import * as $ from 'jquery';
import Post from '@models/Post';
import json from './assets/json';
import WebpackLogo from './assets/img-webpack.png';
import './babel';

import './styles/styles.css';
import './styles/scss.scss';

const post = new Post('Webpack Post Title', WebpackLogo);

$('pre').html(post.toString());

console.log('Post to String', post.toString());

console.log('JSON:', json);