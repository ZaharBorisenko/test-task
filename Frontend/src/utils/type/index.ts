export interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface CommentType {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

//user
interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserType {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
