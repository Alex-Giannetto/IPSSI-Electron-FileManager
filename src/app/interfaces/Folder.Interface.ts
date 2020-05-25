import { ElementInterface } from './Element.interface'

export interface FolderInterface extends ElementInterface{
  children : ElementInterface[]
}
