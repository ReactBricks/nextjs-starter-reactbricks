import { types } from "react-bricks/frontend"
import layout from "./layout"
import HeroUnit from "./HeroUnit"
import features from "./features"

const bricks: types.Brick[] = [HeroUnit, ...layout, ...features]

export default bricks
