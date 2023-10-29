/// <reference types="vite/client" />

interface MyContextData {
  display: string;
  setdisplay: React.Dispatch<React.SetStateAction<string>>;
  power: boolean;
}

interface MyObject {
  keyTrigger: string;
  url: string;
  description: string;
}
interface audio {
  items: MyObject[];
}
