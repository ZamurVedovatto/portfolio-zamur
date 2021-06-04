export default interface IUser {
  name: string,
  email: string,
  website?: string,
  address?: {
    city?: string
  },
}