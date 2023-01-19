type SubItem = {
    enabled: boolean;
    title: string;
    description?: string;
    url: string;
  };
  
  type Item = {
    enabled: boolean;
    title: string;
    description?: string;
    subItems: SubItem[];
  };
  
  export { SubItem, Item };