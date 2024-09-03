export interface IMenuItems {
  id: number
  title: string
  sections: object[]
  link?: string
}

export interface IMenuSections extends Pick<IMenuItems, 'id' | 'title'> {
  links: object[]
}
