import { Accordion } from "../accordion/accordion";
import { itemList } from "../__mocks__/test-menu";

export const container = (): JSX.Element => 
<Accordion
    items={itemList}
  />
;