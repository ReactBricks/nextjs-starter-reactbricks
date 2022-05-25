import { types } from 'react-bricks/frontend'
import website from 'react-bricks-ui/website'
import blog from 'react-bricks-ui/blog'
import HeroUnit from './HeroUnit'

const bricks: types.Brick[] = [...website, ...blog, HeroUnit]

export default bricks
