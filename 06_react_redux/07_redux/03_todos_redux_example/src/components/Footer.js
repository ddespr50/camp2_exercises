import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Footer = () => (
  <div>
    <span>Afficher: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      Toutes
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      En cours
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Terminées
    </FilterLink>
  </div>
)

export default Footer
