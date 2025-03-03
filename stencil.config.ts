import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
    namespace: 'oag-components',
    globalStyle: 'src/global/global.scss',
    outputTargets: [
        {
            type: 'dist',
            esmLoaderPath: '../loader',
        },
        {
            type: 'dist-custom-elements',
            customElementsExportBehavior: 'bundle',
            copy: [
                {
                    src: 'fonts/*',
                    dest: 'dist/fonts',
                    warn: true,
                },
            ],
        },
        {
            type: 'docs-readme',
            dir: 'docs',
        },
        {
            type: 'www',
            serviceWorker: null,
            copy: [
                {
                    src: 'fonts/*',
                    dest: 'fonts',
                    warn: true,
                },
                {
                    src: 'demos',
                },
            ],
        },
    ],
    plugins: [
        sass({
            injectGlobalPaths: ['src/global/variables.scss', 'src/global/fonts.scss', 'src/global/mixins.scss', 'src/global/maps.scss'],
        }),
    ],
};
