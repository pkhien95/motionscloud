export interface ListItem {
  id: string
  name: string
  firstSectionSelection: string
  firstSectionText: string
  secondSectionSelection: string
  secondSectionText: string
  thirdSectionSelection: string
  thirdSectionText: string
}

export interface ListState {
  entities: {
    [id: string]: ListItem
  }
  selectedId: string
}

export interface ShortListItem {
  id: string
  name: string
}
