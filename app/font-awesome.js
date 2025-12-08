// app/font-awesome.ts

import { library, config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import * as freeSolidIcons from '@fortawesome/free-solid-svg-icons';
import * as freeRegularIcons from '@fortawesome/free-regular-svg-icons';

config.autoAddCss = false;

library.add(freeSolidIcons['fas']);
library.add(freeRegularIcons['far']);

