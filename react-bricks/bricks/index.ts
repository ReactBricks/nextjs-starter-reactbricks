import { types } from "react-bricks/frontend"
import layout from "./layout"
import HeroUnit from "./HeroUnit"

const bricks: types.Brick[] = [HeroUnit, ...layout]

export default bricks
