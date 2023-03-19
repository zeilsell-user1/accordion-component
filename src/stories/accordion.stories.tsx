import { itemList } from "../__mocks__/test-menu";
import { Accordion } from "../accordion/accordion";

export const container = (): JSX.Element => <Accordion items={itemList} />;
