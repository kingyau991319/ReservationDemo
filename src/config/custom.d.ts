/**
 * To solve unable to import svg files in typescripts
 * @see https://stackoverflow.com/questions/44717164/unable-to-import-svg-files-in-typescript
 * Module '"*.svg"' has no exported member 'ReactComponent
 * @see https://stackoverflow.com/questions/54121536/typescript-module-svg-has-no-exported-member-reactcomponent
 */
declare module "*.svg" {
    import React = require('react');
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}
