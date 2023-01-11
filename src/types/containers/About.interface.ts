/* 
    Type Definations for About Component Props & States
*/

import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Props Type Defination for About Component
export interface IAboutProps {
  props?: string;
}

export interface IAboutData {
  title: string;
  description: string;
  imageURL: SanityImageSource | string;
}
