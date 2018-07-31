import { appendHead } from './appendHead.js';
import commonTpl from './myuw-common-vars.html';
import colorsTpl from './myuw-colors-madison.html';
import themeTpl from './madison-theme.html';

appendHead(commonTpl);
appendHead(colorsTpl);
appendHead(themeTpl);
