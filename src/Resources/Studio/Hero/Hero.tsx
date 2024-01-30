import { HeroList } from "./HeroList";
import { HeroCreate } from "./HeroCreate";
import { HeroEdit } from "./HeroEdit";

export default {
   resource: "hero_studio",
   list: HeroList,
   create: HeroCreate,
   edit: HeroEdit,
};
