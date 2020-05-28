export interface ElementInterface {
  name: string
  path: string
  type: 'folder' | 'file',
  size: number,
  createdAt : string
}
