import React from 'react'
import { types } from 'react-bricks/frontend'
import styles from '../../css/Pokemon.module.css'

interface PokemonProps {
  id: number
  name: string
  height: number
  weight: number
  imageUrl: string
}

const Pokemon: types.Brick<PokemonProps> = ({
  id,
  name,
  height,
  weight,
  imageUrl,
}) => {
  if (!id || !name || !height || !weight || !imageUrl) {
    return <div className={styles.containerNotFound}>Pokemon not found!</div>
  }
  return (
    <div className={styles.container}>
      <img src={imageUrl} className={styles.image} />

      <h1 className={styles.title}>{name}</h1>

      <p style={{ textAlign: 'center' }}>
        #{id} - Height {height / 10} m - Weight {weight / 10} Kg
      </p>
    </div>
  )
}

Pokemon.schema = {
  name: 'pokemon',
  label: 'Pokemon',
  mapExternalDataToProps: (externalData, brickProps) => ({
    id: externalData.id,
    name: externalData.name,
    height: externalData.height,
    weight: externalData.weight,
    imageUrl: externalData.imageUrl,
  }),

  // Sidebar Edit controls for props
  sideEditProps: [],
}

export default Pokemon
