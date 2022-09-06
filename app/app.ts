/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import { Application } from '@nativescript/core'

declare module '@nativescript/core/ui/layouts/grid-layout' {
  export interface GridLayout {
    set rows(v:string);
    set columns(v:string);
  }
}

Application.run({ moduleName: 'app-root' })

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
